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
import { DataFlowModelType } from './dataFlowModelType';
import { MeasureGroup } from './measureGroup';
import { ModelDataFlowSourceInfo } from './modelDataFlowSourceInfo';
import { ModelSyncColumnsSettings } from './modelSyncColumnsSettings';
import { ModelingRelationship } from './modelingRelationship';
import { ModelingServerInfo } from './modelingServerInfo';
import { ModelingTable } from './modelingTable';
import { ModelingTranslation } from './modelingTranslation';

/**
* The model definition that contains details of tables, their relationships and joins, and measures.
*/
export class ModelingModel {
    /**
    * Default date format
    */
    'defaultDateFormat'?: string;
    /**
    * The model\'s database name
    */
    'databaseName'?: string;
    /**
    * The model\'s system ID
    */
    'modelId'?: string;
    /**
    * Unique identifier of the default measure
    */
    'defaultMeasureUniqueName'?: string;
    /**
    * The model\'s display name
    */
    'displayName'?: string;
    /**
    * A description of the model
    */
    'description'?: string;
    'modelType'?: DataFlowModelType;
    /**
    * Additional languages in the model
    */
    'additionalLanguages'?: { [key: string]: string; };
    /**
    * The host server\'s name
    */
    'serverId'?: string;
    'modelingTranslation'?: ModelingTranslation;
    /**
    * \'All\' Level Name
    */
    'allLevelName'?: string;
    /**
    * Parent Child Hierarchy Level Template
    */
    'pchLevelTemplate'?: string;
    /**
    * A list of the relationships between tables in the model
    */
    'relationships'?: Array<ModelingRelationship>;
    /**
    * The value that will be presented to the end user in case of null value.
    */
    'nullMemberCaption'?: string;
    /**
    * A list of tables/dimensions in the model
    */
    'tables'?: Array<ModelingTable>;
    'serverInfo'?: ModelingServerInfo;
    /**
    * Should auto-arrange
    */
    'arrange'?: boolean;
    /**
    * The model\'s culture name
    */
    'culture'?: string;
    'modelDataFlowSourceInfo'?: ModelDataFlowSourceInfo;
    /**
    * \'All\' Member Name
    */
    'allMemberName'?: string;
    /**
    * The model\'s measure groups. 
    */
    'measureGroups'?: Set<MeasureGroup>;
    /**
    * settings for sync columns by schedule. defines an aggregation and visibility for each new column data type.
    */
    'syncColumnsSettings'?: Array<ModelSyncColumnsSettings>;
    /**
    * Should disable cache
    */
    'disableCacheMode'?: boolean;
    /**
    * Set to true for heuristic index creation
    */
    'isAutoIndexing'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultDateFormat",
            "baseName": "defaultDateFormat",
            "type": "string"
        },
        {
            "name": "databaseName",
            "baseName": "databaseName",
            "type": "string"
        },
        {
            "name": "modelId",
            "baseName": "modelId",
            "type": "string"
        },
        {
            "name": "defaultMeasureUniqueName",
            "baseName": "defaultMeasureUniqueName",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "modelType",
            "baseName": "modelType",
            "type": "DataFlowModelType"
        },
        {
            "name": "additionalLanguages",
            "baseName": "additionalLanguages",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "serverId",
            "baseName": "serverId",
            "type": "string"
        },
        {
            "name": "modelingTranslation",
            "baseName": "modelingTranslation",
            "type": "ModelingTranslation"
        },
        {
            "name": "allLevelName",
            "baseName": "allLevelName",
            "type": "string"
        },
        {
            "name": "pchLevelTemplate",
            "baseName": "pchLevelTemplate",
            "type": "string"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "Array<ModelingRelationship>"
        },
        {
            "name": "nullMemberCaption",
            "baseName": "nullMemberCaption",
            "type": "string"
        },
        {
            "name": "tables",
            "baseName": "tables",
            "type": "Array<ModelingTable>"
        },
        {
            "name": "serverInfo",
            "baseName": "serverInfo",
            "type": "ModelingServerInfo"
        },
        {
            "name": "arrange",
            "baseName": "arrange",
            "type": "boolean"
        },
        {
            "name": "culture",
            "baseName": "culture",
            "type": "string"
        },
        {
            "name": "modelDataFlowSourceInfo",
            "baseName": "modelDataFlowSourceInfo",
            "type": "ModelDataFlowSourceInfo"
        },
        {
            "name": "allMemberName",
            "baseName": "allMemberName",
            "type": "string"
        },
        {
            "name": "measureGroups",
            "baseName": "measureGroups",
            "type": "Set<MeasureGroup>"
        },
        {
            "name": "syncColumnsSettings",
            "baseName": "syncColumnsSettings",
            "type": "Array<ModelSyncColumnsSettings>"
        },
        {
            "name": "disableCacheMode",
            "baseName": "disableCacheMode",
            "type": "boolean"
        },
        {
            "name": "isAutoIndexing",
            "baseName": "isAutoIndexing",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ModelingModel.attributeTypeMap;
    }
}

