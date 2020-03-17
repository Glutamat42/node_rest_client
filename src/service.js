import fetch from './http_backend/fetch'

export default async function ({url, method = 'GET', headers, data, params}, {requestInterceptors = [], responseInterceptors = [], errorInterceptors = []}) {
    // TODO validate params

    const requestParameter = doRequestInterceptors(
        requestInterceptors,
        {
            headers: headers,
            url: url,
            method: method,
            data: data,
            params: params
        }
    );

    requestParameter.data = typeof data === 'string' ? data : JSON.stringify(data);

    const response = await fetch(requestParameter);

    // TODO response interceptor
    // TODO error interceptor

    // TODO more fields for response
    return response;
}


function doRequestInterceptors(requestInterceptors, {headers, url, method, data, params}) {
    let _headers = headers;
    let _url = url;
    let _method = method;
    let _data = data;
    let _params = params;

    requestInterceptors.forEach(interceptor => {
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

