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
* Use this object to update model name.
*/
export class MasterFlowModelNameObject {
    /**
    * The ID depends on the source: For Model files it is the item\'s system ID. For materialized/deployed models it is its materialized model ID.
    */
    'itemId': string;
    /**
    * The master flow model node ID.
    */
    'masterFlowModelNodeId': string;
    /**
    * The new model name.
    */
    'newModelName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "masterFlowModelNodeId",
            "baseName": "masterFlowModelNodeId",
            "type": "string"
        },
        {
            "name": "newModelName",
            "baseName": "newModelName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MasterFlowModelNameObject.attributeTypeMap;
    }
}
