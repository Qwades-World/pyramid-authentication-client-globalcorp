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
import { ViewerPermissionBitIndex } from './viewerPermissionBitIndex';

/**
* The functional items to be available in the profile as either a list or a sum index bits. The list will take priority if both are supplied
*/
export class ViewerPermissions {
    /**
    * A list of permission index switches [x,y,...]
    */
    'permissionBitIndexList'?: Array<ViewerPermissionBitIndex>;
    /**
    * The summation of all permission index bits {(2^x)+(2^y)+...]
    */
    'numeric'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "permissionBitIndexList",
            "baseName": "permissionBitIndexList",
            "type": "Array<ViewerPermissionBitIndex>"
        },
        {
            "name": "numeric",
            "baseName": "numeric",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ViewerPermissions.attributeTypeMap;
    }
}

