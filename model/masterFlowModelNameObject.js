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
exports.MasterFlowModelNameObject = void 0;
/**
* Use this object to update model name.
*/
var MasterFlowModelNameObject = /** @class */ (function () {
    function MasterFlowModelNameObject() {
    }
    MasterFlowModelNameObject.getAttributeTypeMap = function () {
        return MasterFlowModelNameObject.attributeTypeMap;
    };
    MasterFlowModelNameObject.discriminator = undefined;
    MasterFlowModelNameObject.attributeTypeMap = [
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
        }
    ];
    return MasterFlowModelNameObject;
}());
exports.MasterFlowModelNameObject = MasterFlowModelNameObject;
