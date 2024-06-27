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
exports.MapTooltipMeasureChip = void 0;
/**
* Settings for the Tooltip measure drop zone chip for the Map visual
*/
var MapTooltipMeasureChip = /** @class */ (function () {
    function MapTooltipMeasureChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'MapTooltipMeasureChip';
    }
    MapTooltipMeasureChip.getAttributeTypeMap = function () {
        return MapTooltipMeasureChip.attributeTypeMap;
    };
    MapTooltipMeasureChip.discriminator = undefined;
    MapTooltipMeasureChip.attributeTypeMap = [
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return MapTooltipMeasureChip;
}());
exports.MapTooltipMeasureChip = MapTooltipMeasureChip;
