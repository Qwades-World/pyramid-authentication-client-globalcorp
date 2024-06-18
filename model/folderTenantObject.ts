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
import { ValidRootFolderType } from './validRootFolderType';

/**
* The folder for a tenant object.
*/
export class FolderTenantObject {
    /**
    * Then tenant\'s ID
    */
    'tenantId': string;
    'validRootFolderType': ValidRootFolderType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string"
        },
        {
            "name": "validRootFolderType",
            "baseName": "validRootFolderType",
            "type": "ValidRootFolderType"
        }    ];

    static getAttributeTypeMap() {
        return FolderTenantObject.attributeTypeMap;
    }
}

