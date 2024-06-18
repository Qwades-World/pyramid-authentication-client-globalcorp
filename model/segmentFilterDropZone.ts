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
import { SegmentFilterChip } from './segmentFilterChip';

/**
* Settings for the Filter drop zone for the Segment visual
*/
export class SegmentFilterDropZone {
    /**
    * A list of attribute/hierarchical or value/measure selections (or chips) that are housed in the drop zone
    */
    'dropZoneChips': Array<SegmentFilterChip>;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'SegmentFilterDropZone';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<SegmentFilterChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SegmentFilterDropZone.attributeTypeMap;
    }
}
