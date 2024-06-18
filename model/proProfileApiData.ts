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
import { ProPermissions } from './proPermissions';

/**
* An object that contains the profile definition for pro users.
*/
export class ProProfileApiData {
    /**
    * The system ID of the profile. When adding a profile, the provided GUID will be used if supplied. Otherwise, the function will auto-create it.
    */
    'profileId'?: string;
    'permissions': ProPermissions;
    /**
    * Profile\'s name or caption
    */
    'name': string;
    /**
    * The profile\'s tenant (ID)
    */
    'tenantId': string;
    /**
    * Profile\'s description
    */
    'description': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profileId",
            "baseName": "profileId",
            "type": "string"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "ProPermissions"
        },
        {
            "name": "name",
            "baseName": "name",
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
        }    ];

    static getAttributeTypeMap() {
        return ProProfileApiData.attributeTypeMap;
    }
}

