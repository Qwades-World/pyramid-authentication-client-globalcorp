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
exports.SapBwServerConnectionType = void 0;
/**
* Configure what type of SAP BW server to connect to
*/
var SapBwServerConnectionType;
(function (SapBwServerConnectionType) {
    SapBwServerConnectionType[SapBwServerConnectionType["AppServer"] = 'APP_SERVER'] = "AppServer";
    SapBwServerConnectionType[SapBwServerConnectionType["MessageServer"] = 'MESSAGE_SERVER'] = "MessageServer";
})(SapBwServerConnectionType || (exports.SapBwServerConnectionType = SapBwServerConnectionType = {}));