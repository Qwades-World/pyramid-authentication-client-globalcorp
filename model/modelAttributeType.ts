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

/**
* Attribute type
*/
export enum ModelAttributeType {
    ModelColumn = <any> 'MODEL_COLUMN',
    Measure = <any> 'MEASURE',
    CustomMeasure = <any> 'CUSTOM_MEASURE',
    Hierarchy = <any> 'HIERARCHY',
    Level = <any> 'LEVEL',
    MeasureDescription = <any> 'MEASURE_DESCRIPTION',
    CustomMeasureSet = <any> 'CUSTOM_MEASURE_SET',
    CalculatedMeasure = <any> 'CALCULATED_MEASURE',
    MsKpi = <any> 'MS_KPI',
    MsKpiAttribute = <any> 'MS_KPI_ATTRIBUTE',
    ParameterMeasure = <any> 'PARAMETER_MEASURE',
    CrossColumn = <any> 'CROSS_COLUMN',
    GeoColumn = <any> 'GEO_COLUMN',
    AdvancedAnalyticsColumn = <any> 'ADVANCED_ANALYTICS_COLUMN',
    Properties = <any> 'PROPERTIES',
    CustomColumn = <any> 'CUSTOM_COLUMN',
    NamedMeasureSet = <any> 'NAMED_MEASURE_SET',
    DefaultMeasure = <any> 'DEFAULT_MEASURE',
    CustomHierarchy = <any> 'CUSTOM_HIERARCHY'
}