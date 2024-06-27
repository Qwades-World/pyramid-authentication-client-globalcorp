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
exports.CartesianTrellisVerticalChip = void 0;
/**
* Settings for the TrellisVertical drop zone chip for the Cartesian visual
*/
var CartesianTrellisVerticalChip = /** @class */ (function () {
    function CartesianTrellisVerticalChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'CartesianTrellisVerticalChip';
    }
    CartesianTrellisVerticalChip.getAttributeTypeMap = function () {
        return CartesianTrellisVerticalChip.attributeTypeMap;
    };
    CartesianTrellisVerticalChip.discriminator = undefined;
    CartesianTrellisVerticalChip.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "CartesianTrellisVerticalValuesChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "CartesianTrellisVerticalHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return CartesianTrellisVerticalChip;
}());
exports.CartesianTrellisVerticalChip = CartesianTrellisVerticalChip;