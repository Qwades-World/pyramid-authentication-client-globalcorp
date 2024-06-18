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
* Generic API response object with success or failure flag and related messages.
*/
export class SimpleModifierResult {
    /**
    * List of item ID\'s that have been affected by the function call. The type of ID depends on the function.
    */
    'modifiedList'?: Array<string>;
    /**
    * Boolean showing success or failure result.
    */
    'success'?: boolean;
    /**
    * Error message in case of failure
    */
    'errorMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modifiedList",
            "baseName": "modifiedList",
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
        return SimpleModifierResult.attributeTypeMap;
    }
}
