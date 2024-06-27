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
exports.ItemsToMove = void 0;
/**
* The move items object with details of the selected content items and the destination folder.
*/
var ItemsToMove = /** @class */ (function () {
    function ItemsToMove() {
    }
    ItemsToMove.getAttributeTypeMap = function () {
        return ItemsToMove.attributeTypeMap;
    };
    ItemsToMove.discriminator = undefined;
    ItemsToMove.attributeTypeMap = [
        {
            "name": "destinationFolder",
            "baseName": "destinationFolder",
            "type": "string"
        },
        {
            "name": "itemsForMove",
            "baseName": "itemsForMove",
            "type": "Array<string>"
        }
    ];
    return ItemsToMove;
}());
exports.ItemsToMove = ItemsToMove;
