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
exports.ExecuteMasterFlowObject = void 0;
/**
* Input parameters needed to execute a Master Flow
*/
var ExecuteMasterFlowObject = /** @class */ (function () {
    function ExecuteMasterFlowObject() {
        /**
        * In the case of adding or removing columns in the database, the model columns can be synchronized according to this property.
        */
        this['shouldOverrideSecurity'] = true;
    }
    ExecuteMasterFlowObject.getAttributeTypeMap = function () {
        return ExecuteMasterFlowObject.attributeTypeMap;
    };
    ExecuteMasterFlowObject.discriminator = undefined;
    ExecuteMasterFlowObject.attributeTypeMap = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "syncModelColumnsType",
            "baseName": "syncModelColumnsType",
            "type": "EtlSyncModelColumnsType"
        },
        {
            "name": "shouldOverrideSecurity",
            "baseName": "shouldOverrideSecurity",
            "type": "boolean"
        },
        {
            "name": "processModelsOnly",
            "baseName": "processModelsOnly",
            "type": "boolean"
        },
        {
            "name": "executionTitle",
            "baseName": "executionTitle",
            "type": "string"
        }
    ];
    return ExecuteMasterFlowObject;
}());
exports.ExecuteMasterFlowObject = ExecuteMasterFlowObject;