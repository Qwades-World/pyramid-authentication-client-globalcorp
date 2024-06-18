import { XMLHttpRequest } from "xhr2";

// URL of the Pyramid installation and the path to the API 3.0 REST methods
var pyramidURL = "http://aebe29ce17b774358858f877b6cc71d3-1279237833.us-east-1.elb.amazonaws.com:8181/API3/";

(async () => {
    let token = await callApi("authentication/authenticateUser", {
        "userName": "qwade",
        "password": "Password"
    }, "", false);

    let currentUser = await callApi("access/getMe", {}, token);

    let userId = currentUser.data[0];
})();

// ##### generic REST API calling method ##############
async function callApi(path: string, data: object, token: string = "", parseResult: boolean = true): Promise<any> {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", pyramidURL + path, true);
        xhttp.setRequestHeader("paToken", token);
        xhttp.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                if (parseResult) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    resolve(xhttp.responseText);
                }
            } else {
                reject({
                    status: this.status,
                    statusText: xhttp.statusText
                });
            }
        };
        xhttp.onerror = function () {
            reject({
                status: this.status,
                statusText: xhttp.statusText
            });
        };
        xhttp.send(JSON.stringify(data));
    });
}

