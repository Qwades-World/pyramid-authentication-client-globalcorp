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
import { CartesianValuesVisualTypes } from './cartesianValuesVisualTypes';
import { ValuesDropZoneOptions } from './valuesDropZoneOptions';

/**
* Settings for the Values measure drop zone chip for the Cartesian visual
*/
export class CartesianValuesMeasureChip {
    'cartesianValuesOption'?: ValuesDropZoneOptions;
    /**
    * The unique name of the measure or value
    */
    'uniqueName': string;
    'chartType'?: CartesianValuesVisualTypes;
    /**
    * Defines which visible measure the logic should apply to
    */
    'targetMeasure'?: string;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'CartesianValuesMeasureChip';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cartesianValuesOption",
            "baseName": "cartesianValuesOption",
            "type": "ValuesDropZoneOptions"
        },
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "chartType",
            "baseName": "chartType",
            "type": "CartesianValuesVisualTypes"
        },
        {
            "name": "targetMeasure",
            "baseName": "targetMeasure",
            "type": "string"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CartesianValuesMeasureChip.attributeTypeMap;
    }
}
