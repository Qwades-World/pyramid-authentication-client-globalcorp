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

import { RequestFile } from './models';
import { HideMemberType } from './hideMemberType';
import { ModelingColumnCategories } from './modelingColumnCategories';
import { ModelingProperty } from './modelingProperty';

/**
* Definition of a hierarchy level in the model definition, contains source column identifier.
*/
export class ModelingHierarchyLevel {
    'modelingColumnCategory'?: ModelingColumnCategories;
    /**
    * Unique identifier of this hierarchy level
    */
    'uniqueName'?: string;
    /**
    * Display name of this hierarchy level
    */
    'displayName'?: string;
    /**
    * System ID of this hierarchy level
    */
    'levelId'?: string;
    /**
    * Level number
    */
    'levelNumber'?: number;
    /**
    * Description of this hierarchy level
    */
    'description'?: string;
    /**
    * Is the default sorting descending
    */
    'isDefaultSortDescending'?: boolean;
    /**
    * Unique identifier of this level\'s source column
    */
    'sourceColumnUniqueName'?: string;
    /**
    * User-defined category of this hierarchy level
    */
    'customCategoryId'?: string;
    /**
    * column unique name to sort by
    */
    'sortByColumn'?: string;
    /**
    * Modeling properties of this hierarchy level
    */
    'properties'?: Array<ModelingProperty>;
    'hideMemberType'?: HideMemberType;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'ModelingHierarchyLevel';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modelingColumnCategory",
            "baseName": "modelingColumnCategory",
            "type": "ModelingColumnCategories"
        },
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "levelId",
            "baseName": "levelId",
            "type": "string"
        },
        {
            "name": "levelNumber",
            "baseName": "levelNumber",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isDefaultSortDescending",
            "baseName": "isDefaultSortDescending",
            "type": "boolean"
        },
        {
            "name": "sourceColumnUniqueName",
            "baseName": "sourceColumnUniqueName",
            "type": "string"
        },
        {
            "name": "customCategoryId",
            "baseName": "customCategoryId",
            "type": "string"
        },
        {
            "name": "sortByColumn",
            "baseName": "sortByColumn",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<ModelingProperty>"
        },
        {
            "name": "hideMemberType",
            "baseName": "hideMemberType",
            "type": "HideMemberType"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModelingHierarchyLevel.attributeTypeMap;
    }
}
