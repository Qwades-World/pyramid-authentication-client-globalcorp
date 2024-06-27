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
exports.GridValuesMeasureChip = void 0;
/**
* Settings for the Values measure drop zone chip for the Grid visual
*/
var GridValuesMeasureChip = /** @class */ (function () {
    function GridValuesMeasureChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'GridValuesMeasureChip';
    }
    GridValuesMeasureChip.getAttributeTypeMap = function () {
        return GridValuesMeasureChip.attributeTypeMap;
    };
    GridValuesMeasureChip.discriminator = undefined;
    GridValuesMeasureChip.attributeTypeMap = [
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
    return GridValuesMeasureChip;
}());
exports.GridValuesMeasureChip = GridValuesMeasureChip;
