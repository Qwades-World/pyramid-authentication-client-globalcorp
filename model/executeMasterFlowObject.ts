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
import { EtlSyncModelColumnsType } from './etlSyncModelColumnsType';

/**
* Input parameters needed to execute a Master Flow
*/
export class ExecuteMasterFlowObject {
    /**
    * The ID depends on the source: For Model files it is the item\'s system ID. For materialized/deployed models it is its materialized model ID.
    */
    'itemId': string;
    'syncModelColumnsType'?: EtlSyncModelColumnsType;
    /**
    * In the case of adding or removing columns in the database, the model columns can be synchronized according to this property.
    */
    'shouldOverrideSecurity'?: boolean = true;
    /**
    * If this option is enabled, only the models will be processed.
    */
    'processModelsOnly'?: boolean;
    /**
    * A title to describe the execution of the job.
    */
    'executionTitle'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "syncModelColumnsType",
            "baseName": "syncModelColumnsType",
            "type": "EtlSyncModelColumnsType"
        },
        {
            "name": "shouldOverrideSecurity",
            "baseName": "shouldOverrideSecurity",
            "type": "boolean"
        },
        {
            "name": "processModelsOnly",
            "baseName": "processModelsOnly",
            "type": "boolean"
        },
        {
            "name": "executionTitle",
            "baseName": "executionTitle",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExecuteMasterFlowObject.attributeTypeMap;
    }
}

