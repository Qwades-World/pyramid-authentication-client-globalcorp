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
exports.TabularColsHierarchyChip = void 0;
/**
* Settings for the Cols hierarchy drop zone chip for the Tabular visual
*/
var TabularColsHierarchyChip = /** @class */ (function () {
    function TabularColsHierarchyChip() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'TabularColsHierarchyChip';
    }
    TabularColsHierarchyChip.getAttributeTypeMap = function () {
        return TabularColsHierarchyChip.attributeTypeMap;
    };
    TabularColsHierarchyChip.discriminator = undefined;
    TabularColsHierarchyChip.attributeTypeMap = [
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
    return TabularColsHierarchyChip;
}());
exports.TabularColsHierarchyChip = TabularColsHierarchyChip;
