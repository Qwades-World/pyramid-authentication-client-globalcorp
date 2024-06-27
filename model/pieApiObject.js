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
exports.PieApiObject = void 0;
/**
* The object representing the details for where to import a PIE file of content.
*/
var PieApiObject = /** @class */ (function () {
    function PieApiObject() {
    }
    PieApiObject.getAttributeTypeMap = function () {
        return PieApiObject.attributeTypeMap;
    };
    PieApiObject.discriminator = undefined;
    PieApiObject.attributeTypeMap = [
        {
            "name": "fileZippedData",
            "baseName": "fileZippedData",
            "type": "string"
        },
        {
            "name": "rolesAssignmentType",
            "baseName": "rolesAssignmentType",
            "type": "RoleAssignmentType"
        },
        {
            "name": "roleIds",
            "baseName": "roleIds",
            "type": "Array<string>"
        },
        {
            "name": "rootFolderId",
            "baseName": "rootFolderId",
            "type": "string"
        },
        {
            "name": "clashDefaultOption",
            "baseName": "clashDefaultOption",
            "type": "ClashDefaultOption"
        }
    ];
    return PieApiObject;
}());
exports.PieApiObject = PieApiObject;
