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
* The details of the security settings for the hierarchy\'s member elements.
*/
export class MembersSecurity {
    /**
    * The model\'s ID
    */
    'modelId': string;
    /**
    * The role id that the settings apply to
    */
    'roleId': string;
    /**
    * The unique name of the hierarchy that contain the members
    */
    'hierarchyUniqueName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modelId",
            "baseName": "modelId",
            "type": "string"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string"
        },
        {
            "name": "hierarchyUniqueName",
            "baseName": "hierarchyUniqueName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MembersSecurity.attributeTypeMap;
    }
}

