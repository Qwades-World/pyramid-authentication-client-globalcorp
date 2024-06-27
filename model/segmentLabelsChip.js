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
exports.SegmentLabelsChip = void 0;
/**
* Settings for the Labels drop zone chip for the Segment visual
*/
var SegmentLabelsChip = /** @class */ (function () {
    function SegmentLabelsChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'SegmentLabelsChip';
    }
    SegmentLabelsChip.getAttributeTypeMap = function () {
        return SegmentLabelsChip.attributeTypeMap;
    };
    SegmentLabelsChip.discriminator = undefined;
    SegmentLabelsChip.attributeTypeMap = [
        {
            "name": "measure",
            "baseName": "measure",
            "type": "SegmentLabelsMeasureChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "SegmentLabelsHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return SegmentLabelsChip;
}());
exports.SegmentLabelsChip = SegmentLabelsChip;