export default class Api {
    constructor(baseUrl, headers = {}, subUrl = '', requestInterceptors = []) {
        this.baseUrl = baseUrl;
        this.subUrl = subUrl;
        this.requestInterceptors = requestInterceptors;
        this.headers = headers;
    }

    addRequestInterceptor(interceptor) {
        this.requestInterceptors.push(interceptor);
    }

    async get(id) {
        return await Api._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl + '/' + id,
            method: 'GET'
        });
    }

    async getAll() {
        return await Api._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl,
            method: 'GET'
        });
    }

    async post(data = {}) {
        return await Api._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl,
            method: 'POST',
            data: data
        });
    }

    async put(id, data = {}) {
        return await Api._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl + '/' + id,
            method: 'PUT',
            data: data
        });
    }

    async patch(id, data = {}) {
        return await Api._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl + '/' + id,
            method: 'PATCH',
            data: data
        });
    }

    async delete(id, data = {}) {
        return await Api._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl + '/' + id,
            method: 'DELETE',
            data: data
        });
    }

    all(name) {
        const newSubUrl = this.subUrl + this._normalizeSubUrl(name);
        return new Api(this.baseUrl, this.headers, newSubUrl, this.requestInterceptors);
    }

    one(name, id) {
        const newSubUrl = this.subUrl + this._normalizeSubUrl(name) + '/' + id;
        return new Api(this.baseUrl, this.headers, newSubUrl, this.requestInterceptors);
    }

    set baseUrl(val) {
        if (val.slice(-1) === '/')
            this._baseUrl = val.slice(0, -1);
        this._baseUrl = val;
    }

    get baseUrl() {
        return this._baseUrl;
    }

    async static _doRequest({url, method, headers, body, params}) {
        const riResult = Api._doRequestInterceptors({
            headers: headers,
            url: url,
            method: method,
            data: body,
            params: params
        });

        let response = await fetch(riResult.url, {
            method: riResult.method,
            headers: new Headers(riResult.headers),
            body: riResult.data,
        });

        // TODO response interceptor
        // TODO error interceptor

        // TODO more fields for response
        return {
            body: await response.json(),
            status: response.status
        };
    }

    static _doRequestInterceptors({headers, url, method, data, params}) {
        let _headers = headers;
        let _url = url;
        let _method = method;
        let _data = data;
        let _params = params;

        this.requestInterceptors.forEach(interceptor => {
            const options = interceptor({
                data: _data,
                params: _params,
                headers: _headers,
                url: _url,
                method: _method
            });
            _headers = options.headers ?? _headers;
            _url = options.url ?? _url;
            _method = options.method ?? _method;
            _data = options.data ?? _data;
            _params = options.params ?? _params;
        });

        return {
            headers: _headers,
            url: _url,
            method: _method,
            data: _data,
            params: _params,
        }
    }

    /// ensures urlPart has a leading /
    _normalizeSubUrl(urlPart) {
        if (urlPart[0] === '/')
            return urlPart;
        return '/' + urlPart;
    }
}
