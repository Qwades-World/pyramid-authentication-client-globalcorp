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
import { GridRowsHierarchyChip } from './gridRowsHierarchyChip';
import { GridRowsValuesChip } from './gridRowsValuesChip';

/**
* Settings for the Rows drop zone chip for the Grid visual
*/
export class GridRowsChip {
    'values'?: GridRowsValuesChip;
    'hierarchy'?: GridRowsHierarchyChip;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'GridRowsChip';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "values",
            "baseName": "values",
            "type": "GridRowsValuesChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "GridRowsHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GridRowsChip.attributeTypeMap;
    }
}
