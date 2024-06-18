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
* An object for settings the execution parameters of a schedule.
*/
export class ExecuteScheduleApiData {
    /**
    * Boolean to include a schedule\'s trigger logic for execution. Set to false to ignore triggers
    */
    'checkTriggers'?: boolean;
    /**
    * The schedule\'s system ID
    */
    'scheduleId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkTriggers",
            "baseName": "checkTriggers",
            "type": "boolean"
        },
        {
            "name": "scheduleId",
            "baseName": "scheduleId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExecuteScheduleApiData.attributeTypeMap;
    }
}
