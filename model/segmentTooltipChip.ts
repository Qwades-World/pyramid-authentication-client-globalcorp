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
import { SegmentTooltipHierarchyChip } from './segmentTooltipHierarchyChip';
import { SegmentTooltipMeasureChip } from './segmentTooltipMeasureChip';

/**
* Settings for the Tooltip drop zone chip for the Segment visual
*/
export class SegmentTooltipChip {
    'measure'?: SegmentTooltipMeasureChip;
    'hierarchy'?: SegmentTooltipHierarchyChip;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'SegmentTooltipChip';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "measure",
            "baseName": "measure",
            "type": "SegmentTooltipMeasureChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "SegmentTooltipHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SegmentTooltipChip.attributeTypeMap;
    }
}
