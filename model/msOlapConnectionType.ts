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
* Configure the manner in which the SSAS server is configured to receive connections
*/
export enum MsOlapConnectionType {
    Regular = <any> 'REGULAR',
    Azure = <any> 'AZURE',
    HttpPumpWindows = <any> 'HTTP_PUMP_WINDOWS',
    HttpPumpBasic = <any> 'HTTP_PUMP_BASIC',
    PowerBiWorkspace = <any> 'POWER_BI_WORKSPACE'
}