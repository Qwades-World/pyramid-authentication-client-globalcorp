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
exports.ModelConnection = void 0;
var ModelConnection = /** @class */ (function () {
    function ModelConnection() {
    }
    ModelConnection.getAttributeTypeMap = function () {
        return ModelConnection.attributeTypeMap;
    };
    ModelConnection.discriminator = undefined;
    ModelConnection.attributeTypeMap = [
        {
            "name": "metadataDisplayType",
            "baseName": "metadataDisplayType",
            "type": "MetadataDisplayType"
        },
        {
            "name": "isDynamicModel",
            "baseName": "isDynamicModel",
            "type": "boolean"
        },
        {
            "name": "databaseName",
            "baseName": "databaseName",
            "type": "string"
        },
        {
            "name": "culture",
            "baseName": "culture",
            "type": "string"
        },
        {
            "name": "deterministicModelId",
            "baseName": "deterministicModelId",
            "type": "string"
        },
        {
            "name": "securityHash",
            "baseName": "securityHash",
            "type": "string"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ConnectionStringType"
        },
        {
            "name": "connectionStringId",
            "baseName": "connectionStringId",
            "type": "string"
        },
        {
            "name": "serverId",
            "baseName": "serverId",
            "type": "string"
        }
    ];
    return ModelConnection;
}());
exports.ModelConnection = ModelConnection;
