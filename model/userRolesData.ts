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
* The user-role object contains a list of all roles to add or remove for the specified user.
*/
export class UserRolesData {
    /**
    * The a list of role ID\'s to REMOVE from the user
    */
    'rolesToRemove'?: Array<string>;
    /**
    * The a list of role ID\'s to ADD to the user
    */
    'rolesToAdd'?: Array<string>;
    /**
    * The system ID of the user
    */
    'userId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rolesToRemove",
            "baseName": "rolesToRemove",
            "type": "Array<string>"
        },
        {
            "name": "rolesToAdd",
            "baseName": "rolesToAdd",
            "type": "Array<string>"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserRolesData.attributeTypeMap;
    }
}

