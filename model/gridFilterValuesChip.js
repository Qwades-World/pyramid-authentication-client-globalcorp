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
exports.GridFilterValuesChip = void 0;
/**
* Settings for the Filter values drop zone chip for the Grid visual
*/
var GridFilterValuesChip = /** @class */ (function () {
    function GridFilterValuesChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'GridFilterValuesChip';
    }
    GridFilterValuesChip.getAttributeTypeMap = function () {
        return GridFilterValuesChip.attributeTypeMap;
    };
    GridFilterValuesChip.discriminator = undefined;
    GridFilterValuesChip.attributeTypeMap = [
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "FilterValuesType"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return GridFilterValuesChip;
}());
exports.GridFilterValuesChip = GridFilterValuesChip;
