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
import { ColorMathFunction } from './colorMathFunction';
import { GridColorOption } from './gridColorOption';

/**
* Settings for the Color measure drop zone chip for the Grid visual
*/
export class GridColorMeasureChip {
    /**
    * The unique name of the measure or value
    */
    'uniqueName': string;
    'gridColorOption'?: GridColorOption;
    'mathFunction'?: ColorMathFunction;
    /**
    * Defines which visible measure the logic should apply to
    */
    'targetMeasure'?: string;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'GridColorMeasureChip';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "gridColorOption",
            "baseName": "gridColorOption",
            "type": "GridColorOption"
        },
        {
            "name": "mathFunction",
            "baseName": "mathFunction",
            "type": "ColorMathFunction"
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
        return GridColorMeasureChip.attributeTypeMap;
    }
}

