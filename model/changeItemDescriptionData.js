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
exports.ChangeItemDescriptionData = void 0;
/**
* The change object used to set a description for a given content item.
*/
var ChangeItemDescriptionData = /** @class */ (function () {
    function ChangeItemDescriptionData() {
    }
    ChangeItemDescriptionData.getAttributeTypeMap = function () {
        return ChangeItemDescriptionData.attributeTypeMap;
    };
    ChangeItemDescriptionData.discriminator = undefined;
    ChangeItemDescriptionData.attributeTypeMap = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }
    ];
    return ChangeItemDescriptionData;
}());
exports.ChangeItemDescriptionData = ChangeItemDescriptionData;