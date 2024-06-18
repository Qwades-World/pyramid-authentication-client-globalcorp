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
import { SegmentColorDropZone } from './segmentColorDropZone';
import { SegmentDetailsDropZone } from './segmentDetailsDropZone';
import { SegmentFilterDropZone } from './segmentFilterDropZone';
import { SegmentLabelsDropZone } from './segmentLabelsDropZone';
import { SegmentMotionDropZone } from './segmentMotionDropZone';
import { SegmentSizeDropZone } from './segmentSizeDropZone';
import { SegmentTooltipDropZone } from './segmentTooltipDropZone';
import { SegmentTrellisHorizontalDropZone } from './segmentTrellisHorizontalDropZone';
import { SegmentTrellisVerticalDropZone } from './segmentTrellisVerticalDropZone';
import { SegmentValuesDropZone } from './segmentValuesDropZone';
import { SegmentVisualType } from './segmentVisualType';

/**
* Settings for the Segment visual
*/
export class SegmentVisual {
    'filter'?: SegmentFilterDropZone;
    'visualType'?: SegmentVisualType;
    'trellisHorizontal'?: SegmentTrellisHorizontalDropZone;
    'color'?: SegmentColorDropZone;
    'size'?: SegmentSizeDropZone;
    'motion'?: SegmentMotionDropZone;
    'trellisVertical'?: SegmentTrellisVerticalDropZone;
    'values'?: SegmentValuesDropZone;
    'tooltip'?: SegmentTooltipDropZone;
    'details'?: SegmentDetailsDropZone;
    'labels'?: SegmentLabelsDropZone;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'SegmentVisual';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "SegmentFilterDropZone"
        },
        {
            "name": "visualType",
            "baseName": "visualType",
            "type": "SegmentVisualType"
        },
        {
            "name": "trellisHorizontal",
            "baseName": "trellisHorizontal",
            "type": "SegmentTrellisHorizontalDropZone"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "SegmentColorDropZone"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "SegmentSizeDropZone"
        },
        {
            "name": "motion",
            "baseName": "motion",
            "type": "SegmentMotionDropZone"
        },
        {
            "name": "trellisVertical",
            "baseName": "trellisVertical",
            "type": "SegmentTrellisVerticalDropZone"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "SegmentValuesDropZone"
        },
        {
            "name": "tooltip",
            "baseName": "tooltip",
            "type": "SegmentTooltipDropZone"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "SegmentDetailsDropZone"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "SegmentLabelsDropZone"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SegmentVisual.attributeTypeMap;
    }
}

