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
exports.ScatterShapeChip = void 0;
/**
* Settings for the Shape drop zone chip for the Scatter visual
*/
var ScatterShapeChip = /** @class */ (function () {
    function ScatterShapeChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'ScatterShapeChip';
    }
    ScatterShapeChip.getAttributeTypeMap = function () {
        return ScatterShapeChip.attributeTypeMap;
    };
    ScatterShapeChip.discriminator = undefined;
    ScatterShapeChip.attributeTypeMap = [
        {
            "name": "measure",
            "baseName": "measure",
            "type": "ScatterShapeMeasureChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "ScatterShapeHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return ScatterShapeChip;
}());
exports.ScatterShapeChip = ScatterShapeChip;
