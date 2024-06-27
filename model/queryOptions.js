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
exports.QueryOptions = void 0;
/**
* Advanced Query Features
*/
var QueryOptions = /** @class */ (function () {
    function QueryOptions() {
    }
    QueryOptions.getAttributeTypeMap = function () {
        return QueryOptions.attributeTypeMap;
    };
    QueryOptions.discriminator = undefined;
    QueryOptions.attributeTypeMap = [
        {
            "name": "showEmpties",
            "baseName": "showEmpties",
            "type": "boolean"
        },
        {
            "name": "cacheMode",
            "baseName": "cacheMode",
            "type": "QueryCacheMode"
        },
        {
            "name": "totalsSettings",
            "baseName": "totalsSettings",
            "type": "TotalsSettings"
        },
        {
            "name": "executionSettings",
            "baseName": "executionSettings",
            "type": "ExecutionSettings"
        }
    ];
    return QueryOptions;
}());
exports.QueryOptions = QueryOptions;
