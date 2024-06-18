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
import { AggregationType } from './aggregationType';
import { DataType } from './dataType';

/**
* The default setting for every new column that will be added as a part of the automatic synchronization of the model during the scheduling process.
*/
export class ModelSyncColumnsSettings {
    /**
    * The selected data types that will be affected by this model sync setting
    */
    'dataTypes'?: Array<DataType>;
    'aggregationType'?: AggregationType;
    /**
    * In case a new column has been added to the model, this setting will determine if it will be visible or not
    */
    'isVisible'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dataTypes",
            "baseName": "dataTypes",
            "type": "Array<DataType>"
        },
        {
            "name": "aggregationType",
            "baseName": "aggregationType",
            "type": "AggregationType"
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ModelSyncColumnsSettings.attributeTypeMap;
    }
}

