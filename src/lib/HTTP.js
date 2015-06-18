export class HTTP {
    prefix = '';

    constructor(prefix) {
        this.prefix = prefix;
    }

    request(method, url, data) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.open(method, this.prefix + url, true);
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        try {
                            let data = JSON.parse(req.responseText);
                            resolve(data);
                        }
                        catch (e) {
                            console.error(e);
                            reject(req.responseText);
                        }
                    }
                    else {
                        reject(req);
                    }
                }
            };
            req.send(data);
        });
    }

    requestRaw(method, url, data, responseType) {
        return new Promise((resolve, reject)=> {
            let req = new XMLHttpRequest();
            req.open(method, this.prefix + url, true);
            if (responseType) {
                req.responseType = responseType;
            }
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        resolve(req.response);
                    }
                    else {
                        reject(req);
                    }
                }
            };
            req.send(data);
        });
    }

    get(url, raw, responseType) {
        return raw ? this.requestRaw('GET', url, null, responseType) : this.request('GET', url);
    }
}