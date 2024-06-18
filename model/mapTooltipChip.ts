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
import { MapTooltipHierarchyChip } from './mapTooltipHierarchyChip';
import { MapTooltipMeasureChip } from './mapTooltipMeasureChip';

/**
* Settings for the Tooltip drop zone chip for the Map visual
*/
export class MapTooltipChip {
    'measure'?: MapTooltipMeasureChip;
    'hierarchy'?: MapTooltipHierarchyChip;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'MapTooltipChip';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "measure",
            "baseName": "measure",
            "type": "MapTooltipMeasureChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "MapTooltipHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MapTooltipChip.attributeTypeMap;
    }
}
