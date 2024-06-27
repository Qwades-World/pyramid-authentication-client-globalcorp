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
exports.SegmentMotionHierarchyChip = void 0;
/**
* Settings for the Motion hierarchy drop zone chip for the Segment visual
*/
var SegmentMotionHierarchyChip = /** @class */ (function () {
    function SegmentMotionHierarchyChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'SegmentMotionHierarchyChip';
    }
    SegmentMotionHierarchyChip.getAttributeTypeMap = function () {
        return SegmentMotionHierarchyChip.attributeTypeMap;
    };
    SegmentMotionHierarchyChip.discriminator = undefined;
    SegmentMotionHierarchyChip.attributeTypeMap = [
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
    return SegmentMotionHierarchyChip;
}());
exports.SegmentMotionHierarchyChip = SegmentMotionHierarchyChip;