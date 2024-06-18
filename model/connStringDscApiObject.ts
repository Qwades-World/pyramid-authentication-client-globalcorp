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
import { ConnectionStringProperties } from './connectionStringProperties';

/**
* The import content items result object from importing content into the system.
*/
export class ConnStringDscApiObject {
    'connectionStringProperties'?: ConnectionStringProperties;
    /**
    * A boolean to denote if the data source changer is required or not
    */
    'needsToPerformDsc'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "connectionStringProperties",
            "baseName": "connectionStringProperties",
            "type": "ConnectionStringProperties"
        },
        {
            "name": "needsToPerformDsc",
            "baseName": "needsToPerformDsc",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ConnStringDscApiObject.attributeTypeMap;
    }
}

