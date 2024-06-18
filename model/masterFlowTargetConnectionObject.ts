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

/**
* Use this object to modify the data target server and/or the database in a data flow.
*/
export class MasterFlowTargetConnectionObject {
    /**
    * The item\'s system ID.
    */
    'itemId': string;
    /**
    * The new database name. The original database name will be used if this is left empty.
    */
    'databaseName'?: string;
    /**
    * The data flow node ID.
    */
    'dataFlowNodeId': string;
    /**
    * Flag to use the existing database or not
    */
    'useExistingDatabase'?: boolean;
    /**
    * The new server ID. The original server ID will be used if this is left empty.
    */
    'serverId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "databaseName",
            "baseName": "databaseName",
            "type": "string"
        },
        {
            "name": "dataFlowNodeId",
            "baseName": "dataFlowNodeId",
            "type": "string"
        },
        {
            "name": "useExistingDatabase",
            "baseName": "useExistingDatabase",
            "type": "boolean"
        },
        {
            "name": "serverId",
            "baseName": "serverId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MasterFlowTargetConnectionObject.attributeTypeMap;
    }
}

