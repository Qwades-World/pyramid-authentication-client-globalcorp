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
import { ErrorMessage } from './errorMessage';

/**
* The task Log message
*/
export class TaskSummary {
    /**
    * The task output message 
    */
    'message'?: string;
    /**
    * The params related to the task message
    */
    'params'?: Array<string>;
    'error'?: ErrorMessage;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'TaskSummary';

    static discriminator: string | undefined = "inheritanceType";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "Array<string>"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "ErrorMessage"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TaskSummary.attributeTypeMap;
    }
}
