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
exports.MapColorChip = void 0;
/**
* Settings for the Color drop zone chip for the Map visual
*/
var MapColorChip = /** @class */ (function () {
    function MapColorChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'MapColorChip';
    }
    MapColorChip.getAttributeTypeMap = function () {
        return MapColorChip.attributeTypeMap;
    };
    MapColorChip.discriminator = undefined;
    MapColorChip.attributeTypeMap = [
        {
            "name": "measure",
            "baseName": "measure",
            "type": "MapColorMeasureChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "MapColorHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return MapColorChip;
}());
exports.MapColorChip = MapColorChip;
