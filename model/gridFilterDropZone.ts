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
import { GridFilterChip } from './gridFilterChip';

/**
* Settings for the Filter drop zone for the Grid visual
*/
export class GridFilterDropZone {
    /**
    * A list of attribute/hierarchical or value/measure selections (or chips) that are housed in the drop zone
    */
    'dropZoneChips': Array<GridFilterChip>;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'GridFilterDropZone';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<GridFilterChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GridFilterDropZone.attributeTypeMap;
    }
}

