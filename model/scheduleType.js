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
exports.ScheduleType = void 0;
/**
* Schedule type enumeration.
*/
var ScheduleType;
(function (ScheduleType) {
    ScheduleType[ScheduleType["Printing"] = 'PRINTING'] = "Printing";
    ScheduleType[ScheduleType["Etl"] = 'ETL'] = "Etl";
    ScheduleType[ScheduleType["MachineLearning"] = 'MACHINE_LEARNING'] = "MachineLearning";
    ScheduleType[ScheduleType["UserGroups"] = 'USER_GROUPS'] = "UserGroups";
    ScheduleType[ScheduleType["LogsClean"] = 'LOGS_CLEAN'] = "LogsClean";
    ScheduleType[ScheduleType["Provision"] = 'PROVISION'] = "Provision";
    ScheduleType[ScheduleType["Recommendation"] = 'RECOMMENDATION'] = "Recommendation";
    ScheduleType[ScheduleType["ImageSnapshot"] = 'IMAGE_SNAPSHOT'] = "ImageSnapshot";
    ScheduleType[ScheduleType["Alert"] = 'ALERT'] = "Alert";
    ScheduleType[ScheduleType["CleanDb"] = 'CLEAN_DB'] = "CleanDb";
    ScheduleType[ScheduleType["UpgradeHierarchySecurity"] = 'UPGRADE_HIERARCHY_SECURITY'] = "UpgradeHierarchySecurity";
    ScheduleType[ScheduleType["ImageSnapshotNow"] = 'IMAGE_SNAPSHOT_NOW'] = "ImageSnapshotNow";
    ScheduleType[ScheduleType["PrintEtl"] = 'PRINT_ETL'] = "PrintEtl";
    ScheduleType[ScheduleType["Subscription"] = 'SUBSCRIPTION'] = "Subscription";
    ScheduleType[ScheduleType["SchedulesCleaner"] = 'SCHEDULES_CLEANER'] = "SchedulesCleaner";
    ScheduleType[ScheduleType["CleanPresentationDocuments"] = 'CLEAN_PRESENTATION_DOCUMENTS'] = "CleanPresentationDocuments";
    ScheduleType[ScheduleType["UpgradeTeOutputs"] = 'UPGRADE_TE_OUTPUTS'] = "UpgradeTeOutputs";
    ScheduleType[ScheduleType["UpgradeContentSnapshotResults"] = 'UPGRADE_CONTENT_SNAPSHOT_RESULTS'] = "UpgradeContentSnapshotResults";
    ScheduleType[ScheduleType["UpdatePrivateRoles"] = 'UPDATE_PRIVATE_ROLES'] = "UpdatePrivateRoles";
    ScheduleType[ScheduleType["CleanDuplicateTags"] = 'CLEAN_DUPLICATE_TAGS'] = "CleanDuplicateTags";
    ScheduleType[ScheduleType["UpdateSystemSchedules"] = 'UPDATE_SYSTEM_SCHEDULES'] = "UpdateSystemSchedules";
    ScheduleType[ScheduleType["CertificatesReader"] = 'CERTIFICATES_READER'] = "CertificatesReader";
    ScheduleType[ScheduleType["HotboxTemplatesPerTenant"] = 'HOTBOX_TEMPLATES_PER_TENANT'] = "HotboxTemplatesPerTenant";
    ScheduleType[ScheduleType["UpgradeUserProfiles"] = 'UPGRADE_USER_PROFILES'] = "UpgradeUserProfiles";
    ScheduleType[ScheduleType["Telemetry"] = 'TELEMETRY'] = "Telemetry";
    ScheduleType[ScheduleType["CollaborationEmails"] = 'COLLABORATION_EMAILS'] = "CollaborationEmails";
})(ScheduleType || (exports.ScheduleType = ScheduleType = {}));
