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
exports.TaskStatus = void 0;
/**
* A schedule\'s task status.
*/
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Pending"] = 'PENDING'] = "Pending";
    TaskStatus[TaskStatus["Finished"] = 'FINISHED'] = "Finished";
    TaskStatus[TaskStatus["FinishedRendering"] = 'FINISHED_RENDERING'] = "FinishedRendering";
    TaskStatus[TaskStatus["Error"] = 'ERROR'] = "Error";
    TaskStatus[TaskStatus["Running"] = 'RUNNING'] = "Running";
    TaskStatus[TaskStatus["FinishedWithErrors"] = 'FINISHED_WITH_ERRORS'] = "FinishedWithErrors";
    TaskStatus[TaskStatus["StoppedWithoutRunning"] = 'STOPPED_WITHOUT_RUNNING'] = "StoppedWithoutRunning";
    TaskStatus[TaskStatus["DuringLock"] = 'DURING_LOCK'] = "DuringLock";
    TaskStatus[TaskStatus["Canceled"] = 'CANCELED'] = "Canceled";
    TaskStatus[TaskStatus["Canceling"] = 'CANCELING'] = "Canceling";
    TaskStatus[TaskStatus["PendingForEvaluation"] = 'PENDING_FOR_EVALUATION'] = "PendingForEvaluation";
    TaskStatus[TaskStatus["DuringLockEvaluation"] = 'DURING_LOCK_EVALUATION'] = "DuringLockEvaluation";
    TaskStatus[TaskStatus["RunningEvaluation"] = 'RUNNING_EVALUATION'] = "RunningEvaluation";
    TaskStatus[TaskStatus["StoppedAfterEvaluation"] = 'STOPPED_AFTER_EVALUATION'] = "StoppedAfterEvaluation";
    TaskStatus[TaskStatus["EvaluationCanceled"] = 'EVALUATION_CANCELED'] = "EvaluationCanceled";
    TaskStatus[TaskStatus["Deleted"] = 'DELETED'] = "Deleted";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));