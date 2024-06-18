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
import { CartesianLabelsHierarchyChip } from './cartesianLabelsHierarchyChip';
import { CartesianLabelsMeasureChip } from './cartesianLabelsMeasureChip';

/**
* Settings for the Labels drop zone chip for the Cartesian visual
*/
export class CartesianLabelsChip {
    'measure'?: CartesianLabelsMeasureChip;
    'hierarchy'?: CartesianLabelsHierarchyChip;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'CartesianLabelsChip';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "measure",
            "baseName": "measure",
            "type": "CartesianLabelsMeasureChip"
        },
        {
            "name": "hierarchy",
            "baseName": "hierarchy",
            "type": "CartesianLabelsHierarchyChip"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CartesianLabelsChip.attributeTypeMap;
    }
}
