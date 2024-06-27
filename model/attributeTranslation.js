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
exports.AttributeTranslation = void 0;
/**
* Describes translations for attribute
*/
var AttributeTranslation = /** @class */ (function () {
    function AttributeTranslation() {
    }
    AttributeTranslation.getAttributeTypeMap = function () {
        return AttributeTranslation.attributeTypeMap;
    };
    AttributeTranslation.discriminator = undefined;
    AttributeTranslation.attributeTypeMap = [
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "columnUniqueName",
            "baseName": "columnUniqueName",
            "type": "string"
        }
    ];
    return AttributeTranslation;
}());
exports.AttributeTranslation = AttributeTranslation;
