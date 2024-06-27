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
exports.ListData = void 0;
/**
* The Custom List To add.
*/
var ListData = /** @class */ (function () {
    function ListData() {
    }
    ListData.getAttributeTypeMap = function () {
        return ListData.attributeTypeMap;
    };
    ListData.discriminator = undefined;
    ListData.attributeTypeMap = [
        {
            "name": "formulaSyntax",
            "baseName": "formulaSyntax",
            "type": "string"
        },
        {
            "name": "itemName",
            "baseName": "itemName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "connectionId",
            "baseName": "connectionId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "parentDimension",
            "baseName": "parentDimension",
            "type": "string"
        },
        {
            "name": "parentHierarchy",
            "baseName": "parentHierarchy",
            "type": "string"
        },
        {
            "name": "folderId",
            "baseName": "folderId",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        }
    ];
    return ListData;
}());
exports.ListData = ListData;