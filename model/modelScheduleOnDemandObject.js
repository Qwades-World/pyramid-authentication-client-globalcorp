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
exports.ModelScheduleOnDemandObject = void 0;
/**
* Details of the model that will be the target of the on-demand execution.
*/
var ModelScheduleOnDemandObject = /** @class */ (function () {
    function ModelScheduleOnDemandObject() {
    }
    ModelScheduleOnDemandObject.getAttributeTypeMap = function () {
        return ModelScheduleOnDemandObject.attributeTypeMap;
    };
    ModelScheduleOnDemandObject.discriminator = undefined;
    ModelScheduleOnDemandObject.attributeTypeMap = [
        {
            "name": "connectionStringId",
            "baseName": "connectionStringId",
            "type": "string"
        }
    ];
    return ModelScheduleOnDemandObject;
}());
exports.ModelScheduleOnDemandObject = ModelScheduleOnDemandObject;