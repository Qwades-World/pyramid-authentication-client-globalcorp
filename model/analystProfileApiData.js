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
exports.AnalystProfileApiData = void 0;
/**
* An object that contains the profile definition for analyst users.
*/
var AnalystProfileApiData = /** @class */ (function () {
    function AnalystProfileApiData() {
    }
    AnalystProfileApiData.getAttributeTypeMap = function () {
        return AnalystProfileApiData.attributeTypeMap;
    };
    AnalystProfileApiData.discriminator = undefined;
    AnalystProfileApiData.attributeTypeMap = [
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "AnalyticsPermissions"
        },
        {
            "name": "profileId",
            "baseName": "profileId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }
    ];
    return AnalystProfileApiData;
}());
exports.AnalystProfileApiData = AnalystProfileApiData;
