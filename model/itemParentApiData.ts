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
* The item-parent object used to set the content item\'s parent item ID.
*/
export class ItemParentApiData {
    /**
    * The content item\'s system ID
    */
    'itemId': string;
    /**
    * The content item’s parent folder ID
    */
    'parentId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ItemParentApiData.attributeTypeMap;
    }
}

