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
* Model configuration for a specific language.
*/
export class ModelingConfigTranslation {
    /**
    * \'All\' Level Name
    */
    'allLevelName'?: string;
    /**
    * Parent Child Hierarchy Level Template
    */
    'pchLevelTemplate'?: string;
    /**
    * Default date format
    */
    'defaultDateFormat'?: string;
    /**
    * The model display name
    */
    'displayName'?: string;
    /**
    * \'All\' Member Name
    */
    'allMemberName'?: string;
    /**
    * The model description
    */
    'description'?: string;
    /**
    * The language name
    */
    'language'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allLevelName",
            "baseName": "allLevelName",
            "type": "string"
        },
        {
            "name": "pchLevelTemplate",
            "baseName": "pchLevelTemplate",
            "type": "string"
        },
        {
            "name": "defaultDateFormat",
            "baseName": "defaultDateFormat",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "allMemberName",
            "baseName": "allMemberName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModelingConfigTranslation.attributeTypeMap;
    }
}
