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
import { CartesianVisual } from './cartesianVisual';
import { GridVisual } from './gridVisual';
import { MapVisual } from './mapVisual';
import { ScatterVisual } from './scatterVisual';
import { SegmentVisual } from './segmentVisual';
import { TabularVisual } from './tabularVisual';

/**
* All the dropzones of the visuals by groups
*/
export class Visuals {
    'grid'?: GridVisual;
    'segment'?: SegmentVisual;
    'scatter'?: ScatterVisual;
    'tabular'?: TabularVisual;
    'map'?: MapVisual;
    'cartesian'?: CartesianVisual;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'Visuals';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "grid",
            "baseName": "grid",
            "type": "GridVisual"
        },
        {
            "name": "segment",
            "baseName": "segment",
            "type": "SegmentVisual"
        },
        {
            "name": "scatter",
            "baseName": "scatter",
            "type": "ScatterVisual"
        },
        {
            "name": "tabular",
            "baseName": "tabular",
            "type": "TabularVisual"
        },
        {
            "name": "map",
            "baseName": "map",
            "type": "MapVisual"
        },
        {
            "name": "cartesian",
            "baseName": "cartesian",
            "type": "CartesianVisual"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Visuals.attributeTypeMap;
    }
}
