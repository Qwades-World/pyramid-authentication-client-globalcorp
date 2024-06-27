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
exports.TenantObject = void 0;
/**
* The tenant object.
*/
var TenantObject = /** @class */ (function () {
    function TenantObject() {
    }
    TenantObject.getAttributeTypeMap = function () {
        return TenantObject.attributeTypeMap;
    };
    TenantObject.discriminator = undefined;
    TenantObject.attributeTypeMap = [
        {
            "name": "defaultThemeId",
            "baseName": "defaultThemeId",
            "type": "string"
        },
        {
            "name": "defaultHubTemplateId",
            "baseName": "defaultHubTemplateId",
            "type": "string"
        },
        {
            "name": "organizationalUnitText",
            "baseName": "organizationalUnitText",
            "type": "string"
        },
        {
            "name": "scientistSeats",
            "baseName": "scientistSeats",
            "type": "number"
        },
        {
            "name": "viewerSeats",
            "baseName": "viewerSeats",
            "type": "number"
        },
        {
            "name": "allowWebhookChannels",
            "baseName": "allowWebhookChannels",
            "type": "boolean"
        },
        {
            "name": "firstWorkday",
            "baseName": "firstWorkday",
            "type": "FirstWorkday"
        },
        {
            "name": "selectedUserDefaultsId",
            "baseName": "selectedUserDefaultsId",
            "type": "string"
        },
        {
            "name": "basicSeats",
            "baseName": "basicSeats",
            "type": "number"
        },
        {
            "name": "showGroupFolder",
            "baseName": "showGroupFolder",
            "type": "boolean"
        },
        {
            "name": "defaultAiServer",
            "baseName": "defaultAiServer",
            "type": "string"
        },
        {
            "name": "proSeats",
            "baseName": "proSeats",
            "type": "number"
        },
        {
            "name": "isOrganizationalUnitOn",
            "baseName": "isOrganizationalUnitOn",
            "type": "boolean"
        },
        {
            "name": "domainName",
            "baseName": "domainName",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "analystSeats",
            "baseName": "analystSeats",
            "type": "number"
        },
        {
            "name": "isUserDefaultsOverridable",
            "baseName": "isUserDefaultsOverridable",
            "type": "boolean"
        },
        {
            "name": "defaultEmailTemplateId",
            "baseName": "defaultEmailTemplateId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "defaultPaperType",
            "baseName": "defaultPaperType",
            "type": "PaperType"
        }
    ];
    return TenantObject;
}());
exports.TenantObject = TenantObject;