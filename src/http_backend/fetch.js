export default async function (requestParams) {
    return fetch(requestParams.url, {
        method: requestParams.method,
        headers: new Headers(requestParams.headers),
        body: requestParams.data,
    }).then(response => parseBody(response).then(json => {
        let headers = {};

        if (typeof Headers.prototype.forEach === 'function') {
            response.headers.forEach((value, name) => {
                headers[name] = value
            })
        } else if (typeof Headers.prototype.keys === 'function') {
            const keys = response.headers.keys();
            for (const key of keys) {
                headers[key] = response.headers.get(key);
            }
        } else {
            headers = response.headers
        }

        const responsePayload = {
            data: json,
            headers: headers,
            method: requestParams.method.toLowerCase(),
            statusCode: response.status,
        };

        if (response.status >= 200 && response.status < 300) {
            return responsePayload;
        }

        const error = new Error(response.statusText);
        error.response = responsePayload;
        throw error;
    }));
}


const parseBody = (response) =>
    response.text().then(text => {
        try {
            return JSON.parse(text);
        } catch (error) {
            return text;
        }
    });