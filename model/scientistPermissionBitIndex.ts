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

import { RequestFile } from './models';

/**
* Bit switches for scientist user profiles. Certain switch combinations can be mutually exclusive.
*/
export enum ScientistPermissionBitIndex {
    AppAssets = <any> 'APP_ASSETS',
    AppPresentation = <any> 'APP_PRESENTATION',
    AppModel = <any> 'APP_MODEL',
    AppDiscovery = <any> 'APP_DISCOVERY',
    AppLogic = <any> 'APP_LOGIC',
    AppPublish = <any> 'APP_PUBLISH',
    ModAddDataServer = <any> 'MOD_ADD_DATA_SERVER',
    ModUseMachineLearning = <any> 'MOD_USE_MACHINE_LEARNING',
    ModCreateScripts = <any> 'MOD_CREATE_SCRIPTS',
    DisAdvancedAnalytics = <any> 'DIS_ADVANCED_ANALYTICS',
    LogCreateFormulas = <any> 'LOG_CREATE_FORMULAS',
    LogCreateScripts = <any> 'LOG_CREATE_SCRIPTS',
    LogCustomColumns = <any> 'LOG_CUSTOM_COLUMNS',
    PubSelectMultipleItems = <any> 'PUB_SELECT_MULTIPLE_ITEMS',
    DisCreateDataSource = <any> 'DIS_CREATE_DATA_SOURCE',
    LogCustomVisuals = <any> 'LOG_CUSTOM_VISUALS',
    ModCreatePostScripts = <any> 'MOD_CREATE_POST_SCRIPTS',
    GenAdvancedOptions = <any> 'GEN_ADVANCED_OPTIONS',
    DisCreateShareable = <any> 'DIS_CREATE_SHAREABLE',
    PubAllowSmartPublish = <any> 'PUB_ALLOW_SMART_PUBLISH',
    PubAllowScheduling = <any> 'PUB_ALLOW_SCHEDULING',
    PreAllowSmartPresent = <any> 'PRE_ALLOW_SMART_PRESENT',
    DisLiteVersion = <any> 'DIS_LITE_VERSION',
    PrePresentLite = <any> 'PRE_PRESENT_LITE',
    ModExecuteProcess = <any> 'MOD_EXECUTE_PROCESS',
    DisAutoDisc = <any> 'DIS_AUTO_DISC',
    AppTabulate = <any> 'APP_TABULATE',
    PubPublishLite = <any> 'PUB_PUBLISH_LITE',
    Solver = <any> 'SOLVER',
    TabulateLite = <any> 'TABULATE_LITE',
    ModDataScience = <any> 'MOD_DATA_SCIENCE'
}
