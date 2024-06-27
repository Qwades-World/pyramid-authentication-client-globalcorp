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
exports.MeasureGroup = void 0;
/**
* A fact table grouping. If table A has measures on it, and table B is connected to it, then table B has MeasureGroup of table A
*/
var MeasureGroup = /** @class */ (function () {
    function MeasureGroup() {
    }
    MeasureGroup.getAttributeTypeMap = function () {
        return MeasureGroup.attributeTypeMap;
    };
    MeasureGroup.discriminator = undefined;
    MeasureGroup.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "caption",
            "baseName": "Caption",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        }
    ];
    return MeasureGroup;
}());
exports.MeasureGroup = MeasureGroup;