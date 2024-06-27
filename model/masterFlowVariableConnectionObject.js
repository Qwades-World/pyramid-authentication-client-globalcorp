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
exports.MasterFlowVariableConnectionObject = void 0;
/**
* Use this object to modify the data source server ID or/and database name used in the variable connection.
*/
var MasterFlowVariableConnectionObject = /** @class */ (function () {
    function MasterFlowVariableConnectionObject() {
    }
    MasterFlowVariableConnectionObject.getAttributeTypeMap = function () {
        return MasterFlowVariableConnectionObject.attributeTypeMap;
    };
    MasterFlowVariableConnectionObject.discriminator = undefined;
    MasterFlowVariableConnectionObject.attributeTypeMap = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "variableName",
            "baseName": "variableName",
            "type": "string"
        },
        {
            "name": "databaseName",
            "baseName": "databaseName",
            "type": "string"
        },
        {
            "name": "serverId",
            "baseName": "serverId",
            "type": "string"
        }
    ];
    return MasterFlowVariableConnectionObject;
}());
exports.MasterFlowVariableConnectionObject = MasterFlowVariableConnectionObject;