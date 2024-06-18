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

export class EtlValidationMessage {
    'errorKey'?: string;
    'params'?: Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorKey",
            "baseName": "errorKey",
            "type": "string"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return EtlValidationMessage.attributeTypeMap;
    }
}
