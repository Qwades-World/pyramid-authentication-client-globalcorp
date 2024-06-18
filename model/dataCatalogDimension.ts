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
import { DataCatalogHierarchy } from './dataCatalogHierarchy';

/**
* Describes a Dimension/Table in the model
*/
export class DataCatalogDimension {
    /**
    * List of Hierarchies/Columns in the Dimension/Table
    */
    'hierarchies'?: Array<DataCatalogHierarchy>;
    /**
    * The description of the dimension
    */
    'description'?: string;
    /**
    * The name of the Dimension/Table
    */
    'dimensionName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hierarchies",
            "baseName": "hierarchies",
            "type": "Array<DataCatalogHierarchy>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "dimensionName",
            "baseName": "dimensionName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DataCatalogDimension.attributeTypeMap;
    }
}

