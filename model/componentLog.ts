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
import { PrintingComponentType } from './printingComponentType';

export class ComponentLog {
    'componentType'?: string;
    'componentId'?: string;
    'componentBreadcrumbs'?: string;
    'componentCreationEndTime'?: string;
    'componentConversionEndTime'?: string;
    'componentCreationError'?: string;
    'componentDescription'?: string;
    'componentCreationStatus'?: string;
    'componentCreationStartTime'?: string;
    'queryId'?: string;
    'componentConversionStartTime'?: string;
    'componentInjectScriptEndTime'?: string;
    'componentAutoTitle'?: string;
    'printingComponentType'?: PrintingComponentType;
    'componentScriptEndTime'?: string;
    'componentScriptDuration'?: string;
    'componentCreationDuration'?: string;
    'componentInjectScriptStartTime'?: string;
    'componentInjectScriptDuration'?: string;
    'componentConversionDuration'?: string;
    'componentScriptStartTime'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "componentType",
            "baseName": "componentType",
            "type": "string"
        },
        {
            "name": "componentId",
            "baseName": "componentId",
            "type": "string"
        },
        {
            "name": "componentBreadcrumbs",
            "baseName": "componentBreadcrumbs",
            "type": "string"
        },
        {
            "name": "componentCreationEndTime",
            "baseName": "componentCreationEndTime",
            "type": "string"
        },
        {
            "name": "componentConversionEndTime",
            "baseName": "componentConversionEndTime",
            "type": "string"
        },
        {
            "name": "componentCreationError",
            "baseName": "componentCreationError",
            "type": "string"
        },
        {
            "name": "componentDescription",
            "baseName": "componentDescription",
            "type": "string"
        },
        {
            "name": "componentCreationStatus",
            "baseName": "componentCreationStatus",
            "type": "string"
        },
        {
            "name": "componentCreationStartTime",
            "baseName": "componentCreationStartTime",
            "type": "string"
        },
        {
            "name": "queryId",
            "baseName": "queryId",
            "type": "string"
        },
        {
            "name": "componentConversionStartTime",
            "baseName": "componentConversionStartTime",
            "type": "string"
        },
        {
            "name": "componentInjectScriptEndTime",
            "baseName": "componentInjectScriptEndTime",
            "type": "string"
        },
        {
            "name": "componentAutoTitle",
            "baseName": "componentAutoTitle",
            "type": "string"
        },
        {
            "name": "printingComponentType",
            "baseName": "printingComponentType",
            "type": "PrintingComponentType"
        },
        {
            "name": "componentScriptEndTime",
            "baseName": "componentScriptEndTime",
            "type": "string"
        },
        {
            "name": "componentScriptDuration",
            "baseName": "componentScriptDuration",
            "type": "string"
        },
        {
            "name": "componentCreationDuration",
            "baseName": "componentCreationDuration",
            "type": "string"
        },
        {
            "name": "componentInjectScriptStartTime",
            "baseName": "componentInjectScriptStartTime",
            "type": "string"
        },
        {
            "name": "componentInjectScriptDuration",
            "baseName": "componentInjectScriptDuration",
            "type": "string"
        },
        {
            "name": "componentConversionDuration",
            "baseName": "componentConversionDuration",
            "type": "string"
        },
        {
            "name": "componentScriptStartTime",
            "baseName": "componentScriptStartTime",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComponentLog.attributeTypeMap;
    }
}
