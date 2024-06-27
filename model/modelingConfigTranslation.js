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
exports.ModelingConfigTranslation = void 0;
/**
* Model configuration for a specific language.
*/
var ModelingConfigTranslation = /** @class */ (function () {
    function ModelingConfigTranslation() {
    }
    ModelingConfigTranslation.getAttributeTypeMap = function () {
        return ModelingConfigTranslation.attributeTypeMap;
    };
    ModelingConfigTranslation.discriminator = undefined;
    ModelingConfigTranslation.attributeTypeMap = [
        {
            "name": "allLevelName",
            "baseName": "allLevelName",
            "type": "string"
        },
        {
            "name": "pchLevelTemplate",
            "baseName": "pchLevelTemplate",
            "type": "string"
        },
        {
            "name": "defaultDateFormat",
            "baseName": "defaultDateFormat",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "allMemberName",
            "baseName": "allMemberName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        }
    ];
    return ModelingConfigTranslation;
}());
exports.ModelingConfigTranslation = ModelingConfigTranslation;