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
exports.SegmentMotionDropZone = void 0;
/**
* Settings for the Motion drop zone for the Segment visual
*/
var SegmentMotionDropZone = /** @class */ (function () {
    function SegmentMotionDropZone() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'SegmentMotionDropZone';
    }
    SegmentMotionDropZone.getAttributeTypeMap = function () {
        return SegmentMotionDropZone.attributeTypeMap;
    };
    SegmentMotionDropZone.discriminator = undefined;
    SegmentMotionDropZone.attributeTypeMap = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<SegmentMotionHierarchyChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return SegmentMotionDropZone;
}());
exports.SegmentMotionDropZone = SegmentMotionDropZone;