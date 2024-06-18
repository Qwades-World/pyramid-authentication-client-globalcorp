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
* A fact table grouping. If table A has measures on it, and table B is connected to it, then table B has MeasureGroup of table A
*/
export class MeasureGroup {
    /**
    * Measure group description
    */
    'description'?: string;
    /**
    * Measure group caption
    */
    'caption'?: string;
    /**
    * Measure group name
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "caption",
            "baseName": "Caption",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MeasureGroup.attributeTypeMap;
    }
}

