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
import { ModelScheduleOnDemandResult } from './modelScheduleOnDemandResult';

/**
* The result from updating a model\'s process date
*/
export class ModelProcessDateResult {
    /**
    * Indicator showing the success or failure of the change
    */
    'success'?: boolean;
    'scheduleOnDemandResult'?: ModelScheduleOnDemandResult;
    /**
    * Error messages if there is an update or failure
    */
    'errorMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "scheduleOnDemandResult",
            "baseName": "scheduleOnDemandResult",
            "type": "ModelScheduleOnDemandResult"
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModelProcessDateResult.attributeTypeMap;
    }
}

