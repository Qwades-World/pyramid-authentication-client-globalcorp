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
import { HierarchyOverlayProperty } from './hierarchyOverlayProperty';

/**
* Hierarchy overlay data to delete.
*/
export class HierarchyOverlayToDeleteData {
    /**
    * The unique name of the modeling attribute
    */
    'uniqueName': string;
    /**
    * The list of properties to delete from the modeling attribute\'s overlay.
    */
    'propertiesToDelete': Array<HierarchyOverlayProperty>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uniqueName",
            "baseName": "uniqueName",
            "type": "string"
        },
        {
            "name": "propertiesToDelete",
            "baseName": "propertiesToDelete",
            "type": "Array<HierarchyOverlayProperty>"
        }    ];

    static getAttributeTypeMap() {
        return HierarchyOverlayToDeleteData.attributeTypeMap;
    }
}

