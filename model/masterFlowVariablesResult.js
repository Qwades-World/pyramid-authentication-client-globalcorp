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
exports.MasterFlowVariablesResult = void 0;
/**
* List of variables based on a query with all their connection details
*/
var MasterFlowVariablesResult = /** @class */ (function () {
    function MasterFlowVariablesResult() {
    }
    MasterFlowVariablesResult.getAttributeTypeMap = function () {
        return MasterFlowVariablesResult.attributeTypeMap;
    };
    MasterFlowVariablesResult.discriminator = undefined;
    MasterFlowVariablesResult.attributeTypeMap = [
        {
            "name": "variablesObjects",
            "baseName": "variablesObjects",
            "type": "Array<MasterFlowVariableObject>"
        }
    ];
    return MasterFlowVariablesResult;
}());
exports.MasterFlowVariablesResult = MasterFlowVariablesResult;