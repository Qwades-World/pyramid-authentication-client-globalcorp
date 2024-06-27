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
exports.SparkTransportMode = void 0;
/**
* transportMode parameter for SparkSQL JDBC connection
*/
var SparkTransportMode;
(function (SparkTransportMode) {
    SparkTransportMode[SparkTransportMode["Binary"] = 'BINARY'] = "Binary";
    SparkTransportMode[SparkTransportMode["Sasl"] = 'SASL'] = "Sasl";
    SparkTransportMode[SparkTransportMode["Http"] = 'HTTP'] = "Http";
    SparkTransportMode[SparkTransportMode["Https"] = 'HTTPS'] = "Https";
})(SparkTransportMode || (exports.SparkTransportMode = SparkTransportMode = {}));