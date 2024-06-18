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
* The type of graphical chart or visualization used in the Discover report for the Cartesian visual
*/
export enum CartesianVisualType {
    ColumnChart = <any> 'ColumnChart',
    StackedColumnChart = <any> 'StackedColumnChart',
    Stacked100ColumnChart = <any> 'Stacked100ColumnChart',
    MarimekkoChart = <any> 'MarimekkoChart',
    TornadoChart = <any> 'TornadoChart',
    BarChart = <any> 'BarChart',
    StackedBarChart = <any> 'StackedBarChart',
    Stacked100BarChart = <any> 'Stacked100BarChart',
    LineChart = <any> 'LineChart',
    RadarLineChart = <any> 'RadarLineChart',
    RadarSmoothLineChart = <any> 'RadarSmoothLineChart',
    RadarAreaChart = <any> 'RadarAreaChart',
    RadarAreaSmoothLineChart = <any> 'RadarAreaSmoothLineChart',
    RadarPointChart = <any> 'RadarPointChart',
    StepLineChart = <any> 'StepLineChart',
    PointChart = <any> 'PointChart',
    LollipopChart = <any> 'LollipopChart',
    AreaChart = <any> 'AreaChart',
    SplineAreaChart = <any> 'SplineAreaChart',
    StepLineAreaChart = <any> 'StepLineAreaChart',
    SplineChart = <any> 'SplineChart',
    StackedAreaChart = <any> 'StackedAreaChart',
    SplineStackedAreaChart = <any> 'SplineStackedAreaChart',
    StepLineStackedAreaChart = <any> 'StepLineStackedAreaChart',
    Stacked100AreaChart = <any> 'Stacked100AreaChart',
    SplineStacked100AreaChart = <any> 'SplineStacked100AreaChart',
    StepLineStacked100AreaChart = <any> 'StepLineStacked100AreaChart',
    StreamSplineChart = <any> 'StreamSplineChart',
    StreamAreaChart = <any> 'StreamAreaChart',
    StreamStepChart = <any> 'StreamStepChart',
    Waterfall = <any> 'Waterfall'
}