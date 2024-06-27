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
exports.GridColorMeasureChip = void 0;
/**
* Settings for the Color measure drop zone chip for the Grid visual
*/
var GridColorMeasureChip = /** @class */ (function () {
    function GridColorMeasureChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'GridColorMeasureChip';
    }
    GridColorMeasureChip.getAttributeTypeMap = function () {
        return GridColorMeasureChip.attributeTypeMap;
    };
    GridColorMeasureChip.discriminator = undefined;
    GridColorMeasureChip.attributeTypeMap = [
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "gridColorOption",
            "baseName": "gridColorOption",
            "type": "GridColorOption"
        },
        {
            "name": "mathFunction",
            "baseName": "mathFunction",
            "type": "ColorMathFunction"
        },
        {
            "name": "targetMeasure",
            "baseName": "targetMeasure",
            "type": "string"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return GridColorMeasureChip;
}());
exports.GridColorMeasureChip = GridColorMeasureChip;
