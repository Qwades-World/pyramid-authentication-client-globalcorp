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
exports.NewFolderApiData = void 0;
/**
* The listing of content items object.
*/
var NewFolderApiData = /** @class */ (function () {
    function NewFolderApiData() {
    }
    NewFolderApiData.getAttributeTypeMap = function () {
        return NewFolderApiData.attributeTypeMap;
    };
    NewFolderApiData.discriminator = undefined;
    NewFolderApiData.attributeTypeMap = [
        {
            "name": "parentFolderId",
            "baseName": "parentFolderId",
            "type": "string"
        },
        {
            "name": "folderName",
            "baseName": "folderName",
            "type": "string"
        },
        {
            "name": "folderId",
            "baseName": "folderId",
            "type": "string"
        }
    ];
    return NewFolderApiData;
}());
exports.NewFolderApiData = NewFolderApiData;
