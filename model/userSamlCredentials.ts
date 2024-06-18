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
* The user credentials for authentication by SAML token.
*/
export class UserSamlCredentials {
    /**
    * The URL web domain - needed only for embedded authentication.
    */
    'domain'?: string;
    /**
    * Custom data input for usage within the product.
    */
    'customData'?: string;
    /**
    * The SAML auth token.
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
            "name": "token",
            "baseName": "token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserSamlCredentials.attributeTypeMap;
    }
}
