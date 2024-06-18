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
* Details of the model that will be the target of the on-demand execution.
*/
export class ModelScheduleOnDemandObject {
    /**
    * The connection string ID of the relevant model. Use \'searchConnectionString\' method to find the appropriate ID.
    */
    'connectionStringId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "connectionStringId",
            "baseName": "connectionStringId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModelScheduleOnDemandObject.attributeTypeMap;
    }
}

