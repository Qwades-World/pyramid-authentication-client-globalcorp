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
exports.TabularVisual = void 0;
/**
* Settings for the Tabular visual
*/
var TabularVisual = /** @class */ (function () {
    function TabularVisual() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'TabularVisual';
    }
    TabularVisual.getAttributeTypeMap = function () {
        return TabularVisual.attributeTypeMap;
    };
    TabularVisual.discriminator = undefined;
    TabularVisual.attributeTypeMap = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "TabularFilterDropZone"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "TabularColorDropZone"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "TabularSizeDropZone"
        },
        {
            "name": "tooltip",
            "baseName": "tooltip",
            "type": "TabularTooltipDropZone"
        },
        {
            "name": "cols",
            "baseName": "cols",
            "type": "TabularColsDropZone"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return TabularVisual;
}());
exports.TabularVisual = TabularVisual;
