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
exports.GridTooltipDropZone = void 0;
/**
* Settings for the Tooltip drop zone for the Grid visual
*/
var GridTooltipDropZone = /** @class */ (function () {
    function GridTooltipDropZone() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'GridTooltipDropZone';
    }
    GridTooltipDropZone.getAttributeTypeMap = function () {
        return GridTooltipDropZone.attributeTypeMap;
    };
    GridTooltipDropZone.discriminator = undefined;
    GridTooltipDropZone.attributeTypeMap = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<GridTooltipChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return GridTooltipDropZone;
}());
exports.GridTooltipDropZone = GridTooltipDropZone;