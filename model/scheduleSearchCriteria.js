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
exports.ScheduleSearchCriteria = void 0;
/**
* The search criteria object for finding a schedule.
*/
var ScheduleSearchCriteria = /** @class */ (function () {
    function ScheduleSearchCriteria() {
    }
    ScheduleSearchCriteria.getAttributeTypeMap = function () {
        return ScheduleSearchCriteria.attributeTypeMap;
    };
    ScheduleSearchCriteria.discriminator = undefined;
    ScheduleSearchCriteria.attributeTypeMap = [
        {
            "name": "scheduleType",
            "baseName": "scheduleType",
            "type": "ScheduleType"
        },
        {
            "name": "searchCriteria",
            "baseName": "searchCriteria",
            "type": "SearchCriteria"
        }
    ];
    return ScheduleSearchCriteria;
}());
exports.ScheduleSearchCriteria = ScheduleSearchCriteria;