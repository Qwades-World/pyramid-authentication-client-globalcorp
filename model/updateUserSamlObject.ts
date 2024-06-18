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
import { AdminType } from './adminType';
import { ClientLicenseType } from './clientLicenseType';
import { LanguageType } from './languageType';
import { UserProfileType } from './userProfileType';
import { UserStatusID } from './userStatusID';

/**
* The object used to update a SAML user.
*/
export class UpdateUserSamlObject {
    /**
    * The user\'s last name
    */
    'lastName'?: string;
    'adminType'?: AdminType;
    /**
    * The user\'s proxy account needed for connecting to different data sources
    */
    'proxyAccount'?: string;
    'clientLicenseType'?: ClientLicenseType;
    'language'?: LanguageType;
    /**
    * The user\'s SAML identifier
    */
    'principalName'?: string;
    /**
    * The login username for the user
    */
    'userName'?: string;
    /**
    * The user\'s first name
    */
    'firstName'?: string;
    /**
    * User\'s password. relevant only for enterprise admin users
    */
    'password'?: string;
    /**
    * The user\'s list of roles
    */
    'roleIds'?: Set<string>;
    'statusID'?: UserStatusID;
    'profileType'?: UserProfileType;
    /**
    * The user\'s phone
    */
    'phone'?: string;
    /**
    * The profile ID to be applied for this user
    */
    'profileId'?: string;
    /**
    * The user\'s tenant ID
    */
    'tenantId'?: string;
    /**
    * The user\'s system ID.
    */
    'id': string;
    /**
    * The user\'s second proxy account needed for connecting to different data sources
    */
    'proxy2'?: string;
    /**
    * The user\'s email
    */
    'email'?: string;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'UpdateUserSamlObject';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "adminType",
            "baseName": "adminType",
            "type": "AdminType"
        },
        {
            "name": "proxyAccount",
            "baseName": "proxyAccount",
            "type": "string"
        },
        {
            "name": "clientLicenseType",
            "baseName": "clientLicenseType",
            "type": "ClientLicenseType"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "LanguageType"
        },
        {
            "name": "principalName",
            "baseName": "principalName",
            "type": "string"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "roleIds",
            "baseName": "roleIds",
            "type": "Set<string>"
        },
        {
            "name": "statusID",
            "baseName": "statusID",
            "type": "UserStatusID"
        },
        {
            "name": "profileType",
            "baseName": "profileType",
            "type": "UserProfileType"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "profileId",
            "baseName": "profileId",
            "type": "string"
        },
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "proxy2",
            "baseName": "proxy2",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateUserSamlObject.attributeTypeMap;
    }
}

