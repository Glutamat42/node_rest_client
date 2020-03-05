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
        this.subUrl += '/' + id;
        return await this._get();
    }

    async getAll() {
        return await this._get();
    }

    async _get() {
        let headers = this.headers;
        let url = this.baseUrl + this.subUrl;
        let method = 'GET';

        this.requestInterceptors.forEach(interceptor => {
            const options = interceptor({
                data: {}, // not yet supported, just for compatibility reasons
                params: {}, // not yet supported, just for compatibility reasons
                headers: headers,
                url: url,
                method: method
            });
            headers = options.headers ?? headers;
            url = options.url ?? url;
            method = options.method ?? method;
        });

        let response = await fetch(url, {
            method: method,
            headers: new Headers(headers),
        });

        return {
            body: await response.json(),
            status: response.status
        };
    }

    all(name) {
        const newSubUrl = this.subUrl + this._normalizeSubUrl(name);
        return new Api(this.baseUrl, this.headers, newSubUrl, this.requestInterceptors);
    }

    one(name, id) {
        const newSubUrl = this.subUrl + this._normalizeSubUrl(name) + '/' + id;
        return new Api(this.baseUrl, this.headers, newSubUrl, this.requestInterceptors);
    }

    post() {
    }

    put() {
    }

    delete() {
    }

    /// ensures urlPart has a leading /
    _normalizeSubUrl(urlPart) {
        if(urlPart[0] === '/')
            return urlPart;
        return '/' + urlPart;
    }

    set baseUrl(val) {
        if (val.slice(-1) === '/')
            this._baseUrl = val.slice(0, -1);
        this._baseUrl = val;
    }

    get baseUrl() {
        return this._baseUrl;
    }
}
