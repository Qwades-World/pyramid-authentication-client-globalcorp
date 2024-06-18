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
* The tag usage object used to set a tag for a given content item.
*/
export class TagUsageApiData {
    /**
    * The content item\'s system ID
    */
    'itemId': string;
    /**
    * The tag\'s system ID
    */
    'tagId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "tagId",
            "baseName": "tagId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TagUsageApiData.attributeTypeMap;
    }
}
