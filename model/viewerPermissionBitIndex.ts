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
* Bit switches for viewer user profiles. Certain switch combinations can be mutually exclusive.
*/
export enum ViewerPermissionBitIndex {
    HighInteractivity = <any> 'HIGH_INTERACTIVITY',
    LowInteractivity = <any> 'LOW_INTERACTIVITY'
}
