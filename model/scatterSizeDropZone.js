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
exports.ScatterSizeDropZone = void 0;
/**
* Settings for the Size drop zone for the Scatter visual
*/
var ScatterSizeDropZone = /** @class */ (function () {
    function ScatterSizeDropZone() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'ScatterSizeDropZone';
    }
    ScatterSizeDropZone.getAttributeTypeMap = function () {
        return ScatterSizeDropZone.attributeTypeMap;
    };
    ScatterSizeDropZone.discriminator = undefined;
    ScatterSizeDropZone.attributeTypeMap = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<ScatterSizeMeasureChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return ScatterSizeDropZone;
}());
exports.ScatterSizeDropZone = ScatterSizeDropZone;
