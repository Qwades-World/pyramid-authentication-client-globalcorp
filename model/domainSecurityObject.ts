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
import { SecurityType } from './securityType';

/**
* The security settings object.
*/
export class DomainSecurityObject {
    /**
    * LDAP address
    */
    'ldapAddress': string;
    /**
    * Domain user account
    */
    'domainUserName': string;
    /**
    * Default:FALSE
    */
    'securedModelEnabled'?: boolean;
    /**
    * Default LDAP:389, LDAPS:636
    */
    'port'?: number;
    'securityType': SecurityType;
    /**
    * Domain name
    */
    'domainName': string;
    /**
    * Default:domainName
    */
    'domainUserDomainName'?: string;
    /**
    * Default:TRUE
    */
    'secureSocketsLayerEnabled'?: boolean;
    /**
    * Default:FALSE
    */
    'defaultDomain'?: boolean;
    /**
    * Domain user account password
    */
    'domainUserPassword': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ldapAddress",
            "baseName": "ldapAddress",
            "type": "string"
        },
        {
            "name": "domainUserName",
            "baseName": "domainUserName",
            "type": "string"
        },
        {
            "name": "securedModelEnabled",
            "baseName": "securedModelEnabled",
            "type": "boolean"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "securityType",
            "baseName": "securityType",
            "type": "SecurityType"
        },
        {
            "name": "domainName",
            "baseName": "domainName",
            "type": "string"
        },
        {
            "name": "domainUserDomainName",
            "baseName": "domainUserDomainName",
            "type": "string"
        },
        {
            "name": "secureSocketsLayerEnabled",
            "baseName": "secureSocketsLayerEnabled",
            "type": "boolean"
        },
        {
            "name": "defaultDomain",
            "baseName": "defaultDomain",
            "type": "boolean"
        },
        {
            "name": "domainUserPassword",
            "baseName": "domainUserPassword",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DomainSecurityObject.attributeTypeMap;
    }
}
