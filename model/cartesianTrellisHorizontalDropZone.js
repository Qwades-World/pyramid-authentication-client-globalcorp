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
exports.CartesianTrellisHorizontalDropZone = void 0;
/**
* Settings for the TrellisHorizontal drop zone for the Cartesian visual
*/
var CartesianTrellisHorizontalDropZone = /** @class */ (function () {
    function CartesianTrellisHorizontalDropZone() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'CartesianTrellisHorizontalDropZone';
    }
    CartesianTrellisHorizontalDropZone.getAttributeTypeMap = function () {
        return CartesianTrellisHorizontalDropZone.attributeTypeMap;
    };
    CartesianTrellisHorizontalDropZone.discriminator = undefined;
    CartesianTrellisHorizontalDropZone.attributeTypeMap = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<CartesianTrellisHorizontalChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return CartesianTrellisHorizontalDropZone;
}());
exports.CartesianTrellisHorizontalDropZone = CartesianTrellisHorizontalDropZone;