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
import { ScatterShapeChip } from './scatterShapeChip';

/**
* Settings for the Shape drop zone for the Scatter visual
*/
export class ScatterShapeDropZone {
    /**
    * A list of attribute/hierarchical or value/measure selections (or chips) that are housed in the drop zone
    */
    'dropZoneChips': Array<ScatterShapeChip>;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'ScatterShapeDropZone';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dropZoneChips",
            "baseName": "dropZoneChips",
            "type": "Array<ScatterShapeChip>"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ScatterShapeDropZone.attributeTypeMap;
    }
}

