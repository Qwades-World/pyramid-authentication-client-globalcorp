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
* The role object contains meta-data for the role.
*/
export class RoleData {
    /**
    * The role\'s system ID
    */
    'roleId'?: string;
    /**
    * The role\'s name
    */
    'roleName': string;
    /**
    * The roles\'s tenant (ID)
    */
    'tenantId': string;
    /**
    * The Role description
    */
    'description'?: string;
    /**
    * Flag to indicate if the role is hidden
    */
    'isHidden'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string"
        },
        {
            "name": "roleName",
            "baseName": "roleName",
            "type": "string"
        },
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isHidden",
            "baseName": "isHidden",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return RoleData.attributeTypeMap;
    }
}

