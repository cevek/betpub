class HTTP {
    static request(method, url, data) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.open(method, url, true);
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
                    } else {
                        reject(req);
                    }
                }
            };
            req.send(data);
        });
    }

    static requestRaw(method, url, data, responseType) {
        return new Promise((resolve, reject)=> {
            let req = new XMLHttpRequest();
            req.open(method, url, true);
            if (responseType) {
                req.responseType = responseType;
            }
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        resolve(req.response);
                    } else {
                        reject(req);
                    }
                }
            };
            req.send(data);
        });
    }

    static get(url, raw, responseType) {
        return raw ? HTTP.requestRaw('GET', url, null, responseType) : HTTP.request('GET', url);
    }
}