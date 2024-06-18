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
import { LdapGroupIdentifier } from './ldapGroupIdentifier';

/**
* The user object contains all relevant meta-data for the user.
*/
export class RoleAdGroupsModifyObject {
    /**
    * List of groups to remove from the role
    */
    'groupsToRemove'?: Array<LdapGroupIdentifier>;
    /**
    * The role\'s ID
    */
    'roleId': string;
    /**
    * List of groups to add to the role
    */
    'groupsToAdd'?: Array<LdapGroupIdentifier>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "groupsToRemove",
            "baseName": "groupsToRemove",
            "type": "Array<LdapGroupIdentifier>"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string"
        },
        {
            "name": "groupsToAdd",
            "baseName": "groupsToAdd",
            "type": "Array<LdapGroupIdentifier>"
        }    ];

    static getAttributeTypeMap() {
        return RoleAdGroupsModifyObject.attributeTypeMap;
    }
}

