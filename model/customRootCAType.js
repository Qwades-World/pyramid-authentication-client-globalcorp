"use strict";
/**
 * Pyramid Analytics Web API
 * Pyramid Analytics Web API enables user applications to manage their pyramid                                             data and settings
 *
 * The version of the OpenAPI document: 2023.12.181
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRootCAType = void 0;
/**
* Defines options to use as a custom Root Certificate Authority for the trust validation of SSL certificates
*/
var CustomRootCAType;
(function (CustomRootCAType) {
    CustomRootCAType[CustomRootCAType["None"] = 'None'] = "None";
    CustomRootCAType[CustomRootCAType["CustomRootCaCert"] = 'CustomRootCaCert'] = "CustomRootCaCert";
    CustomRootCAType[CustomRootCAType["CustomTrustStore"] = 'CustomTrustStore'] = "CustomTrustStore";
})(CustomRootCAType || (exports.CustomRootCAType = CustomRootCAType = {}));