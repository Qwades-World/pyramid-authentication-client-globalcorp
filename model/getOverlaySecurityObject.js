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
exports.GetOverlaySecurityObject = void 0;
/**
* An object representing the data model overlay / security.
*/
var GetOverlaySecurityObject = /** @class */ (function () {
    function GetOverlaySecurityObject() {
    }
    GetOverlaySecurityObject.getAttributeTypeMap = function () {
        return GetOverlaySecurityObject.attributeTypeMap;
    };
    GetOverlaySecurityObject.discriminator = undefined;
    GetOverlaySecurityObject.attributeTypeMap = [
        {
            "name": "modelId",
            "baseName": "modelId",
            "type": "string"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string"
        }
    ];
    return GetOverlaySecurityObject;
}());
exports.GetOverlaySecurityObject = GetOverlaySecurityObject;
