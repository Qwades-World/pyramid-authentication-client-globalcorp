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
exports.ModelingHierarchy = void 0;
/**
* Hierarchy definition in the model. A hierarchy is defined by a list of levels, each defined by a column
*/
var ModelingHierarchy = /** @class */ (function () {
    function ModelingHierarchy() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'ModelingHierarchy';
    }
    ModelingHierarchy.getAttributeTypeMap = function () {
        return ModelingHierarchy.attributeTypeMap;
    };
    ModelingHierarchy.discriminator = undefined;
    ModelingHierarchy.attributeTypeMap = [
        {
            "name": "hierarchyType",
            "baseName": "hierarchyType",
            "type": "HierarchyType"
        },
        {
            "name": "unaryOperatorSourceColumnUniqueName",
            "baseName": "unaryOperatorSourceColumnUniqueName",
            "type": "string"
        },
        {
            "name": "orderSourceColumnUniqueName",
            "baseName": "orderSourceColumnUniqueName",
            "type": "string"
        },
        {
            "name": "captionSourceColumnUniqueName",
            "baseName": "captionSourceColumnUniqueName",
            "type": "string"
        },
        {
            "name": "hierarchyId",
            "baseName": "hierarchyId",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isAggregatable",
            "baseName": "isAggregatable",
            "type": "boolean"
        },
        {
            "name": "keySourceColumnUniqueName",
            "baseName": "keySourceColumnUniqueName",
            "type": "string"
        },
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "parentKeySourceColumnUniqueName",
            "baseName": "parentKeySourceColumnUniqueName",
            "type": "string"
        },
        {
            "name": "hierarchyCategory",
            "baseName": "hierarchyCategory",
            "type": "HierarchyCategory"
        },
        {
            "name": "hasDefaultMember",
            "baseName": "hasDefaultMember",
            "type": "boolean"
        },
        {
            "name": "parentChildRollupType",
            "baseName": "parentChildRollupType",
            "type": "ParentChildRollupType"
        },
        {
            "name": "levels",
            "baseName": "levels",
            "type": "Array<ModelingHierarchyLevel>"
        },
        {
            "name": "displayFolder",
            "baseName": "displayFolder",
            "type": "string"
        },
        {
            "name": "parentChildOrphanHandlingType",
            "baseName": "parentChildOrphanHandlingType",
            "type": "ParentChildOrphanHandlingType"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }
    ];
    return ModelingHierarchy;
}());
exports.ModelingHierarchy = ModelingHierarchy;