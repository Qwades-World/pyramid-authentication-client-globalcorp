"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var apiUrl = process.env.APIURL || "https://www.example.com";
var apiKey = process.env.APIKEY || "THISISAKEY";
var data = {
    lastName: "Smithy",
    userName: "bob",
    firstName: "Robert",
    password: "password",
    tenantId: process.env.TENANTID,
    adminType: 0,
    clientLicenseType: 100,
    email: "bob@bob.com",
    inheritanceType: "CreateUserDbObject"
};
axios_1.default.post(apiUrl, data, {
    headers: {
        paToken: apiKey
    }
})
    .then(function (response) {
    console.log('Success:', response.data);
})
    .catch(function (error) {
    console.error('Error:', error);
});
