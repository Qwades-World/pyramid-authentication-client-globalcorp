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
exports.CartesianTooltipChip = void 0;
/**
* Settings for the Tooltip drop zone chip for the Cartesian visual
*/
var CartesianTooltipChip = /** @class */ (function () {
    function CartesianTooltipChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'CartesianTooltipChip';
    }
    CartesianTooltipChip.getAttributeTypeMap = function () {
        return CartesianTooltipChip.attributeTypeMap;
    };
    CartesianTooltipChip.discriminator = undefined;
    CartesianTooltipChip.attributeTypeMap = [
        {
            "name": "measure",
            "baseName": "measure",
            "type": "CartesianTooltipMeasureChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "CartesianTooltipHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return CartesianTooltipChip;
}());
exports.CartesianTooltipChip = CartesianTooltipChip;