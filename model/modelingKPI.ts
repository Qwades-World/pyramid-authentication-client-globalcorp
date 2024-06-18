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
import { AggregationType } from './aggregationType';
import { DataType } from './dataType';
import { KpiAttributeType } from './kpiAttributeType';
import { ModelAttributeType } from './modelAttributeType';
import { ModelingMeasure } from './modelingMeasure';

export class ModelingKPI extends ModelingMeasure {
    'kpiType'?: KpiAttributeType;
    /**
    * An Integer mapped to a visual element that provides a quick indication of the status/trend for a KPI
    */
    'msKpiStyleType'?: number;
    /**
    * Value used to determine the type of the item receiving, use the class name
    */
    'inheritanceType'?: string = 'ModelingKPI';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kpiType",
            "baseName": "kpiType",
            "type": "KpiAttributeType"
        },
        {
            "name": "msKpiStyleType",
            "baseName": "msKpiStyleType",
            "type": "number"
        },
        {
            "name": "inheritanceType",
            "baseName": "inheritanceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ModelingKPI.attributeTypeMap);
    }
}

