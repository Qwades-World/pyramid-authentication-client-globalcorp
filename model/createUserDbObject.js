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
exports.CreateUserDbObject = void 0;
/**
* The object used to create a new user when DB authentication is used.
*/
var CreateUserDbObject = /** @class */ (function () {
    function CreateUserDbObject() {
        /**
        * Value used to determine the type of the item receiving, use the class name
        */
        this['inheritanceType'] = 'CreateUserDbObject';
    }
    CreateUserDbObject.getAttributeTypeMap = function () {
        return CreateUserDbObject.attributeTypeMap;
    };
    CreateUserDbObject.discriminator = undefined;
    CreateUserDbObject.attributeTypeMap = [
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
            "name": "privateProfileId",
            "baseName": "privateProfileId",
            "type": "string"
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
        }
    ];
    return CreateUserDbObject;
}());
exports.CreateUserDbObject = CreateUserDbObject;
