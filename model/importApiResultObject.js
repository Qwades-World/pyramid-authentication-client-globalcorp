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
exports.ImportApiResultObject = void 0;
/**
* The import content items result object from importing content into the system.
*/
var ImportApiResultObject = /** @class */ (function () {
    function ImportApiResultObject() {
    }
    ImportApiResultObject.getAttributeTypeMap = function () {
        return ImportApiResultObject.attributeTypeMap;
    };
    ImportApiResultObject.discriminator = undefined;
    ImportApiResultObject.attributeTypeMap = [
        {
            "name": "importDscMap",
            "baseName": "importDscMap",
            "type": "{ [key: string]: Array<ConnStringDscApiObject>; }"
        },
        {
            "name": "itemsIds",
            "baseName": "itemsIds",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "failedItems",
            "baseName": "failedItems",
            "type": "Array<RelatedItemData>"
        }
    ];
    return ImportApiResultObject;
}());
exports.ImportApiResultObject = ImportApiResultObject;