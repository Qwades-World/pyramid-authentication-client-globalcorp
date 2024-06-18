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
* The user credentials for authentication by token.
*/
export class UserTokenCredentials {
    /**
    * The URL web domain - needed only for embedded authentication.
    */
    'domain'?: string;
    /**
    * Custom data input for usage within the product.
    */
    'customData'?: string;
    /**
    * The user\'s login identity.  The format depends on the authentication provider: Its \'username\' for internal database authentication. For AD, its either UPN or \'domain\\\\username\'. For SAML its UPN.
    */
    'userIdentity': string;
    /**
    * The administrative authority token - generated by by an administrator using normal authentication methods first.
    */
    'token': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "customData",
            "baseName": "customData",
            "type": "string"
        },
        {
            "name": "userIdentity",
            "baseName": "userIdentity",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserTokenCredentials.attributeTypeMap;
    }
}

