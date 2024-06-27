"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LdapSearchObject = void 0;
/**
* The LDAP search object that contains the parameters to be used in Active Directory searches.
*/
var LdapSearchObject = /** @class */ (function () {
    function LdapSearchObject() {
    }
    LdapSearchObject.getAttributeTypeMap = function () {
        return LdapSearchObject.attributeTypeMap;
    };
    LdapSearchObject.discriminator = undefined;
    LdapSearchObject.attributeTypeMap = [
        {
            "name": "searchType",
            "baseName": "searchType",
            "type": "LdapSearchType"
        },
        {
            "name": "domainNetBios",
            "baseName": "domainNetBios",
            "type": "string"
        },
        {
            "name": "searchValue",
            "baseName": "searchValue",
            "type": "string"
        }
    ];
    return LdapSearchObject;
}());
exports.LdapSearchObject = LdapSearchObject;
