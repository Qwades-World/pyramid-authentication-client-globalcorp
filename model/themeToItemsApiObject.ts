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
* An object containing theme id and the item ids that should contain this theme.
*/
export class ThemeToItemsApiObject {
    /**
    * Theme Id
    */
    'themeId': string;
    /**
    * List of Item Ids
    */
    'itemIdsList': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "themeId",
            "baseName": "themeId",
            "type": "string"
        },
        {
            "name": "itemIdsList",
            "baseName": "itemIdsList",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ThemeToItemsApiObject.attributeTypeMap;
    }
}

