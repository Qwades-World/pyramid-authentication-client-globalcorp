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
import { DataCatalogHierarchyLevel } from './dataCatalogHierarchyLevel';
import { DataCatalogProperty } from './dataCatalogProperty';
import { ModelingColumnCategories } from './modelingColumnCategories';

/**
* Describes a Hierarchy/Column in Dimension/Table
*/
export class DataCatalogHierarchy {
    /**
    * The unique name of the Hierarchy/Column, as used in Formulate
    */
    'uniqueName'?: string;
    /**
    * The name of the Hierarchy/Column
    */
    'hierarchyName'?: string;
    /**
    * The description of the hierarchy
    */
    'description'?: string;
    'type'?: ModelingColumnCategories;
    /**
    * The levels of the Hierarchy
    */
    'levels'?: Array<DataCatalogHierarchyLevel>;
    /**
    * Properties of the Hierarchy/Column
    */
    'properties'?: Array<DataCatalogProperty>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return DataCatalogHierarchy.attributeTypeMap;
    }
}
