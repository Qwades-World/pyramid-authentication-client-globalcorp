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
import { ModelDataCatalog } from './modelDataCatalog';

/**
* Data for data catalog update operation
*/
export class DataCatalogUpdateData {
    /**
    * The ID of the model to update
    */
    'materializedModelId'?: string;
    'dataCatalog'?: ModelDataCatalog;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "materializedModelId",
            "baseName": "materializedModelId",
            "type": "string"
        },
        {
            "name": "dataCatalog",
            "baseName": "dataCatalog",
            "type": "ModelDataCatalog"
        }    ];

    static getAttributeTypeMap() {
        return DataCatalogUpdateData.attributeTypeMap;
    }
}

