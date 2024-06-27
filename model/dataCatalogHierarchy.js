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
exports.DataCatalogHierarchy = void 0;
/**
* Describes a Hierarchy/Column in Dimension/Table
*/
var DataCatalogHierarchy = /** @class */ (function () {
    function DataCatalogHierarchy() {
    }
    DataCatalogHierarchy.getAttributeTypeMap = function () {
        return DataCatalogHierarchy.attributeTypeMap;
    };
    DataCatalogHierarchy.discriminator = undefined;
    DataCatalogHierarchy.attributeTypeMap = [
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "hierarchyName",
            "baseName": "hierarchyName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ModelingColumnCategories"
        },
        {
            "name": "levels",
            "baseName": "levels",
            "type": "Array<DataCatalogHierarchyLevel>"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<DataCatalogProperty>"
        }
    ];
    return DataCatalogHierarchy;
}());
exports.DataCatalogHierarchy = DataCatalogHierarchy;