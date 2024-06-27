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
exports.ScatterLabelsDropZone = void 0;
/**
* Settings for the Labels drop zone for the Scatter visual
*/
var ScatterLabelsDropZone = /** @class */ (function () {
    function ScatterLabelsDropZone() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'ScatterLabelsDropZone';
    }
    ScatterLabelsDropZone.getAttributeTypeMap = function () {
        return ScatterLabelsDropZone.attributeTypeMap;
    };
    ScatterLabelsDropZone.discriminator = undefined;
    ScatterLabelsDropZone.attributeTypeMap = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<ScatterLabelsChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return ScatterLabelsDropZone;
}());
exports.ScatterLabelsDropZone = ScatterLabelsDropZone;