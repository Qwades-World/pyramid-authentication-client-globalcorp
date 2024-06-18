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
import { CsvDelimiter } from './csvDelimiter';

/**
* The query export options object used to set optional switches.
*/
export class ExportOptions {
    /**
    * Boolean to add the column caption as the first row after the unique names
    */
    'columnHeaderAsCaption'?: boolean;
    /**
    * Boolean to remove numeric filters
    */
    'removeValueBasedFilters'?: boolean;
    /**
    * Boolean to show or hide unique names in the exported results
    */
    'showUniqueName'?: boolean;
    'csvDelimiter'?: CsvDelimiter;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "columnHeaderAsCaption",
            "baseName": "columnHeaderAsCaption",
            "type": "boolean"
        },
        {
            "name": "removeValueBasedFilters",
            "baseName": "removeValueBasedFilters",
            "type": "boolean"
        },
        {
            "name": "showUniqueName",
            "baseName": "showUniqueName",
            "type": "boolean"
        },
        {
            "name": "csvDelimiter",
            "baseName": "csvDelimiter",
            "type": "CsvDelimiter"
        }    ];

    static getAttributeTypeMap() {
        return ExportOptions.attributeTypeMap;
    }
}

