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
exports.HubApiObject = void 0;
/**
* An object containing the details of the Hub template archive.
*/
var HubApiObject = /** @class */ (function () {
    function HubApiObject() {
    }
    HubApiObject.getAttributeTypeMap = function () {
        return HubApiObject.attributeTypeMap;
    };
    HubApiObject.discriminator = undefined;
    HubApiObject.attributeTypeMap = [
        {
            "name": "fileZippedData",
            "baseName": "fileZippedData",
            "type": "string"
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean"
        }
    ];
    return HubApiObject;
}());
exports.HubApiObject = HubApiObject;