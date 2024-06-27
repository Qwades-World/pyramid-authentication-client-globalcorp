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
exports.SegmentSizeDropZone = void 0;
/**
* Settings for the Size drop zone for the Segment visual
*/
var SegmentSizeDropZone = /** @class */ (function () {
    function SegmentSizeDropZone() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'SegmentSizeDropZone';
    }
    SegmentSizeDropZone.getAttributeTypeMap = function () {
        return SegmentSizeDropZone.attributeTypeMap;
    };
    SegmentSizeDropZone.discriminator = undefined;
    SegmentSizeDropZone.attributeTypeMap = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<SegmentSizeMeasureChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return SegmentSizeDropZone;
}());
exports.SegmentSizeDropZone = SegmentSizeDropZone;
