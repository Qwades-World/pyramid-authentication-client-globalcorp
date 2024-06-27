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
exports.HierarchyElementSelection = void 0;
/**
* Describes the element selection for a given hierarchy
*/
var HierarchyElementSelection = /** @class */ (function () {
    function HierarchyElementSelection() {
    }
    HierarchyElementSelection.getAttributeTypeMap = function () {
        return HierarchyElementSelection.attributeTypeMap;
    };
    HierarchyElementSelection.discriminator = undefined;
    HierarchyElementSelection.attributeTypeMap = [
        {
            "name": "all",
            "baseName": "all",
            "type": "boolean"
        },
        {
            "name": "selectionsList",
            "baseName": "selectionsList",
            "type": "Array<ElementSelectionData>"
        },
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        }
    ];
    return HierarchyElementSelection;
}());
exports.HierarchyElementSelection = HierarchyElementSelection;