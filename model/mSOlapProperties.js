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
exports.MSOlapProperties = void 0;
/**
* Additional properties for olap sources on calculation.
*/
var MSOlapProperties = /** @class */ (function () {
    function MSOlapProperties() {
    }
    MSOlapProperties.getAttributeTypeMap = function () {
        return MSOlapProperties.attributeTypeMap;
    };
    MSOlapProperties.discriminator = undefined;
    MSOlapProperties.attributeTypeMap = [
        {
            "name": "foregroundColorSyntax",
            "baseName": "foregroundColorSyntax",
            "type": "string"
        },
        {
            "name": "isolationMode",
            "baseName": "isolationMode",
            "type": "IsolationMode"
        },
        {
            "name": "backColorSyntax",
            "baseName": "backColorSyntax",
            "type": "string"
        },
        {
            "name": "parentElement",
            "baseName": "parentElement",
            "type": "string"
        }
    ];
    return MSOlapProperties;
}());
exports.MSOlapProperties = MSOlapProperties;
