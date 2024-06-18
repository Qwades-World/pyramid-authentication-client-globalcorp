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
import { TenantSettings } from './tenantSettings';

/**
* The tenant object contains all relevant meta-data for the tenant.
*/
export class AdminMultiTenantData {
    /**
    * The total number of USED Viewer seats for the tenant
    */
    'usedViewerSeats'?: number;
    /**
    * The default theme that should be applied to all content in the tenant - using the theme ID
    */
    'defaultThemeId'?: string;
    /**
    * The total number of USED Analyst seats for the tenant
    */
    'usedAnalystSeats'?: number;
    /**
    * The default Hub template that should be used for the tenant\'s hubs - using the Hub template ID
    */
    'defaultHubTemplateId'?: string;
    /**
    * The total number of Scientist seats for the tenant
    */
    'scientistSeats'?: number;
    /**
    * The total number of USED Scientist seats for the tenant
    */
    'usedScientistSeats'?: number;
    /**
    * The total number of Viewer seats for the tenant
    */
    'viewerSeats'?: number;
    'miscSettings'?: TenantSettings;
    /**
    * The PULSE security key for the tenant
    */
    'pulseKey'?: string;
    /**
    * The total number of USED Professional seats for the tenant
    */
    'usedProSeats'?: number;
    /**
    * Sets a specific \'User Default\' template for the tenant - using the User Default ID
    */
    'selectedUserDefaultsId'?: string;
    /**
    * The total number of Basic seats for the tenant
    */
    'basicSeats'?: number;
    /**
    * The id of the default ai server of the tenant
    */
    'defaultAiServer'?: string;
    /**
    * The total number of Professional seats for the tenant
    */
    'proSeats'?: number;
    /**
    * The total number of USED Basic seats for the tenant
    */
    'usedBasicSeats'?: number;
    /**
    * The tenant\'s name
    */
    'name'?: string;
    /**
    * The total number of Analyst seats for the tenant
    */
    'analystSeats'?: number;
    /**
    * Set whether users can override the tenant\'s main User Defaults template
    */
    'isUserDefaultsOverridable'?: boolean;
    /**
    * The default email template that should be used for the tenant\'s emails - using the Email template ID
    */
    'defaultEmailTemplateId'?: string;
    /**
    * The tenant\'s system ID
    */
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "usedViewerSeats",
            "baseName": "usedViewerSeats",
            "type": "number"
        },
        {
            "name": "defaultThemeId",
            "baseName": "defaultThemeId",
            "type": "string"
        },
        {
            "name": "usedAnalystSeats",
            "baseName": "usedAnalystSeats",
            "type": "number"
        },
        {
            "name": "defaultHubTemplateId",
            "baseName": "defaultHubTemplateId",
            "type": "string"
        },
        {
            "name": "scientistSeats",
            "baseName": "scientistSeats",
            "type": "number"
        },
        {
            "name": "usedScientistSeats",
            "baseName": "usedScientistSeats",
            "type": "number"
        },
        {
            "name": "viewerSeats",
            "baseName": "viewerSeats",
            "type": "number"
        },
        {
            "name": "miscSettings",
            "baseName": "miscSettings",
            "type": "TenantSettings"
        },
        {
            "name": "pulseKey",
            "baseName": "pulseKey",
            "type": "string"
        },
        {
            "name": "usedProSeats",
            "baseName": "usedProSeats",
            "type": "number"
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
            "name": "usedBasicSeats",
            "baseName": "usedBasicSeats",
            "type": "number"
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
        }    ];

    static getAttributeTypeMap() {
        return AdminMultiTenantData.attributeTypeMap;
    }
}
