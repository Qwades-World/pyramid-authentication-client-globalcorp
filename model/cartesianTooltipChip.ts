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
import { CartesianTooltipHierarchyChip } from './cartesianTooltipHierarchyChip';
import { CartesianTooltipMeasureChip } from './cartesianTooltipMeasureChip';

/**
* Settings for the Tooltip drop zone chip for the Cartesian visual
*/
export class CartesianTooltipChip {
    'measure'?: CartesianTooltipMeasureChip;
    'hierarchy'?: CartesianTooltipHierarchyChip;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'CartesianTooltipChip';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "measure",
            "baseName": "measure",
            "type": "CartesianTooltipMeasureChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "CartesianTooltipHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CartesianTooltipChip.attributeTypeMap;
    }
}
