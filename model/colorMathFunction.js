"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorMathFunction = void 0;
/**
* Describes the logic that drives the calculation of the drop zone chip
*/
var ColorMathFunction;
(function (ColorMathFunction) {
    ColorMathFunction[ColorMathFunction["Linear"] = 'Linear'] = "Linear";
    ColorMathFunction[ColorMathFunction["Logarithmic10"] = 'Logarithmic10'] = "Logarithmic10";
    ColorMathFunction[ColorMathFunction["Exponential"] = 'Exponential'] = "Exponential";
    ColorMathFunction[ColorMathFunction["Average"] = 'Average'] = "Average";
    ColorMathFunction[ColorMathFunction["PercentageOfMax"] = 'PercentageOfMax'] = "PercentageOfMax";
    ColorMathFunction[ColorMathFunction["PositiveNegative"] = 'PositiveNegative'] = "PositiveNegative";
    ColorMathFunction[ColorMathFunction["StandardDeviation"] = 'StandardDeviation'] = "StandardDeviation";
    ColorMathFunction[ColorMathFunction["ValueQuartiles"] = 'ValueQuartiles'] = "ValueQuartiles";
    ColorMathFunction[ColorMathFunction["RankQuartiles"] = 'RankQuartiles'] = "RankQuartiles";
    ColorMathFunction[ColorMathFunction["PercentageOfTotal"] = 'PercentageOfTotal'] = "PercentageOfTotal";
    ColorMathFunction[ColorMathFunction["ValueQuintiles"] = 'ValueQuintiles'] = "ValueQuintiles";
    ColorMathFunction[ColorMathFunction["ValueTertiles"] = 'ValueTertiles'] = "ValueTertiles";
    ColorMathFunction[ColorMathFunction["RankQuintiles"] = 'RankQuintiles'] = "RankQuintiles";
    ColorMathFunction[ColorMathFunction["RankTertiles"] = 'RankTertiles'] = "RankTertiles";
    ColorMathFunction[ColorMathFunction["Discrete"] = 'Discrete'] = "Discrete";
    ColorMathFunction[ColorMathFunction["Value"] = 'Value'] = "Value";
    ColorMathFunction[ColorMathFunction["ValueDual"] = 'ValueDual'] = "ValueDual";
    ColorMathFunction[ColorMathFunction["RankDual"] = 'RankDual'] = "RankDual";
    ColorMathFunction[ColorMathFunction["Percentile"] = 'Percentile'] = "Percentile";
    ColorMathFunction[ColorMathFunction["AboveStandardDeviation"] = 'AboveStandardDeviation'] = "AboveStandardDeviation";
    ColorMathFunction[ColorMathFunction["BelowStandardDeviation"] = 'BelowStandardDeviation'] = "BelowStandardDeviation";
})(ColorMathFunction || (exports.ColorMathFunction = ColorMathFunction = {}));