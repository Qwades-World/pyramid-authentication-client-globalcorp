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
* Cache options for the next re-query
*/
export enum QueryCacheMode {
    ModelDefault = <any> 'MODEL_DEFAULT',
    AvoidCache = <any> 'AVOID_CACHE',
    UseCache = <any> 'USE_CACHE'
}
