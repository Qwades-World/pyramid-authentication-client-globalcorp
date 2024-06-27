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
exports.ScatterXValuesMeasureChip = void 0;
/**
* Settings for the XValues measure drop zone chip for the Scatter visual
*/
var ScatterXValuesMeasureChip = /** @class */ (function () {
    function ScatterXValuesMeasureChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'ScatterXValuesMeasureChip';
    }
    ScatterXValuesMeasureChip.getAttributeTypeMap = function () {
        return ScatterXValuesMeasureChip.attributeTypeMap;
    };
    ScatterXValuesMeasureChip.discriminator = undefined;
    ScatterXValuesMeasureChip.attributeTypeMap = [
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
    return ScatterXValuesMeasureChip;
}());
exports.ScatterXValuesMeasureChip = ScatterXValuesMeasureChip;
