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
exports.MapDetailsHierarchyChip = void 0;
/**
* Settings for the Details hierarchy drop zone chip for the Map visual
*/
var MapDetailsHierarchyChip = /** @class */ (function () {
    function MapDetailsHierarchyChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'MapDetailsHierarchyChip';
    }
    MapDetailsHierarchyChip.getAttributeTypeMap = function () {
        return MapDetailsHierarchyChip.attributeTypeMap;
    };
    MapDetailsHierarchyChip.discriminator = undefined;
    MapDetailsHierarchyChip.attributeTypeMap = [
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
    return MapDetailsHierarchyChip;
}());
exports.MapDetailsHierarchyChip = MapDetailsHierarchyChip;
