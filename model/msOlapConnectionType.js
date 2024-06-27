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
exports.MsOlapConnectionType = void 0;
/**
* Configure the manner in which the SSAS server is configured to receive connections
*/
var MsOlapConnectionType;
(function (MsOlapConnectionType) {
    MsOlapConnectionType[MsOlapConnectionType["Regular"] = 'REGULAR'] = "Regular";
    MsOlapConnectionType[MsOlapConnectionType["Azure"] = 'AZURE'] = "Azure";
    MsOlapConnectionType[MsOlapConnectionType["HttpPumpWindows"] = 'HTTP_PUMP_WINDOWS'] = "HttpPumpWindows";
    MsOlapConnectionType[MsOlapConnectionType["HttpPumpBasic"] = 'HTTP_PUMP_BASIC'] = "HttpPumpBasic";
    MsOlapConnectionType[MsOlapConnectionType["PowerBiWorkspace"] = 'POWER_BI_WORKSPACE'] = "PowerBiWorkspace";
})(MsOlapConnectionType || (exports.MsOlapConnectionType = MsOlapConnectionType = {}));