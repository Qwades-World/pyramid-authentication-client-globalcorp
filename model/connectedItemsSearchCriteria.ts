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
import { SearchCriteria } from './searchCriteria';

/**
* The search criteria for finding materialized data elements.
*/
export class ConnectedItemsSearchCriteria {
    /**
    * This is the container or \'parent\' system ID: If searching for databases, this is the data source server\'s ID. If searching for materialized models, its the data source database\'s ID
    */
    'dataContainerId': string;
    'searchCriteria': SearchCriteria;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dataContainerId",
            "baseName": "dataContainerId",
            "type": "string"
        },
        {
            "name": "searchCriteria",
            "baseName": "searchCriteria",
            "type": "SearchCriteria"
        }    ];

    static getAttributeTypeMap() {
        return ConnectedItemsSearchCriteria.attributeTypeMap;
    }
}
