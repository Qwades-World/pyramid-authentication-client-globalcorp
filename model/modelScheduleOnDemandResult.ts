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
* A listing of on-demand schedules triggered by the change
*/
export class ModelScheduleOnDemandResult {
    /**
    * A list of the new execution IDs created by the affected on-demand schedules
    */
    'executionIDs': Array<string>;
    /**
    * Indicator showing the success or failure of the change
    */
    'success'?: boolean;
    /**
    * Error messages if there is an update or failure
    */
    'errorMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "executionIDs",
            "baseName": "executionIDs",
            "type": "Array<string>"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModelScheduleOnDemandResult.attributeTypeMap;
    }
}

