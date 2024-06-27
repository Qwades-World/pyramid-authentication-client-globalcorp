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
exports.UserTokenCredentials = void 0;
/**
* The user credentials for authentication by token.
*/
var UserTokenCredentials = /** @class */ (function () {
    function UserTokenCredentials() {
    }
    UserTokenCredentials.getAttributeTypeMap = function () {
        return UserTokenCredentials.attributeTypeMap;
    };
    UserTokenCredentials.discriminator = undefined;
    UserTokenCredentials.attributeTypeMap = [
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
        }
    ];
    return UserTokenCredentials;
}());
exports.UserTokenCredentials = UserTokenCredentials;
