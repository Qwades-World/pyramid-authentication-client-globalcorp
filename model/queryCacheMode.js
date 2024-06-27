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
exports.QueryCacheMode = void 0;
/**
* Cache options for the next re-query
*/
var QueryCacheMode;
(function (QueryCacheMode) {
    QueryCacheMode[QueryCacheMode["ModelDefault"] = 'MODEL_DEFAULT'] = "ModelDefault";
    QueryCacheMode[QueryCacheMode["AvoidCache"] = 'AVOID_CACHE'] = "AvoidCache";
    QueryCacheMode[QueryCacheMode["UseCache"] = 'USE_CACHE'] = "UseCache";
})(QueryCacheMode || (exports.QueryCacheMode = QueryCacheMode = {}));