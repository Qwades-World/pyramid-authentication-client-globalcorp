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
exports.ScientistProfileApiData = void 0;
/**
* An object that contains the profile definition for scientist users.
*/
var ScientistProfileApiData = /** @class */ (function () {
    function ScientistProfileApiData() {
    }
    ScientistProfileApiData.getAttributeTypeMap = function () {
        return ScientistProfileApiData.attributeTypeMap;
    };
    ScientistProfileApiData.discriminator = undefined;
    ScientistProfileApiData.attributeTypeMap = [
        {
            "name": "profileId",
            "baseName": "profileId",
            "type": "string"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "ScientistPermissions"
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
    return ScientistProfileApiData;
}());
exports.ScientistProfileApiData = ScientistProfileApiData;
