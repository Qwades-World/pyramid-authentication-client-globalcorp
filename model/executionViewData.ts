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
import { PrintingOutputType } from './printingOutputType';
import { TaskViewData } from './taskViewData';

/**
* The execution object contains all the details of scheduled execution instance.
*/
export class ExecutionViewData {
    /**
    * The execution\'s end date
    */
    'endDate'?: Date;
    'outputType'?: PrintingOutputType;
    /**
    * Percentage of the execution\'s tasks that failed
    */
    'failedPct'?: number;
    /**
    * The execution\'s error if exists
    */
    'error'?: string;
    /**
    * The execution\'s tasks count that partially succeeded
    */
    'partialSuccessCount'?: number;
    /**
    * The execution\'s tasks count that failed
    */
    'failedCount'?: number;
    /**
    * Percentage of the execution\'s tasks that stopped after trigger evaluation
    */
    'triggerStoppedPct'?: number;
    /**
    * Percentage of the execution\'s tasks that partially succeeded
    */
    'partialSuccessPct'?: number;
    /**
    * The execution\'s tasks count that were canceled
    */
    'canceledCount'?: number;
    /**
    * The execution\'s tasks count that are pending
    */
    'pendingCount'?: number;
    /**
    * Percentage of the execution\'s tasks that are running
    */
    'runningPct'?: number;
    /**
    * Percentage of the execution\'s tasks that are pending
    */
    'pendingPct'?: number;
    /**
    * The execution\'s tasks count that stopped after trigger evaluation
    */
    'triggerStoppedCount'?: number;
    /**
    * Percentage of the execution\'s tasks that were canceled
    */
    'canceledPct'?: number;
    /**
    * The execution\'s tasks count that are running
    */
    'runningCount'?: number;
    /**
    * The execution\'s tasks count that succeeded
    */
    'successCount'?: number;
    /**
    * The execution\'s system ID
    */
    'id'?: string;
    /**
    * Percentage of the execution\'s tasks that succeeded
    */
    'successPct'?: number;
    /**
    * The a list of tasks in the execution
    */
    'items'?: Array<TaskViewData>;
    /**
    * The execution\'s start date
    */
    'startDate'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date"
        },
        {
            "name": "outputType",
            "baseName": "outputType",
            "type": "PrintingOutputType"
        },
        {
            "name": "failedPct",
            "baseName": "failedPct",
            "type": "number"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "partialSuccessCount",
            "baseName": "partialSuccessCount",
            "type": "number"
        },
        {
            "name": "failedCount",
            "baseName": "failedCount",
            "type": "number"
        },
        {
            "name": "triggerStoppedPct",
            "baseName": "triggerStoppedPct",
            "type": "number"
        },
        {
            "name": "partialSuccessPct",
            "baseName": "partialSuccessPct",
            "type": "number"
        },
        {
            "name": "canceledCount",
            "baseName": "canceledCount",
            "type": "number"
        },
        {
            "name": "pendingCount",
            "baseName": "pendingCount",
            "type": "number"
        },
        {
            "name": "runningPct",
            "baseName": "runningPct",
            "type": "number"
        },
        {
            "name": "pendingPct",
            "baseName": "pendingPct",
            "type": "number"
        },
        {
            "name": "triggerStoppedCount",
            "baseName": "triggerStoppedCount",
            "type": "number"
        },
        {
            "name": "canceledPct",
            "baseName": "canceledPct",
            "type": "number"
        },
        {
            "name": "runningCount",
            "baseName": "runningCount",
            "type": "number"
        },
        {
            "name": "successCount",
            "baseName": "successCount",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "successPct",
            "baseName": "successPct",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<TaskViewData>"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ExecutionViewData.attributeTypeMap;
    }
}

