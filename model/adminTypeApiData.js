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
exports.AdminTypeApiData = void 0;
/**
* The admin type object contains the admin settings for a given user.
*/
var AdminTypeApiData = /** @class */ (function () {
    function AdminTypeApiData() {
    }
    AdminTypeApiData.getAttributeTypeMap = function () {
        return AdminTypeApiData.attributeTypeMap;
    };
    AdminTypeApiData.discriminator = undefined;
    AdminTypeApiData.attributeTypeMap = [
        {
            "name": "adminType",
            "baseName": "adminType",
            "type": "AdminType"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        }
    ];
    return AdminTypeApiData;
}());
exports.AdminTypeApiData = AdminTypeApiData;
