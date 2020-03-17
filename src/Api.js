import requestBackend from "./service";

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
        return await this._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl + '/' + id,
            method: 'GET'
        });
    }

    async getAll() {
        return await this._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl,
            method: 'GET'
        });
    }

    async post(data = {}) {
        return await this._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl,
            method: 'POST',
            data: data
        });
    }

    async put(id, data = {}) {
        return await this._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl + '/' + id,
            method: 'PUT',
            data: data
        });
    }

    async patch(id, data = {}) {
        return await this._doRequest({
            headers: this.headers,
            url: this.baseUrl + this.subUrl + '/' + id,
            method: 'PATCH',
            data: data
        });
    }

    async delete(id, data = {}) {
        return await this._doRequest({
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

    _doRequest(requestParameter) {
        return requestBackend(requestParameter, {requestInterceptors: this.requestInterceptors});
    }

    /// ensures urlPart has a leading /
    _normalizeSubUrl(urlPart) {
        if (urlPart[0] === '/')
            return urlPart;
        return '/' + urlPart;
    }
}
