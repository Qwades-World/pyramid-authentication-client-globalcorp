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
exports.MapLocationMeasureChip = void 0;
/**
* Settings for the Location measure drop zone chip for the Map visual
*/
var MapLocationMeasureChip = /** @class */ (function () {
    function MapLocationMeasureChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'MapLocationMeasureChip';
    }
    MapLocationMeasureChip.getAttributeTypeMap = function () {
        return MapLocationMeasureChip.attributeTypeMap;
    };
    MapLocationMeasureChip.discriminator = undefined;
    MapLocationMeasureChip.attributeTypeMap = [
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "mapOptions",
            "baseName": "mapOptions",
            "type": "MeasureMapOptions"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return MapLocationMeasureChip;
}());
exports.MapLocationMeasureChip = MapLocationMeasureChip;
