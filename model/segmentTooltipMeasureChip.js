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
exports.SegmentTooltipMeasureChip = void 0;
/**
* Settings for the Tooltip measure drop zone chip for the Segment visual
*/
var SegmentTooltipMeasureChip = /** @class */ (function () {
    function SegmentTooltipMeasureChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'SegmentTooltipMeasureChip';
    }
    SegmentTooltipMeasureChip.getAttributeTypeMap = function () {
        return SegmentTooltipMeasureChip.attributeTypeMap;
    };
    SegmentTooltipMeasureChip.discriminator = undefined;
    SegmentTooltipMeasureChip.attributeTypeMap = [
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
    return SegmentTooltipMeasureChip;
}());
exports.SegmentTooltipMeasureChip = SegmentTooltipMeasureChip;
