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
exports.GridRowsDropZone = void 0;
/**
* Settings for the Rows drop zone for the Grid visual
*/
var GridRowsDropZone = /** @class */ (function () {
    function GridRowsDropZone() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'GridRowsDropZone';
    }
    GridRowsDropZone.getAttributeTypeMap = function () {
        return GridRowsDropZone.attributeTypeMap;
    };
    GridRowsDropZone.discriminator = undefined;
    GridRowsDropZone.attributeTypeMap = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<GridRowsChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return GridRowsDropZone;
}());
exports.GridRowsDropZone = GridRowsDropZone;