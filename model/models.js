"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./accessType"), exports);
__exportStar(require("./addHierarchyOverlayApiObject"), exports);
__exportStar(require("./addMeasureOverlayApiObject"), exports);
__exportStar(require("./addUserRoleData"), exports);
__exportStar(require("./addUsersRoleData"), exports);
__exportStar(require("./additionalServerProperties"), exports);
__exportStar(require("./adminMultiTenantData"), exports);
__exportStar(require("./adminType"), exports);
__exportStar(require("./adminTypeApiData"), exports);
__exportStar(require("./aggregationType"), exports);
__exportStar(require("./analystPermissionBitIndex"), exports);
__exportStar(require("./analystProfileApiData"), exports);
__exportStar(require("./analyticsPermissions"), exports);
__exportStar(require("./apiResponseFormat"), exports);
__exportStar(require("./apiResultLicenseStatus"), exports);
__exportStar(require("./apiResultTaskStatus"), exports);
__exportStar(require("./attributeTranslation"), exports);
__exportStar(require("./axisTotalsType"), exports);
__exportStar(require("./bulkWritingType"), exports);
__exportStar(require("./bwDatabaseListType"), exports);
__exportStar(require("./bwInfoAreaTreeViewType"), exports);
__exportStar(require("./cartesianBarVisualType"), exports);
__exportStar(require("./cartesianCategoriesDropZone"), exports);
__exportStar(require("./cartesianCategoriesHierarchyChip"), exports);
__exportStar(require("./cartesianColorChip"), exports);
__exportStar(require("./cartesianColorDropZone"), exports);
__exportStar(require("./cartesianColorHierarchyChip"), exports);
__exportStar(require("./cartesianColorMeasureChip"), exports);
__exportStar(require("./cartesianColumnVisualType"), exports);
__exportStar(require("./cartesianFilterChip"), exports);
__exportStar(require("./cartesianFilterDropZone"), exports);
__exportStar(require("./cartesianFilterHierarchyChip"), exports);
__exportStar(require("./cartesianFilterValuesChip"), exports);
__exportStar(require("./cartesianLabelsChip"), exports);
__exportStar(require("./cartesianLabelsDropZone"), exports);
__exportStar(require("./cartesianLabelsHierarchyChip"), exports);
__exportStar(require("./cartesianLabelsMeasureChip"), exports);
__exportStar(require("./cartesianLineVisualType"), exports);
__exportStar(require("./cartesianMotionDropZone"), exports);
__exportStar(require("./cartesianMotionHierarchyChip"), exports);
__exportStar(require("./cartesianShapeChip"), exports);
__exportStar(require("./cartesianShapeDropZone"), exports);
__exportStar(require("./cartesianShapeHierarchyChip"), exports);
__exportStar(require("./cartesianShapeMeasureChip"), exports);
__exportStar(require("./cartesianSizeDropZone"), exports);
__exportStar(require("./cartesianSizeMeasureChip"), exports);
__exportStar(require("./cartesianStackedBarVisualType"), exports);
__exportStar(require("./cartesianStackedColumnVisualType"), exports);
__exportStar(require("./cartesianTooltipChip"), exports);
__exportStar(require("./cartesianTooltipDropZone"), exports);
__exportStar(require("./cartesianTooltipHierarchyChip"), exports);
__exportStar(require("./cartesianTooltipMeasureChip"), exports);
__exportStar(require("./cartesianTrellisHorizontalChip"), exports);
__exportStar(require("./cartesianTrellisHorizontalDropZone"), exports);
__exportStar(require("./cartesianTrellisHorizontalHierarchyChip"), exports);
__exportStar(require("./cartesianTrellisHorizontalValuesChip"), exports);
__exportStar(require("./cartesianTrellisVerticalChip"), exports);
__exportStar(require("./cartesianTrellisVerticalDropZone"), exports);
__exportStar(require("./cartesianTrellisVerticalHierarchyChip"), exports);
__exportStar(require("./cartesianTrellisVerticalValuesChip"), exports);
__exportStar(require("./cartesianValuesDropZone"), exports);
__exportStar(require("./cartesianValuesMeasureChip"), exports);
__exportStar(require("./cartesianValuesVisualTypes"), exports);
__exportStar(require("./cartesianVisual"), exports);
__exportStar(require("./cartesianVisualType"), exports);
__exportStar(require("./changeItemDescriptionData"), exports);
__exportStar(require("./changeUserLicenseObject"), exports);
__exportStar(require("./clashDefaultOption"), exports);
__exportStar(require("./clientLicenseType"), exports);
__exportStar(require("./colorMathFunction"), exports);
__exportStar(require("./componentLog"), exports);
__exportStar(require("./conditionConjunctionType"), exports);
__exportStar(require("./connStringDscApiObject"), exports);
__exportStar(require("./connectedItemsSearchCriteria"), exports);
__exportStar(require("./connectionSearchCriteria"), exports);
__exportStar(require("./connectionStringData"), exports);
__exportStar(require("./connectionStringProperties"), exports);
__exportStar(require("./connectionStringType"), exports);
__exportStar(require("./contentItemObject"), exports);
__exportStar(require("./contentSearchParamsObject"), exports);
__exportStar(require("./contentType"), exports);
__exportStar(require("./contentTypeObject"), exports);
__exportStar(require("./createUserAdObject"), exports);
__exportStar(require("./createUserDbObject"), exports);
__exportStar(require("./createUserOpenIdObject"), exports);
__exportStar(require("./createUserSamlObject"), exports);
__exportStar(require("./createdThemeResult"), exports);
__exportStar(require("./csvDelimiter"), exports);
__exportStar(require("./cubeAuthMethod"), exports);
__exportStar(require("./customRootCAType"), exports);
__exportStar(require("./dataBaseRecognitionObject"), exports);
__exportStar(require("./dataCatalogDimension"), exports);
__exportStar(require("./dataCatalogHierarchy"), exports);
__exportStar(require("./dataCatalogHierarchyLevel"), exports);
__exportStar(require("./dataCatalogItem"), exports);
__exportStar(require("./dataCatalogMeasure"), exports);
__exportStar(require("./dataCatalogModelMetadata"), exports);
__exportStar(require("./dataCatalogProperty"), exports);
__exportStar(require("./dataCatalogUpdateData"), exports);
__exportStar(require("./dataFlowModelType"), exports);
__exportStar(require("./dataSourceTableResult"), exports);
__exportStar(require("./dataSourceUsedTablesResult"), exports);
__exportStar(require("./dataType"), exports);
__exportStar(require("./deleteHierarchyOverlayApiObject"), exports);
__exportStar(require("./deleteMeasureOverlayApiObject"), exports);
__exportStar(require("./deleteTenantApiData"), exports);
__exportStar(require("./discoverData"), exports);
__exportStar(require("./discoverDataCatalog"), exports);
__exportStar(require("./distributionLog"), exports);
__exportStar(require("./distributionType"), exports);
__exportStar(require("./domainAdminPermissionAPIObject"), exports);
__exportStar(require("./domainAdminPermissionType"), exports);
__exportStar(require("./domainAdminPermissions"), exports);
__exportStar(require("./domainSecurityObject"), exports);
__exportStar(require("./dscApiData"), exports);
__exportStar(require("./elementSelectionData"), exports);
__exportStar(require("./elementSelectionDataType"), exports);
__exportStar(require("./enumerationOutput"), exports);
__exportStar(require("./errorMessage"), exports);
__exportStar(require("./etlSyncModelColumnsType"), exports);
__exportStar(require("./etlTaskSummary"), exports);
__exportStar(require("./etlTaskSummaryAllOf"), exports);
__exportStar(require("./etlValidationMessage"), exports);
__exportStar(require("./executeMasterFlowObject"), exports);
__exportStar(require("./executeMasterFlowResult"), exports);
__exportStar(require("./executeScheduleApiData"), exports);
__exportStar(require("./executionSettings"), exports);
__exportStar(require("./executionViewData"), exports);
__exportStar(require("./exportContentApiData"), exports);
__exportStar(require("./exportData"), exports);
__exportStar(require("./exportOptions"), exports);
__exportStar(require("./externalParameters"), exports);
__exportStar(require("./filterHierarchyType"), exports);
__exportStar(require("./filterParameter"), exports);
__exportStar(require("./filterValuesType"), exports);
__exportStar(require("./firstWorkday"), exports);
__exportStar(require("./folderTenantObject"), exports);
__exportStar(require("./formulaData"), exports);
__exportStar(require("./ftpDataMode"), exports);
__exportStar(require("./ftpSecurityType"), exports);
__exportStar(require("./ftpSettings"), exports);
__exportStar(require("./gaType"), exports);
__exportStar(require("./getItemParamsObject"), exports);
__exportStar(require("./getOverlaySecurityObject"), exports);
__exportStar(require("./gridColorChip"), exports);
__exportStar(require("./gridColorDropZone"), exports);
__exportStar(require("./gridColorHierarchyChip"), exports);
__exportStar(require("./gridColorMeasureChip"), exports);
__exportStar(require("./gridColorOption"), exports);
__exportStar(require("./gridColsChip"), exports);
__exportStar(require("./gridColsDropZone"), exports);
__exportStar(require("./gridColsHierarchyChip"), exports);
__exportStar(require("./gridColsValuesChip"), exports);
__exportStar(require("./gridFilterChip"), exports);
__exportStar(require("./gridFilterDropZone"), exports);
__exportStar(require("./gridFilterHierarchyChip"), exports);
__exportStar(require("./gridFilterValuesChip"), exports);
__exportStar(require("./gridIndicatorDropZone"), exports);
__exportStar(require("./gridIndicatorMeasureChip"), exports);
__exportStar(require("./gridRowsChip"), exports);
__exportStar(require("./gridRowsDropZone"), exports);
__exportStar(require("./gridRowsHierarchyChip"), exports);
__exportStar(require("./gridRowsValuesChip"), exports);
__exportStar(require("./gridSizeDropZone"), exports);
__exportStar(require("./gridSizeMeasureChip"), exports);
__exportStar(require("./gridTooltipChip"), exports);
__exportStar(require("./gridTooltipDropZone"), exports);
__exportStar(require("./gridTooltipHierarchyChip"), exports);
__exportStar(require("./gridTooltipMeasureChip"), exports);
__exportStar(require("./gridValuesDropZone"), exports);
__exportStar(require("./gridValuesMeasureChip"), exports);
__exportStar(require("./gridVisual"), exports);
__exportStar(require("./hideMemberType"), exports);
__exportStar(require("./hierarchyCategory"), exports);
__exportStar(require("./hierarchyElementSelection"), exports);
__exportStar(require("./hierarchyMeasureSecurity"), exports);
__exportStar(require("./hierarchyMeasureSecurityApiObject"), exports);
__exportStar(require("./hierarchyOverlayData"), exports);
__exportStar(require("./hierarchyOverlayProperty"), exports);
__exportStar(require("./hierarchyOverlayToDeleteData"), exports);
__exportStar(require("./hierarchyType"), exports);
__exportStar(require("./hubApiObject"), exports);
__exportStar(require("./importApiResultObject"), exports);
__exportStar(require("./importMaterializedModelObject"), exports);
__exportStar(require("./isolationMode"), exports);
__exportStar(require("./itemId"), exports);
__exportStar(require("./itemParentApiData"), exports);
__exportStar(require("./itemRolePair"), exports);
__exportStar(require("./itemRolesForRemoval"), exports);
__exportStar(require("./itemRolesToBeAdded"), exports);
__exportStar(require("./itemType"), exports);
__exportStar(require("./itemsForFavorites"), exports);
__exportStar(require("./itemsToCopy"), exports);
__exportStar(require("./itemsToMove"), exports);
__exportStar(require("./joinType"), exports);
__exportStar(require("./kpiAttributeType"), exports);
__exportStar(require("./languageType"), exports);
__exportStar(require("./ldapGroupDetails"), exports);
__exportStar(require("./ldapGroupIdentifier"), exports);
__exportStar(require("./ldapSearchObject"), exports);
__exportStar(require("./ldapSearchType"), exports);
__exportStar(require("./ldapUserObject"), exports);
__exportStar(require("./ldapUsersSearchObject"), exports);
__exportStar(require("./licenseCountObject"), exports);
__exportStar(require("./licenseStatus"), exports);
__exportStar(require("./listData"), exports);
__exportStar(require("./mSOlapProperties"), exports);
__exportStar(require("./mapColorChip"), exports);
__exportStar(require("./mapColorDropZone"), exports);
__exportStar(require("./mapColorHierarchyChip"), exports);
__exportStar(require("./mapColorMeasureChip"), exports);
__exportStar(require("./mapDetailsDropZone"), exports);
__exportStar(require("./mapDetailsHierarchyChip"), exports);
__exportStar(require("./mapFilterDropZone"), exports);
__exportStar(require("./mapFilterHierarchyChip"), exports);
__exportStar(require("./mapLocationChip"), exports);
__exportStar(require("./mapLocationDropZone"), exports);
__exportStar(require("./mapLocationHierarchyChip"), exports);
__exportStar(require("./mapLocationMeasureChip"), exports);
__exportStar(require("./mapMotionDropZone"), exports);
__exportStar(require("./mapMotionHierarchyChip"), exports);
__exportStar(require("./mapSizeDropZone"), exports);
__exportStar(require("./mapSizeMeasureChip"), exports);
__exportStar(require("./mapTooltipChip"), exports);
__exportStar(require("./mapTooltipDropZone"), exports);
__exportStar(require("./mapTooltipHierarchyChip"), exports);
__exportStar(require("./mapTooltipMeasureChip"), exports);
__exportStar(require("./mapVisual"), exports);
__exportStar(require("./mapVisualType"), exports);
__exportStar(require("./maskingMethodType"), exports);
__exportStar(require("./masterFlowErrorType"), exports);
__exportStar(require("./masterFlowFindDataSourceObject"), exports);
__exportStar(require("./masterFlowModelNameObject"), exports);
__exportStar(require("./masterFlowOtherObject"), exports);
__exportStar(require("./masterFlowProgressResult"), exports);
__exportStar(require("./masterFlowSchemasObject"), exports);
__exportStar(require("./masterFlowSourceConnectionObject"), exports);
__exportStar(require("./masterFlowSourceObject"), exports);
__exportStar(require("./masterFlowTargetConnectionObject"), exports);
__exportStar(require("./masterFlowTargetObject"), exports);
__exportStar(require("./masterFlowUpdatedVariableResult"), exports);
__exportStar(require("./masterFlowValidationResult"), exports);
__exportStar(require("./masterFlowVariableConnectionObject"), exports);
__exportStar(require("./masterFlowVariableObject"), exports);
__exportStar(require("./masterFlowVariableValueObject"), exports);
__exportStar(require("./masterFlowVariablesResult"), exports);
__exportStar(require("./masterFlowVariablesValueObject"), exports);
__exportStar(require("./masterNodeError"), exports);
__exportStar(require("./materializedItemObject"), exports);
__exportStar(require("./materializedItemType"), exports);
__exportStar(require("./materializedRoleAssignmentType"), exports);
__exportStar(require("./measureFormat"), exports);
__exportStar(require("./measureGroup"), exports);
__exportStar(require("./measureMapOptions"), exports);
__exportStar(require("./measureOverlayData"), exports);
__exportStar(require("./measureOverlayProperty"), exports);
__exportStar(require("./measureOverlayToDeleteData"), exports);
__exportStar(require("./memberDataApi"), exports);
__exportStar(require("./membersSecurity"), exports);
__exportStar(require("./membersSecurityApiObject"), exports);
__exportStar(require("./metaDataTranslation"), exports);
__exportStar(require("./metadataDisplayType"), exports);
__exportStar(require("./modelAttributeType"), exports);
__exportStar(require("./modelConnection"), exports);
__exportStar(require("./modelDataCatalog"), exports);
__exportStar(require("./modelDataFlowSourceInfo"), exports);
__exportStar(require("./modelProcessDateObject"), exports);
__exportStar(require("./modelProcessDateResult"), exports);
__exportStar(require("./modelRecognitionObject"), exports);
__exportStar(require("./modelScheduleOnDemandObject"), exports);
__exportStar(require("./modelScheduleOnDemandResult"), exports);
__exportStar(require("./modelSyncColumnsSettings"), exports);
__exportStar(require("./modelingAggregationMapping"), exports);
__exportStar(require("./modelingColumn"), exports);
__exportStar(require("./modelingColumnCategories"), exports);
__exportStar(require("./modelingColumnType"), exports);
__exportStar(require("./modelingConfigTranslation"), exports);
__exportStar(require("./modelingFolderTranslations"), exports);
__exportStar(require("./modelingHierarchy"), exports);
__exportStar(require("./modelingHierarchyLevel"), exports);
__exportStar(require("./modelingKPI"), exports);
__exportStar(require("./modelingKPIAllOf"), exports);
__exportStar(require("./modelingMeasure"), exports);
__exportStar(require("./modelingModel"), exports);
__exportStar(require("./modelingProperty"), exports);
__exportStar(require("./modelingRelationship"), exports);
__exportStar(require("./modelingRelationshipColumnPair"), exports);
__exportStar(require("./modelingServerInfo"), exports);
__exportStar(require("./modelingTable"), exports);
__exportStar(require("./modelingTableType"), exports);
__exportStar(require("./modelingTranslation"), exports);
__exportStar(require("./modifiedItemsResult"), exports);
__exportStar(require("./msOlapConnectionType"), exports);
__exportStar(require("./newFolderApiData"), exports);
__exportStar(require("./nlpQueryExportData"), exports);
__exportStar(require("./notificationIndicatorsResult"), exports);
__exportStar(require("./oauthDataSourceSettings"), exports);
__exportStar(require("./odbcDirectQueryOptions"), exports);
__exportStar(require("./openIdAuthType"), exports);
__exportStar(require("./operatorType"), exports);
__exportStar(require("./paperType"), exports);
__exportStar(require("./parentChildOrphanHandlingType"), exports);
__exportStar(require("./parentChildRollupType"), exports);
__exportStar(require("./pieApiObject"), exports);
__exportStar(require("./printingComponentType"), exports);
__exportStar(require("./printingOutputType"), exports);
__exportStar(require("./printingSummaryLog"), exports);
__exportStar(require("./printingSummaryLogHolder"), exports);
__exportStar(require("./printingSummaryLogHolderAllOf"), exports);
__exportStar(require("./proPermissionBitIndex"), exports);
__exportStar(require("./proPermissions"), exports);
__exportStar(require("./proProfileApiData"), exports);
__exportStar(require("./profileRolesData"), exports);
__exportStar(require("./pulseClientData"), exports);
__exportStar(require("./pyramidContentItem"), exports);
__exportStar(require("./pyramidItemIdentifier"), exports);
__exportStar(require("./pyramidViewUserObject"), exports);
__exportStar(require("./queryCacheMode"), exports);
__exportStar(require("./queryExportData"), exports);
__exportStar(require("./queryLog"), exports);
__exportStar(require("./queryOptions"), exports);
__exportStar(require("./queryTotalPosition"), exports);
__exportStar(require("./queryTotalSettings"), exports);
__exportStar(require("./relatedItemData"), exports);
__exportStar(require("./renameItemApiData"), exports);
__exportStar(require("./roleAdGroupsModifyObject"), exports);
__exportStar(require("./roleAssignmentType"), exports);
__exportStar(require("./roleData"), exports);
__exportStar(require("./roleMinimalData"), exports);
__exportStar(require("./roleToItemApiData"), exports);
__exportStar(require("./rolesInItemRemovalObject"), exports);
__exportStar(require("./rootFolderType"), exports);
__exportStar(require("./sapBwServerConnectionType"), exports);
__exportStar(require("./scatterColorChip"), exports);
__exportStar(require("./scatterColorDropZone"), exports);
__exportStar(require("./scatterColorHierarchyChip"), exports);
__exportStar(require("./scatterColorMeasureChip"), exports);
__exportStar(require("./scatterDetailsDropZone"), exports);
__exportStar(require("./scatterDetailsHierarchyChip"), exports);
__exportStar(require("./scatterFilterChip"), exports);
__exportStar(require("./scatterFilterDropZone"), exports);
__exportStar(require("./scatterFilterHierarchyChip"), exports);
__exportStar(require("./scatterFilterValuesChip"), exports);
__exportStar(require("./scatterLabelsChip"), exports);
__exportStar(require("./scatterLabelsDropZone"), exports);
__exportStar(require("./scatterLabelsHierarchyChip"), exports);
__exportStar(require("./scatterLabelsMeasureChip"), exports);
__exportStar(require("./scatterMotionDropZone"), exports);
__exportStar(require("./scatterMotionHierarchyChip"), exports);
__exportStar(require("./scatterShapeChip"), exports);
__exportStar(require("./scatterShapeDropZone"), exports);
__exportStar(require("./scatterShapeHierarchyChip"), exports);
__exportStar(require("./scatterShapeMeasureChip"), exports);
__exportStar(require("./scatterSizeDropZone"), exports);
__exportStar(require("./scatterSizeMeasureChip"), exports);
__exportStar(require("./scatterTooltipChip"), exports);
__exportStar(require("./scatterTooltipDropZone"), exports);
__exportStar(require("./scatterTooltipHierarchyChip"), exports);
__exportStar(require("./scatterTooltipMeasureChip"), exports);
__exportStar(require("./scatterTrellisHorizontalChip"), exports);
__exportStar(require("./scatterTrellisHorizontalDropZone"), exports);
__exportStar(require("./scatterTrellisHorizontalHierarchyChip"), exports);
__exportStar(require("./scatterTrellisHorizontalValuesChip"), exports);
__exportStar(require("./scatterTrellisVerticalChip"), exports);
__exportStar(require("./scatterTrellisVerticalDropZone"), exports);
__exportStar(require("./scatterTrellisVerticalHierarchyChip"), exports);
__exportStar(require("./scatterTrellisVerticalValuesChip"), exports);
__exportStar(require("./scatterVisual"), exports);
__exportStar(require("./scatterVisualType"), exports);
__exportStar(require("./scatterXValuesDropZone"), exports);
__exportStar(require("./scatterXValuesMeasureChip"), exports);
__exportStar(require("./scatterYValuesDropZone"), exports);
__exportStar(require("./scatterYValuesMeasureChip"), exports);
__exportStar(require("./scheduleDataType"), exports);
__exportStar(require("./scheduleSearchCriteria"), exports);
__exportStar(require("./scheduleStatus"), exports);
__exportStar(require("./scheduleType"), exports);
__exportStar(require("./scheduleViewObject"), exports);
__exportStar(require("./scientistPermissionBitIndex"), exports);
__exportStar(require("./scientistPermissions"), exports);
__exportStar(require("./scientistProfileApiData"), exports);
__exportStar(require("./searchAdGroupUsersData"), exports);
__exportStar(require("./searchAdUserGroupsData"), exports);
__exportStar(require("./searchCriteria"), exports);
__exportStar(require("./searchMatchType"), exports);
__exportStar(require("./searchRootFolderType"), exports);
__exportStar(require("./securityType"), exports);
__exportStar(require("./segmentColorChip"), exports);
__exportStar(require("./segmentColorDropZone"), exports);
__exportStar(require("./segmentColorHierarchyChip"), exports);
__exportStar(require("./segmentColorMeasureChip"), exports);
__exportStar(require("./segmentDetailsDropZone"), exports);
__exportStar(require("./segmentDetailsHierarchyChip"), exports);
__exportStar(require("./segmentFilterChip"), exports);
__exportStar(require("./segmentFilterDropZone"), exports);
__exportStar(require("./segmentFilterHierarchyChip"), exports);
__exportStar(require("./segmentFilterValuesChip"), exports);
__exportStar(require("./segmentLabelsChip"), exports);
__exportStar(require("./segmentLabelsDropZone"), exports);
__exportStar(require("./segmentLabelsHierarchyChip"), exports);
__exportStar(require("./segmentLabelsMeasureChip"), exports);
__exportStar(require("./segmentMotionDropZone"), exports);
__exportStar(require("./segmentMotionHierarchyChip"), exports);
__exportStar(require("./segmentSizeDropZone"), exports);
__exportStar(require("./segmentSizeMeasureChip"), exports);
__exportStar(require("./segmentTooltipChip"), exports);
__exportStar(require("./segmentTooltipDropZone"), exports);
__exportStar(require("./segmentTooltipHierarchyChip"), exports);
__exportStar(require("./segmentTooltipMeasureChip"), exports);
__exportStar(require("./segmentTrellisHorizontalChip"), exports);
__exportStar(require("./segmentTrellisHorizontalDropZone"), exports);
__exportStar(require("./segmentTrellisHorizontalHierarchyChip"), exports);
__exportStar(require("./segmentTrellisHorizontalValuesChip"), exports);
__exportStar(require("./segmentTrellisVerticalChip"), exports);
__exportStar(require("./segmentTrellisVerticalDropZone"), exports);
__exportStar(require("./segmentTrellisVerticalHierarchyChip"), exports);
__exportStar(require("./segmentTrellisVerticalValuesChip"), exports);
__exportStar(require("./segmentValuesDropZone"), exports);
__exportStar(require("./segmentValuesMeasureChip"), exports);
__exportStar(require("./segmentVisual"), exports);
__exportStar(require("./segmentVisualType"), exports);
__exportStar(require("./serverAuthenticationMethod"), exports);
__exportStar(require("./serverData"), exports);
__exportStar(require("./serverEffectiveUserName"), exports);
__exportStar(require("./serviceStatus"), exports);
__exportStar(require("./simpleModifierResult"), exports);
__exportStar(require("./sizeDropZoneOptions"), exports);
__exportStar(require("./sizeMathFunction"), exports);
__exportStar(require("./sparkTransportMode"), exports);
__exportStar(require("./syntaxType"), exports);
__exportStar(require("./tabularColorChip"), exports);
__exportStar(require("./tabularColorDropZone"), exports);
__exportStar(require("./tabularColorHierarchyChip"), exports);
__exportStar(require("./tabularColorMeasureChip"), exports);
__exportStar(require("./tabularColsChip"), exports);
__exportStar(require("./tabularColsDropZone"), exports);
__exportStar(require("./tabularColsHierarchyChip"), exports);
__exportStar(require("./tabularColsMeasureChip"), exports);
__exportStar(require("./tabularFilterDropZone"), exports);
__exportStar(require("./tabularFilterHierarchyChip"), exports);
__exportStar(require("./tabularSizeDropZone"), exports);
__exportStar(require("./tabularSizeMeasureChip"), exports);
__exportStar(require("./tabularTooltipChip"), exports);
__exportStar(require("./tabularTooltipDropZone"), exports);
__exportStar(require("./tabularTooltipHierarchyChip"), exports);
__exportStar(require("./tabularTooltipMeasureChip"), exports);
__exportStar(require("./tabularVisual"), exports);
__exportStar(require("./tagData"), exports);
__exportStar(require("./tagType"), exports);
__exportStar(require("./tagUsageApiData"), exports);
__exportStar(require("./targetParameter"), exports);
__exportStar(require("./taskStatus"), exports);
__exportStar(require("./taskSummary"), exports);
__exportStar(require("./taskUserApiData"), exports);
__exportStar(require("./taskViewData"), exports);
__exportStar(require("./tenantLicenseTypeData"), exports);
__exportStar(require("./tenantObject"), exports);
__exportStar(require("./tenantSettings"), exports);
__exportStar(require("./tenantUsersGetObject"), exports);
__exportStar(require("./themeApiObject"), exports);
__exportStar(require("./themeListObject"), exports);
__exportStar(require("./themeToItemsApiObject"), exports);
__exportStar(require("./toggleUserApiData"), exports);
__exportStar(require("./totalsSettings"), exports);
__exportStar(require("./updateSchemaValidation"), exports);
__exportStar(require("./updateTenantSeatsObject"), exports);
__exportStar(require("./updateUserAdObject"), exports);
__exportStar(require("./updateUserDbObject"), exports);
__exportStar(require("./updateUserOpenIdObject"), exports);
__exportStar(require("./updateUserSamlObject"), exports);
__exportStar(require("./userCredentials"), exports);
__exportStar(require("./userOpenIdCredentials"), exports);
__exportStar(require("./userPhone"), exports);
__exportStar(require("./userProfileType"), exports);
__exportStar(require("./userRolesData"), exports);
__exportStar(require("./userSamlCredentials"), exports);
__exportStar(require("./userStatusID"), exports);
__exportStar(require("./userTokenCredentials"), exports);
__exportStar(require("./validRootFolderType"), exports);
__exportStar(require("./valuesDropZoneOptions"), exports);
__exportStar(require("./variableType"), exports);
__exportStar(require("./viewerPermissionBitIndex"), exports);
__exportStar(require("./viewerPermissions"), exports);
__exportStar(require("./viewerProfileApiData"), exports);
__exportStar(require("./visuals"), exports);
var accessType_1 = require("./accessType");
var addHierarchyOverlayApiObject_1 = require("./addHierarchyOverlayApiObject");
var addMeasureOverlayApiObject_1 = require("./addMeasureOverlayApiObject");
var addUserRoleData_1 = require("./addUserRoleData");
var addUsersRoleData_1 = require("./addUsersRoleData");
var additionalServerProperties_1 = require("./additionalServerProperties");
var adminMultiTenantData_1 = require("./adminMultiTenantData");
var adminType_1 = require("./adminType");
var adminTypeApiData_1 = require("./adminTypeApiData");
var aggregationType_1 = require("./aggregationType");
var analystPermissionBitIndex_1 = require("./analystPermissionBitIndex");
var analystProfileApiData_1 = require("./analystProfileApiData");
var analyticsPermissions_1 = require("./analyticsPermissions");
var apiResponseFormat_1 = require("./apiResponseFormat");
var apiResultLicenseStatus_1 = require("./apiResultLicenseStatus");
var apiResultTaskStatus_1 = require("./apiResultTaskStatus");
var attributeTranslation_1 = require("./attributeTranslation");
var axisTotalsType_1 = require("./axisTotalsType");
var bulkWritingType_1 = require("./bulkWritingType");
var bwDatabaseListType_1 = require("./bwDatabaseListType");
var bwInfoAreaTreeViewType_1 = require("./bwInfoAreaTreeViewType");
var cartesianBarVisualType_1 = require("./cartesianBarVisualType");
var cartesianCategoriesDropZone_1 = require("./cartesianCategoriesDropZone");
var cartesianCategoriesHierarchyChip_1 = require("./cartesianCategoriesHierarchyChip");
var cartesianColorChip_1 = require("./cartesianColorChip");
var cartesianColorDropZone_1 = require("./cartesianColorDropZone");
var cartesianColorHierarchyChip_1 = require("./cartesianColorHierarchyChip");
var cartesianColorMeasureChip_1 = require("./cartesianColorMeasureChip");
var cartesianColumnVisualType_1 = require("./cartesianColumnVisualType");
var cartesianFilterChip_1 = require("./cartesianFilterChip");
var cartesianFilterDropZone_1 = require("./cartesianFilterDropZone");
var cartesianFilterHierarchyChip_1 = require("./cartesianFilterHierarchyChip");
var cartesianFilterValuesChip_1 = require("./cartesianFilterValuesChip");
var cartesianLabelsChip_1 = require("./cartesianLabelsChip");
var cartesianLabelsDropZone_1 = require("./cartesianLabelsDropZone");
var cartesianLabelsHierarchyChip_1 = require("./cartesianLabelsHierarchyChip");
var cartesianLabelsMeasureChip_1 = require("./cartesianLabelsMeasureChip");
var cartesianLineVisualType_1 = require("./cartesianLineVisualType");
var cartesianMotionDropZone_1 = require("./cartesianMotionDropZone");
var cartesianMotionHierarchyChip_1 = require("./cartesianMotionHierarchyChip");
var cartesianShapeChip_1 = require("./cartesianShapeChip");
var cartesianShapeDropZone_1 = require("./cartesianShapeDropZone");
var cartesianShapeHierarchyChip_1 = require("./cartesianShapeHierarchyChip");
var cartesianShapeMeasureChip_1 = require("./cartesianShapeMeasureChip");
var cartesianSizeDropZone_1 = require("./cartesianSizeDropZone");
var cartesianSizeMeasureChip_1 = require("./cartesianSizeMeasureChip");
var cartesianStackedBarVisualType_1 = require("./cartesianStackedBarVisualType");
var cartesianStackedColumnVisualType_1 = require("./cartesianStackedColumnVisualType");
var cartesianTooltipChip_1 = require("./cartesianTooltipChip");
var cartesianTooltipDropZone_1 = require("./cartesianTooltipDropZone");
var cartesianTooltipHierarchyChip_1 = require("./cartesianTooltipHierarchyChip");
var cartesianTooltipMeasureChip_1 = require("./cartesianTooltipMeasureChip");
var cartesianTrellisHorizontalChip_1 = require("./cartesianTrellisHorizontalChip");
var cartesianTrellisHorizontalDropZone_1 = require("./cartesianTrellisHorizontalDropZone");
var cartesianTrellisHorizontalHierarchyChip_1 = require("./cartesianTrellisHorizontalHierarchyChip");
var cartesianTrellisHorizontalValuesChip_1 = require("./cartesianTrellisHorizontalValuesChip");
var cartesianTrellisVerticalChip_1 = require("./cartesianTrellisVerticalChip");
var cartesianTrellisVerticalDropZone_1 = require("./cartesianTrellisVerticalDropZone");
var cartesianTrellisVerticalHierarchyChip_1 = require("./cartesianTrellisVerticalHierarchyChip");
var cartesianTrellisVerticalValuesChip_1 = require("./cartesianTrellisVerticalValuesChip");
var cartesianValuesDropZone_1 = require("./cartesianValuesDropZone");
var cartesianValuesMeasureChip_1 = require("./cartesianValuesMeasureChip");
var cartesianValuesVisualTypes_1 = require("./cartesianValuesVisualTypes");
var cartesianVisual_1 = require("./cartesianVisual");
var cartesianVisualType_1 = require("./cartesianVisualType");
var changeItemDescriptionData_1 = require("./changeItemDescriptionData");
var changeUserLicenseObject_1 = require("./changeUserLicenseObject");
var clashDefaultOption_1 = require("./clashDefaultOption");
var clientLicenseType_1 = require("./clientLicenseType");
var colorMathFunction_1 = require("./colorMathFunction");
var componentLog_1 = require("./componentLog");
var conditionConjunctionType_1 = require("./conditionConjunctionType");
var connStringDscApiObject_1 = require("./connStringDscApiObject");
var connectedItemsSearchCriteria_1 = require("./connectedItemsSearchCriteria");
var connectionSearchCriteria_1 = require("./connectionSearchCriteria");
var connectionStringData_1 = require("./connectionStringData");
var connectionStringProperties_1 = require("./connectionStringProperties");
var connectionStringType_1 = require("./connectionStringType");
var contentItemObject_1 = require("./contentItemObject");
var contentSearchParamsObject_1 = require("./contentSearchParamsObject");
var contentType_1 = require("./contentType");
var contentTypeObject_1 = require("./contentTypeObject");
var createUserAdObject_1 = require("./createUserAdObject");
var createUserDbObject_1 = require("./createUserDbObject");
var createUserOpenIdObject_1 = require("./createUserOpenIdObject");
var createUserSamlObject_1 = require("./createUserSamlObject");
var createdThemeResult_1 = require("./createdThemeResult");
var csvDelimiter_1 = require("./csvDelimiter");
var cubeAuthMethod_1 = require("./cubeAuthMethod");
var customRootCAType_1 = require("./customRootCAType");
var dataBaseRecognitionObject_1 = require("./dataBaseRecognitionObject");
var dataCatalogDimension_1 = require("./dataCatalogDimension");
var dataCatalogHierarchy_1 = require("./dataCatalogHierarchy");
var dataCatalogHierarchyLevel_1 = require("./dataCatalogHierarchyLevel");
var dataCatalogItem_1 = require("./dataCatalogItem");
var dataCatalogMeasure_1 = require("./dataCatalogMeasure");
var dataCatalogModelMetadata_1 = require("./dataCatalogModelMetadata");
var dataCatalogProperty_1 = require("./dataCatalogProperty");
var dataCatalogUpdateData_1 = require("./dataCatalogUpdateData");
var dataFlowModelType_1 = require("./dataFlowModelType");
var dataSourceTableResult_1 = require("./dataSourceTableResult");
var dataSourceUsedTablesResult_1 = require("./dataSourceUsedTablesResult");
var dataType_1 = require("./dataType");
var deleteHierarchyOverlayApiObject_1 = require("./deleteHierarchyOverlayApiObject");
var deleteMeasureOverlayApiObject_1 = require("./deleteMeasureOverlayApiObject");
var deleteTenantApiData_1 = require("./deleteTenantApiData");
var discoverData_1 = require("./discoverData");
var discoverDataCatalog_1 = require("./discoverDataCatalog");
var distributionLog_1 = require("./distributionLog");
var distributionType_1 = require("./distributionType");
var domainAdminPermissionAPIObject_1 = require("./domainAdminPermissionAPIObject");
var domainAdminPermissionType_1 = require("./domainAdminPermissionType");
var domainAdminPermissions_1 = require("./domainAdminPermissions");
var domainSecurityObject_1 = require("./domainSecurityObject");
var dscApiData_1 = require("./dscApiData");
var elementSelectionData_1 = require("./elementSelectionData");
var elementSelectionDataType_1 = require("./elementSelectionDataType");
var enumerationOutput_1 = require("./enumerationOutput");
var errorMessage_1 = require("./errorMessage");
var etlSyncModelColumnsType_1 = require("./etlSyncModelColumnsType");
var etlTaskSummary_1 = require("./etlTaskSummary");
var etlTaskSummaryAllOf_1 = require("./etlTaskSummaryAllOf");
var etlValidationMessage_1 = require("./etlValidationMessage");
var executeMasterFlowObject_1 = require("./executeMasterFlowObject");
var executeMasterFlowResult_1 = require("./executeMasterFlowResult");
var executeScheduleApiData_1 = require("./executeScheduleApiData");
var executionSettings_1 = require("./executionSettings");
var executionViewData_1 = require("./executionViewData");
var exportContentApiData_1 = require("./exportContentApiData");
var exportData_1 = require("./exportData");
var exportOptions_1 = require("./exportOptions");
var externalParameters_1 = require("./externalParameters");
var filterHierarchyType_1 = require("./filterHierarchyType");
var filterParameter_1 = require("./filterParameter");
var filterValuesType_1 = require("./filterValuesType");
var firstWorkday_1 = require("./firstWorkday");
var folderTenantObject_1 = require("./folderTenantObject");
var formulaData_1 = require("./formulaData");
var ftpDataMode_1 = require("./ftpDataMode");
var ftpSecurityType_1 = require("./ftpSecurityType");
var ftpSettings_1 = require("./ftpSettings");
var gaType_1 = require("./gaType");
var getItemParamsObject_1 = require("./getItemParamsObject");
var getOverlaySecurityObject_1 = require("./getOverlaySecurityObject");
var gridColorChip_1 = require("./gridColorChip");
var gridColorDropZone_1 = require("./gridColorDropZone");
var gridColorHierarchyChip_1 = require("./gridColorHierarchyChip");
var gridColorMeasureChip_1 = require("./gridColorMeasureChip");
var gridColorOption_1 = require("./gridColorOption");
var gridColsChip_1 = require("./gridColsChip");
var gridColsDropZone_1 = require("./gridColsDropZone");
var gridColsHierarchyChip_1 = require("./gridColsHierarchyChip");
var gridColsValuesChip_1 = require("./gridColsValuesChip");
var gridFilterChip_1 = require("./gridFilterChip");
var gridFilterDropZone_1 = require("./gridFilterDropZone");
var gridFilterHierarchyChip_1 = require("./gridFilterHierarchyChip");
var gridFilterValuesChip_1 = require("./gridFilterValuesChip");
var gridIndicatorDropZone_1 = require("./gridIndicatorDropZone");
var gridIndicatorMeasureChip_1 = require("./gridIndicatorMeasureChip");
var gridRowsChip_1 = require("./gridRowsChip");
var gridRowsDropZone_1 = require("./gridRowsDropZone");
var gridRowsHierarchyChip_1 = require("./gridRowsHierarchyChip");
var gridRowsValuesChip_1 = require("./gridRowsValuesChip");
var gridSizeDropZone_1 = require("./gridSizeDropZone");
var gridSizeMeasureChip_1 = require("./gridSizeMeasureChip");
var gridTooltipChip_1 = require("./gridTooltipChip");
var gridTooltipDropZone_1 = require("./gridTooltipDropZone");
var gridTooltipHierarchyChip_1 = require("./gridTooltipHierarchyChip");
var gridTooltipMeasureChip_1 = require("./gridTooltipMeasureChip");
var gridValuesDropZone_1 = require("./gridValuesDropZone");
var gridValuesMeasureChip_1 = require("./gridValuesMeasureChip");
var gridVisual_1 = require("./gridVisual");
var hideMemberType_1 = require("./hideMemberType");
var hierarchyCategory_1 = require("./hierarchyCategory");
var hierarchyElementSelection_1 = require("./hierarchyElementSelection");
var hierarchyMeasureSecurity_1 = require("./hierarchyMeasureSecurity");
var hierarchyMeasureSecurityApiObject_1 = require("./hierarchyMeasureSecurityApiObject");
var hierarchyOverlayData_1 = require("./hierarchyOverlayData");
var hierarchyOverlayProperty_1 = require("./hierarchyOverlayProperty");
var hierarchyOverlayToDeleteData_1 = require("./hierarchyOverlayToDeleteData");
var hierarchyType_1 = require("./hierarchyType");
var hubApiObject_1 = require("./hubApiObject");
var importApiResultObject_1 = require("./importApiResultObject");
var importMaterializedModelObject_1 = require("./importMaterializedModelObject");
var isolationMode_1 = require("./isolationMode");
var itemId_1 = require("./itemId");
var itemParentApiData_1 = require("./itemParentApiData");
var itemRolePair_1 = require("./itemRolePair");
var itemRolesForRemoval_1 = require("./itemRolesForRemoval");
var itemRolesToBeAdded_1 = require("./itemRolesToBeAdded");
var itemType_1 = require("./itemType");
var itemsForFavorites_1 = require("./itemsForFavorites");
var itemsToCopy_1 = require("./itemsToCopy");
var itemsToMove_1 = require("./itemsToMove");
var joinType_1 = require("./joinType");
var kpiAttributeType_1 = require("./kpiAttributeType");
var languageType_1 = require("./languageType");
var ldapGroupDetails_1 = require("./ldapGroupDetails");
var ldapGroupIdentifier_1 = require("./ldapGroupIdentifier");
var ldapSearchObject_1 = require("./ldapSearchObject");
var ldapSearchType_1 = require("./ldapSearchType");
var ldapUserObject_1 = require("./ldapUserObject");
var ldapUsersSearchObject_1 = require("./ldapUsersSearchObject");
var licenseCountObject_1 = require("./licenseCountObject");
var licenseStatus_1 = require("./licenseStatus");
var listData_1 = require("./listData");
var mSOlapProperties_1 = require("./mSOlapProperties");
var mapColorChip_1 = require("./mapColorChip");
var mapColorDropZone_1 = require("./mapColorDropZone");
var mapColorHierarchyChip_1 = require("./mapColorHierarchyChip");
var mapColorMeasureChip_1 = require("./mapColorMeasureChip");
var mapDetailsDropZone_1 = require("./mapDetailsDropZone");
var mapDetailsHierarchyChip_1 = require("./mapDetailsHierarchyChip");
var mapFilterDropZone_1 = require("./mapFilterDropZone");
var mapFilterHierarchyChip_1 = require("./mapFilterHierarchyChip");
var mapLocationChip_1 = require("./mapLocationChip");
var mapLocationDropZone_1 = require("./mapLocationDropZone");
var mapLocationHierarchyChip_1 = require("./mapLocationHierarchyChip");
var mapLocationMeasureChip_1 = require("./mapLocationMeasureChip");
var mapMotionDropZone_1 = require("./mapMotionDropZone");
var mapMotionHierarchyChip_1 = require("./mapMotionHierarchyChip");
var mapSizeDropZone_1 = require("./mapSizeDropZone");
var mapSizeMeasureChip_1 = require("./mapSizeMeasureChip");
var mapTooltipChip_1 = require("./mapTooltipChip");
var mapTooltipDropZone_1 = require("./mapTooltipDropZone");
var mapTooltipHierarchyChip_1 = require("./mapTooltipHierarchyChip");
var mapTooltipMeasureChip_1 = require("./mapTooltipMeasureChip");
var mapVisual_1 = require("./mapVisual");
var mapVisualType_1 = require("./mapVisualType");
var maskingMethodType_1 = require("./maskingMethodType");
var masterFlowErrorType_1 = require("./masterFlowErrorType");
var masterFlowFindDataSourceObject_1 = require("./masterFlowFindDataSourceObject");
var masterFlowModelNameObject_1 = require("./masterFlowModelNameObject");
var masterFlowOtherObject_1 = require("./masterFlowOtherObject");
var masterFlowProgressResult_1 = require("./masterFlowProgressResult");
var masterFlowSchemasObject_1 = require("./masterFlowSchemasObject");
var masterFlowSourceConnectionObject_1 = require("./masterFlowSourceConnectionObject");
var masterFlowSourceObject_1 = require("./masterFlowSourceObject");
var masterFlowTargetConnectionObject_1 = require("./masterFlowTargetConnectionObject");
var masterFlowTargetObject_1 = require("./masterFlowTargetObject");
var masterFlowUpdatedVariableResult_1 = require("./masterFlowUpdatedVariableResult");
var masterFlowValidationResult_1 = require("./masterFlowValidationResult");
var masterFlowVariableConnectionObject_1 = require("./masterFlowVariableConnectionObject");
var masterFlowVariableObject_1 = require("./masterFlowVariableObject");
var masterFlowVariableValueObject_1 = require("./masterFlowVariableValueObject");
var masterFlowVariablesResult_1 = require("./masterFlowVariablesResult");
var masterFlowVariablesValueObject_1 = require("./masterFlowVariablesValueObject");
var masterNodeError_1 = require("./masterNodeError");
var materializedItemObject_1 = require("./materializedItemObject");
var materializedItemType_1 = require("./materializedItemType");
var materializedRoleAssignmentType_1 = require("./materializedRoleAssignmentType");
var measureFormat_1 = require("./measureFormat");
var measureGroup_1 = require("./measureGroup");
var measureMapOptions_1 = require("./measureMapOptions");
var measureOverlayData_1 = require("./measureOverlayData");
var measureOverlayProperty_1 = require("./measureOverlayProperty");
var measureOverlayToDeleteData_1 = require("./measureOverlayToDeleteData");
var memberDataApi_1 = require("./memberDataApi");
var membersSecurity_1 = require("./membersSecurity");
var membersSecurityApiObject_1 = require("./membersSecurityApiObject");
var metaDataTranslation_1 = require("./metaDataTranslation");
var metadataDisplayType_1 = require("./metadataDisplayType");
var modelAttributeType_1 = require("./modelAttributeType");
var modelConnection_1 = require("./modelConnection");
var modelDataCatalog_1 = require("./modelDataCatalog");
var modelDataFlowSourceInfo_1 = require("./modelDataFlowSourceInfo");
var modelProcessDateObject_1 = require("./modelProcessDateObject");
var modelProcessDateResult_1 = require("./modelProcessDateResult");
var modelRecognitionObject_1 = require("./modelRecognitionObject");
var modelScheduleOnDemandObject_1 = require("./modelScheduleOnDemandObject");
var modelScheduleOnDemandResult_1 = require("./modelScheduleOnDemandResult");
var modelSyncColumnsSettings_1 = require("./modelSyncColumnsSettings");
var modelingAggregationMapping_1 = require("./modelingAggregationMapping");
var modelingColumn_1 = require("./modelingColumn");
var modelingColumnCategories_1 = require("./modelingColumnCategories");
var modelingColumnType_1 = require("./modelingColumnType");
var modelingConfigTranslation_1 = require("./modelingConfigTranslation");
var modelingFolderTranslations_1 = require("./modelingFolderTranslations");
var modelingHierarchy_1 = require("./modelingHierarchy");
var modelingHierarchyLevel_1 = require("./modelingHierarchyLevel");
var modelingKPI_1 = require("./modelingKPI");
var modelingKPIAllOf_1 = require("./modelingKPIAllOf");
var modelingMeasure_1 = require("./modelingMeasure");
var modelingModel_1 = require("./modelingModel");
var modelingProperty_1 = require("./modelingProperty");
var modelingRelationship_1 = require("./modelingRelationship");
var modelingRelationshipColumnPair_1 = require("./modelingRelationshipColumnPair");
var modelingServerInfo_1 = require("./modelingServerInfo");
var modelingTable_1 = require("./modelingTable");
var modelingTableType_1 = require("./modelingTableType");
var modelingTranslation_1 = require("./modelingTranslation");
var modifiedItemsResult_1 = require("./modifiedItemsResult");
var msOlapConnectionType_1 = require("./msOlapConnectionType");
var newFolderApiData_1 = require("./newFolderApiData");
var nlpQueryExportData_1 = require("./nlpQueryExportData");
var notificationIndicatorsResult_1 = require("./notificationIndicatorsResult");
var oauthDataSourceSettings_1 = require("./oauthDataSourceSettings");
var odbcDirectQueryOptions_1 = require("./odbcDirectQueryOptions");
var openIdAuthType_1 = require("./openIdAuthType");
var operatorType_1 = require("./operatorType");
var paperType_1 = require("./paperType");
var parentChildOrphanHandlingType_1 = require("./parentChildOrphanHandlingType");
var parentChildRollupType_1 = require("./parentChildRollupType");
var pieApiObject_1 = require("./pieApiObject");
var printingComponentType_1 = require("./printingComponentType");
var printingOutputType_1 = require("./printingOutputType");
var printingSummaryLog_1 = require("./printingSummaryLog");
var printingSummaryLogHolder_1 = require("./printingSummaryLogHolder");
var printingSummaryLogHolderAllOf_1 = require("./printingSummaryLogHolderAllOf");
var proPermissionBitIndex_1 = require("./proPermissionBitIndex");
var proPermissions_1 = require("./proPermissions");
var proProfileApiData_1 = require("./proProfileApiData");
var profileRolesData_1 = require("./profileRolesData");
var pulseClientData_1 = require("./pulseClientData");
var pyramidContentItem_1 = require("./pyramidContentItem");
var pyramidItemIdentifier_1 = require("./pyramidItemIdentifier");
var pyramidViewUserObject_1 = require("./pyramidViewUserObject");
var queryCacheMode_1 = require("./queryCacheMode");
var queryExportData_1 = require("./queryExportData");
var queryLog_1 = require("./queryLog");
var queryOptions_1 = require("./queryOptions");
var queryTotalPosition_1 = require("./queryTotalPosition");
var queryTotalSettings_1 = require("./queryTotalSettings");
var relatedItemData_1 = require("./relatedItemData");
var renameItemApiData_1 = require("./renameItemApiData");
var roleAdGroupsModifyObject_1 = require("./roleAdGroupsModifyObject");
var roleAssignmentType_1 = require("./roleAssignmentType");
var roleData_1 = require("./roleData");
var roleMinimalData_1 = require("./roleMinimalData");
var roleToItemApiData_1 = require("./roleToItemApiData");
var rolesInItemRemovalObject_1 = require("./rolesInItemRemovalObject");
var rootFolderType_1 = require("./rootFolderType");
var sapBwServerConnectionType_1 = require("./sapBwServerConnectionType");
var scatterColorChip_1 = require("./scatterColorChip");
var scatterColorDropZone_1 = require("./scatterColorDropZone");
var scatterColorHierarchyChip_1 = require("./scatterColorHierarchyChip");
var scatterColorMeasureChip_1 = require("./scatterColorMeasureChip");
var scatterDetailsDropZone_1 = require("./scatterDetailsDropZone");
var scatterDetailsHierarchyChip_1 = require("./scatterDetailsHierarchyChip");
var scatterFilterChip_1 = require("./scatterFilterChip");
var scatterFilterDropZone_1 = require("./scatterFilterDropZone");
var scatterFilterHierarchyChip_1 = require("./scatterFilterHierarchyChip");
var scatterFilterValuesChip_1 = require("./scatterFilterValuesChip");
var scatterLabelsChip_1 = require("./scatterLabelsChip");
var scatterLabelsDropZone_1 = require("./scatterLabelsDropZone");
var scatterLabelsHierarchyChip_1 = require("./scatterLabelsHierarchyChip");
var scatterLabelsMeasureChip_1 = require("./scatterLabelsMeasureChip");
var scatterMotionDropZone_1 = require("./scatterMotionDropZone");
var scatterMotionHierarchyChip_1 = require("./scatterMotionHierarchyChip");
var scatterShapeChip_1 = require("./scatterShapeChip");
var scatterShapeDropZone_1 = require("./scatterShapeDropZone");
var scatterShapeHierarchyChip_1 = require("./scatterShapeHierarchyChip");
var scatterShapeMeasureChip_1 = require("./scatterShapeMeasureChip");
var scatterSizeDropZone_1 = require("./scatterSizeDropZone");
var scatterSizeMeasureChip_1 = require("./scatterSizeMeasureChip");
var scatterTooltipChip_1 = require("./scatterTooltipChip");
var scatterTooltipDropZone_1 = require("./scatterTooltipDropZone");
var scatterTooltipHierarchyChip_1 = require("./scatterTooltipHierarchyChip");
var scatterTooltipMeasureChip_1 = require("./scatterTooltipMeasureChip");
var scatterTrellisHorizontalChip_1 = require("./scatterTrellisHorizontalChip");
var scatterTrellisHorizontalDropZone_1 = require("./scatterTrellisHorizontalDropZone");
var scatterTrellisHorizontalHierarchyChip_1 = require("./scatterTrellisHorizontalHierarchyChip");
var scatterTrellisHorizontalValuesChip_1 = require("./scatterTrellisHorizontalValuesChip");
var scatterTrellisVerticalChip_1 = require("./scatterTrellisVerticalChip");
var scatterTrellisVerticalDropZone_1 = require("./scatterTrellisVerticalDropZone");
var scatterTrellisVerticalHierarchyChip_1 = require("./scatterTrellisVerticalHierarchyChip");
var scatterTrellisVerticalValuesChip_1 = require("./scatterTrellisVerticalValuesChip");
var scatterVisual_1 = require("./scatterVisual");
var scatterVisualType_1 = require("./scatterVisualType");
var scatterXValuesDropZone_1 = require("./scatterXValuesDropZone");
var scatterXValuesMeasureChip_1 = require("./scatterXValuesMeasureChip");
var scatterYValuesDropZone_1 = require("./scatterYValuesDropZone");
var scatterYValuesMeasureChip_1 = require("./scatterYValuesMeasureChip");
var scheduleDataType_1 = require("./scheduleDataType");
var scheduleSearchCriteria_1 = require("./scheduleSearchCriteria");
var scheduleStatus_1 = require("./scheduleStatus");
var scheduleType_1 = require("./scheduleType");
var scheduleViewObject_1 = require("./scheduleViewObject");
var scientistPermissionBitIndex_1 = require("./scientistPermissionBitIndex");
var scientistPermissions_1 = require("./scientistPermissions");
var scientistProfileApiData_1 = require("./scientistProfileApiData");
var searchAdGroupUsersData_1 = require("./searchAdGroupUsersData");
var searchAdUserGroupsData_1 = require("./searchAdUserGroupsData");
var searchCriteria_1 = require("./searchCriteria");
var searchMatchType_1 = require("./searchMatchType");
var searchRootFolderType_1 = require("./searchRootFolderType");
var securityType_1 = require("./securityType");
var segmentColorChip_1 = require("./segmentColorChip");
var segmentColorDropZone_1 = require("./segmentColorDropZone");
var segmentColorHierarchyChip_1 = require("./segmentColorHierarchyChip");
var segmentColorMeasureChip_1 = require("./segmentColorMeasureChip");
var segmentDetailsDropZone_1 = require("./segmentDetailsDropZone");
var segmentDetailsHierarchyChip_1 = require("./segmentDetailsHierarchyChip");
var segmentFilterChip_1 = require("./segmentFilterChip");
var segmentFilterDropZone_1 = require("./segmentFilterDropZone");
var segmentFilterHierarchyChip_1 = require("./segmentFilterHierarchyChip");
var segmentFilterValuesChip_1 = require("./segmentFilterValuesChip");
var segmentLabelsChip_1 = require("./segmentLabelsChip");
var segmentLabelsDropZone_1 = require("./segmentLabelsDropZone");
var segmentLabelsHierarchyChip_1 = require("./segmentLabelsHierarchyChip");
var segmentLabelsMeasureChip_1 = require("./segmentLabelsMeasureChip");
var segmentMotionDropZone_1 = require("./segmentMotionDropZone");
var segmentMotionHierarchyChip_1 = require("./segmentMotionHierarchyChip");
var segmentSizeDropZone_1 = require("./segmentSizeDropZone");
var segmentSizeMeasureChip_1 = require("./segmentSizeMeasureChip");
var segmentTooltipChip_1 = require("./segmentTooltipChip");
var segmentTooltipDropZone_1 = require("./segmentTooltipDropZone");
var segmentTooltipHierarchyChip_1 = require("./segmentTooltipHierarchyChip");
var segmentTooltipMeasureChip_1 = require("./segmentTooltipMeasureChip");
var segmentTrellisHorizontalChip_1 = require("./segmentTrellisHorizontalChip");
var segmentTrellisHorizontalDropZone_1 = require("./segmentTrellisHorizontalDropZone");
var segmentTrellisHorizontalHierarchyChip_1 = require("./segmentTrellisHorizontalHierarchyChip");
var segmentTrellisHorizontalValuesChip_1 = require("./segmentTrellisHorizontalValuesChip");
var segmentTrellisVerticalChip_1 = require("./segmentTrellisVerticalChip");
var segmentTrellisVerticalDropZone_1 = require("./segmentTrellisVerticalDropZone");
var segmentTrellisVerticalHierarchyChip_1 = require("./segmentTrellisVerticalHierarchyChip");
var segmentTrellisVerticalValuesChip_1 = require("./segmentTrellisVerticalValuesChip");
var segmentValuesDropZone_1 = require("./segmentValuesDropZone");
var segmentValuesMeasureChip_1 = require("./segmentValuesMeasureChip");
var segmentVisual_1 = require("./segmentVisual");
var segmentVisualType_1 = require("./segmentVisualType");
var serverAuthenticationMethod_1 = require("./serverAuthenticationMethod");
var serverData_1 = require("./serverData");
var serverEffectiveUserName_1 = require("./serverEffectiveUserName");
var serviceStatus_1 = require("./serviceStatus");
var simpleModifierResult_1 = require("./simpleModifierResult");
var sizeDropZoneOptions_1 = require("./sizeDropZoneOptions");
var sizeMathFunction_1 = require("./sizeMathFunction");
var sparkTransportMode_1 = require("./sparkTransportMode");
var syntaxType_1 = require("./syntaxType");
var tabularColorChip_1 = require("./tabularColorChip");
var tabularColorDropZone_1 = require("./tabularColorDropZone");
var tabularColorHierarchyChip_1 = require("./tabularColorHierarchyChip");
var tabularColorMeasureChip_1 = require("./tabularColorMeasureChip");
var tabularColsChip_1 = require("./tabularColsChip");
var tabularColsDropZone_1 = require("./tabularColsDropZone");
var tabularColsHierarchyChip_1 = require("./tabularColsHierarchyChip");
var tabularColsMeasureChip_1 = require("./tabularColsMeasureChip");
var tabularFilterDropZone_1 = require("./tabularFilterDropZone");
var tabularFilterHierarchyChip_1 = require("./tabularFilterHierarchyChip");
var tabularSizeDropZone_1 = require("./tabularSizeDropZone");
var tabularSizeMeasureChip_1 = require("./tabularSizeMeasureChip");
var tabularTooltipChip_1 = require("./tabularTooltipChip");
var tabularTooltipDropZone_1 = require("./tabularTooltipDropZone");
var tabularTooltipHierarchyChip_1 = require("./tabularTooltipHierarchyChip");
var tabularTooltipMeasureChip_1 = require("./tabularTooltipMeasureChip");
var tabularVisual_1 = require("./tabularVisual");
var tagData_1 = require("./tagData");
var tagType_1 = require("./tagType");
var tagUsageApiData_1 = require("./tagUsageApiData");
var targetParameter_1 = require("./targetParameter");
var taskStatus_1 = require("./taskStatus");
var taskSummary_1 = require("./taskSummary");
var taskUserApiData_1 = require("./taskUserApiData");
var taskViewData_1 = require("./taskViewData");
var tenantLicenseTypeData_1 = require("./tenantLicenseTypeData");
var tenantObject_1 = require("./tenantObject");
var tenantSettings_1 = require("./tenantSettings");
var tenantUsersGetObject_1 = require("./tenantUsersGetObject");
var themeApiObject_1 = require("./themeApiObject");
var themeListObject_1 = require("./themeListObject");
var themeToItemsApiObject_1 = require("./themeToItemsApiObject");
var toggleUserApiData_1 = require("./toggleUserApiData");
var totalsSettings_1 = require("./totalsSettings");
var updateSchemaValidation_1 = require("./updateSchemaValidation");
var updateTenantSeatsObject_1 = require("./updateTenantSeatsObject");
var updateUserAdObject_1 = require("./updateUserAdObject");
var updateUserDbObject_1 = require("./updateUserDbObject");
var updateUserOpenIdObject_1 = require("./updateUserOpenIdObject");
var updateUserSamlObject_1 = require("./updateUserSamlObject");
var userCredentials_1 = require("./userCredentials");
var userOpenIdCredentials_1 = require("./userOpenIdCredentials");
var userPhone_1 = require("./userPhone");
var userProfileType_1 = require("./userProfileType");
var userRolesData_1 = require("./userRolesData");
var userSamlCredentials_1 = require("./userSamlCredentials");
var userStatusID_1 = require("./userStatusID");
var userTokenCredentials_1 = require("./userTokenCredentials");
var validRootFolderType_1 = require("./validRootFolderType");
var valuesDropZoneOptions_1 = require("./valuesDropZoneOptions");
var variableType_1 = require("./variableType");
var viewerPermissionBitIndex_1 = require("./viewerPermissionBitIndex");
var viewerPermissions_1 = require("./viewerPermissions");
var viewerProfileApiData_1 = require("./viewerProfileApiData");
var visuals_1 = require("./visuals");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AccessType": accessType_1.AccessType,
    "AdminType": adminType_1.AdminType,
    "AggregationType": aggregationType_1.AggregationType,
    "AnalystPermissionBitIndex": analystPermissionBitIndex_1.AnalystPermissionBitIndex,
    "ApiResponseFormat": apiResponseFormat_1.ApiResponseFormat,
    "AxisTotalsType": axisTotalsType_1.AxisTotalsType,
    "BulkWritingType": bulkWritingType_1.BulkWritingType,
    "BwDatabaseListType": bwDatabaseListType_1.BwDatabaseListType,
    "BwInfoAreaTreeViewType": bwInfoAreaTreeViewType_1.BwInfoAreaTreeViewType,
    "CartesianBarVisualType": cartesianBarVisualType_1.CartesianBarVisualType,
    "CartesianColumnVisualType": cartesianColumnVisualType_1.CartesianColumnVisualType,
    "CartesianLineVisualType": cartesianLineVisualType_1.CartesianLineVisualType,
    "CartesianStackedBarVisualType": cartesianStackedBarVisualType_1.CartesianStackedBarVisualType,
    "CartesianStackedColumnVisualType": cartesianStackedColumnVisualType_1.CartesianStackedColumnVisualType,
    "CartesianVisualType": cartesianVisualType_1.CartesianVisualType,
    "ClashDefaultOption": clashDefaultOption_1.ClashDefaultOption,
    "ClientLicenseType": clientLicenseType_1.ClientLicenseType,
    "ColorMathFunction": colorMathFunction_1.ColorMathFunction,
    "ConditionConjunctionType": conditionConjunctionType_1.ConditionConjunctionType,
    "ConnectionStringType": connectionStringType_1.ConnectionStringType,
    "ContentItemObject": contentItemObject_1.ContentItemObject,
    "ContentType": contentType_1.ContentType,
    "ContentTypeObject": contentTypeObject_1.ContentTypeObject,
    "CsvDelimiter": csvDelimiter_1.CsvDelimiter,
    "CubeAuthMethod": cubeAuthMethod_1.CubeAuthMethod,
    "CustomRootCAType": customRootCAType_1.CustomRootCAType,
    "DataFlowModelType": dataFlowModelType_1.DataFlowModelType,
    "DataType": dataType_1.DataType,
    "DistributionType": distributionType_1.DistributionType,
    "DomainAdminPermissionType": domainAdminPermissionType_1.DomainAdminPermissionType,
    "ElementSelectionDataType": elementSelectionDataType_1.ElementSelectionDataType,
    "EtlSyncModelColumnsType": etlSyncModelColumnsType_1.EtlSyncModelColumnsType,
    "FilterHierarchyType": filterHierarchyType_1.FilterHierarchyType,
    "FilterValuesType": filterValuesType_1.FilterValuesType,
    "FirstWorkday": firstWorkday_1.FirstWorkday,
    "FtpDataMode": ftpDataMode_1.FtpDataMode,
    "FtpSecurityType": ftpSecurityType_1.FtpSecurityType,
    "GaType": gaType_1.GaType,
    "GridColorOption": gridColorOption_1.GridColorOption,
    "HideMemberType": hideMemberType_1.HideMemberType,
    "HierarchyCategory": hierarchyCategory_1.HierarchyCategory,
    "HierarchyOverlayProperty": hierarchyOverlayProperty_1.HierarchyOverlayProperty,
    "HierarchyType": hierarchyType_1.HierarchyType,
    "IsolationMode": isolationMode_1.IsolationMode,
    "ItemType": itemType_1.ItemType,
    "JoinType": joinType_1.JoinType,
    "KpiAttributeType": kpiAttributeType_1.KpiAttributeType,
    "LanguageType": languageType_1.LanguageType,
    "LdapSearchType": ldapSearchType_1.LdapSearchType,
    "LicenseStatus": licenseStatus_1.LicenseStatus,
    "MapVisualType": mapVisualType_1.MapVisualType,
    "MaskingMethodType": maskingMethodType_1.MaskingMethodType,
    "MasterFlowErrorType": masterFlowErrorType_1.MasterFlowErrorType,
    "MaterializedItemType": materializedItemType_1.MaterializedItemType,
    "MaterializedRoleAssignmentType": materializedRoleAssignmentType_1.MaterializedRoleAssignmentType,
    "MeasureFormat": measureFormat_1.MeasureFormat,
    "MeasureMapOptions": measureMapOptions_1.MeasureMapOptions,
    "MeasureOverlayProperty": measureOverlayProperty_1.MeasureOverlayProperty,
    "MetadataDisplayType": metadataDisplayType_1.MetadataDisplayType,
    "ModelAttributeType": modelAttributeType_1.ModelAttributeType,
    "ModelingColumnCategories": modelingColumnCategories_1.ModelingColumnCategories,
    "ModelingColumnType": modelingColumnType_1.ModelingColumnType,
    "ModelingTableType": modelingTableType_1.ModelingTableType,
    "MsOlapConnectionType": msOlapConnectionType_1.MsOlapConnectionType,
    "OpenIdAuthType": openIdAuthType_1.OpenIdAuthType,
    "OperatorType": operatorType_1.OperatorType,
    "PaperType": paperType_1.PaperType,
    "ParentChildOrphanHandlingType": parentChildOrphanHandlingType_1.ParentChildOrphanHandlingType,
    "ParentChildRollupType": parentChildRollupType_1.ParentChildRollupType,
    "PrintingComponentType": printingComponentType_1.PrintingComponentType,
    "PrintingOutputType": printingOutputType_1.PrintingOutputType,
    "ProPermissionBitIndex": proPermissionBitIndex_1.ProPermissionBitIndex,
    "QueryCacheMode": queryCacheMode_1.QueryCacheMode,
    "QueryTotalPosition": queryTotalPosition_1.QueryTotalPosition,
    "RoleAssignmentType": roleAssignmentType_1.RoleAssignmentType,
    "RootFolderType": rootFolderType_1.RootFolderType,
    "SapBwServerConnectionType": sapBwServerConnectionType_1.SapBwServerConnectionType,
    "ScatterVisualType": scatterVisualType_1.ScatterVisualType,
    "ScheduleDataType": scheduleDataType_1.ScheduleDataType,
    "ScheduleStatus": scheduleStatus_1.ScheduleStatus,
    "ScheduleType": scheduleType_1.ScheduleType,
    "ScientistPermissionBitIndex": scientistPermissionBitIndex_1.ScientistPermissionBitIndex,
    "SearchMatchType": searchMatchType_1.SearchMatchType,
    "SearchRootFolderType": searchRootFolderType_1.SearchRootFolderType,
    "SecurityType": securityType_1.SecurityType,
    "SegmentVisualType": segmentVisualType_1.SegmentVisualType,
    "ServerAuthenticationMethod": serverAuthenticationMethod_1.ServerAuthenticationMethod,
    "ServerEffectiveUserName": serverEffectiveUserName_1.ServerEffectiveUserName,
    "ServiceStatus": serviceStatus_1.ServiceStatus,
    "SizeDropZoneOptions": sizeDropZoneOptions_1.SizeDropZoneOptions,
    "SizeMathFunction": sizeMathFunction_1.SizeMathFunction,
    "SparkTransportMode": sparkTransportMode_1.SparkTransportMode,
    "SyntaxType": syntaxType_1.SyntaxType,
    "TagType": tagType_1.TagType,
    "TaskStatus": taskStatus_1.TaskStatus,
    "UpdateSchemaValidation": updateSchemaValidation_1.UpdateSchemaValidation,
    "UserProfileType": userProfileType_1.UserProfileType,
    "UserStatusID": userStatusID_1.UserStatusID,
    "ValidRootFolderType": validRootFolderType_1.ValidRootFolderType,
    "ValuesDropZoneOptions": valuesDropZoneOptions_1.ValuesDropZoneOptions,
    "VariableType": variableType_1.VariableType,
    "ViewerPermissionBitIndex": viewerPermissionBitIndex_1.ViewerPermissionBitIndex,
};
var typeMap = {
    "AddHierarchyOverlayApiObject": addHierarchyOverlayApiObject_1.AddHierarchyOverlayApiObject,
    "AddMeasureOverlayApiObject": addMeasureOverlayApiObject_1.AddMeasureOverlayApiObject,
    "AddUserRoleData": addUserRoleData_1.AddUserRoleData,
    "AddUsersRoleData": addUsersRoleData_1.AddUsersRoleData,
    "AdditionalServerProperties": additionalServerProperties_1.AdditionalServerProperties,
    "AdminMultiTenantData": adminMultiTenantData_1.AdminMultiTenantData,
    "AdminTypeApiData": adminTypeApiData_1.AdminTypeApiData,
    "AnalystProfileApiData": analystProfileApiData_1.AnalystProfileApiData,
    "AnalyticsPermissions": analyticsPermissions_1.AnalyticsPermissions,
    "ApiResultLicenseStatus": apiResultLicenseStatus_1.ApiResultLicenseStatus,
    "ApiResultTaskStatus": apiResultTaskStatus_1.ApiResultTaskStatus,
    "AttributeTranslation": attributeTranslation_1.AttributeTranslation,
    "CartesianCategoriesDropZone": cartesianCategoriesDropZone_1.CartesianCategoriesDropZone,
    "CartesianCategoriesHierarchyChip": cartesianCategoriesHierarchyChip_1.CartesianCategoriesHierarchyChip,
    "CartesianColorChip": cartesianColorChip_1.CartesianColorChip,
    "CartesianColorDropZone": cartesianColorDropZone_1.CartesianColorDropZone,
    "CartesianColorHierarchyChip": cartesianColorHierarchyChip_1.CartesianColorHierarchyChip,
    "CartesianColorMeasureChip": cartesianColorMeasureChip_1.CartesianColorMeasureChip,
    "CartesianFilterChip": cartesianFilterChip_1.CartesianFilterChip,
    "CartesianFilterDropZone": cartesianFilterDropZone_1.CartesianFilterDropZone,
    "CartesianFilterHierarchyChip": cartesianFilterHierarchyChip_1.CartesianFilterHierarchyChip,
    "CartesianFilterValuesChip": cartesianFilterValuesChip_1.CartesianFilterValuesChip,
    "CartesianLabelsChip": cartesianLabelsChip_1.CartesianLabelsChip,
    "CartesianLabelsDropZone": cartesianLabelsDropZone_1.CartesianLabelsDropZone,
    "CartesianLabelsHierarchyChip": cartesianLabelsHierarchyChip_1.CartesianLabelsHierarchyChip,
    "CartesianLabelsMeasureChip": cartesianLabelsMeasureChip_1.CartesianLabelsMeasureChip,
    "CartesianMotionDropZone": cartesianMotionDropZone_1.CartesianMotionDropZone,
    "CartesianMotionHierarchyChip": cartesianMotionHierarchyChip_1.CartesianMotionHierarchyChip,
    "CartesianShapeChip": cartesianShapeChip_1.CartesianShapeChip,
    "CartesianShapeDropZone": cartesianShapeDropZone_1.CartesianShapeDropZone,
    "CartesianShapeHierarchyChip": cartesianShapeHierarchyChip_1.CartesianShapeHierarchyChip,
    "CartesianShapeMeasureChip": cartesianShapeMeasureChip_1.CartesianShapeMeasureChip,
    "CartesianSizeDropZone": cartesianSizeDropZone_1.CartesianSizeDropZone,
    "CartesianSizeMeasureChip": cartesianSizeMeasureChip_1.CartesianSizeMeasureChip,
    "CartesianTooltipChip": cartesianTooltipChip_1.CartesianTooltipChip,
    "CartesianTooltipDropZone": cartesianTooltipDropZone_1.CartesianTooltipDropZone,
    "CartesianTooltipHierarchyChip": cartesianTooltipHierarchyChip_1.CartesianTooltipHierarchyChip,
    "CartesianTooltipMeasureChip": cartesianTooltipMeasureChip_1.CartesianTooltipMeasureChip,
    "CartesianTrellisHorizontalChip": cartesianTrellisHorizontalChip_1.CartesianTrellisHorizontalChip,
    "CartesianTrellisHorizontalDropZone": cartesianTrellisHorizontalDropZone_1.CartesianTrellisHorizontalDropZone,
    "CartesianTrellisHorizontalHierarchyChip": cartesianTrellisHorizontalHierarchyChip_1.CartesianTrellisHorizontalHierarchyChip,
    "CartesianTrellisHorizontalValuesChip": cartesianTrellisHorizontalValuesChip_1.CartesianTrellisHorizontalValuesChip,
    "CartesianTrellisVerticalChip": cartesianTrellisVerticalChip_1.CartesianTrellisVerticalChip,
    "CartesianTrellisVerticalDropZone": cartesianTrellisVerticalDropZone_1.CartesianTrellisVerticalDropZone,
    "CartesianTrellisVerticalHierarchyChip": cartesianTrellisVerticalHierarchyChip_1.CartesianTrellisVerticalHierarchyChip,
    "CartesianTrellisVerticalValuesChip": cartesianTrellisVerticalValuesChip_1.CartesianTrellisVerticalValuesChip,
    "CartesianValuesDropZone": cartesianValuesDropZone_1.CartesianValuesDropZone,
    "CartesianValuesMeasureChip": cartesianValuesMeasureChip_1.CartesianValuesMeasureChip,
    "CartesianValuesVisualTypes": cartesianValuesVisualTypes_1.CartesianValuesVisualTypes,
    "CartesianVisual": cartesianVisual_1.CartesianVisual,
    "ChangeItemDescriptionData": changeItemDescriptionData_1.ChangeItemDescriptionData,
    "ChangeUserLicenseObject": changeUserLicenseObject_1.ChangeUserLicenseObject,
    "ComponentLog": componentLog_1.ComponentLog,
    "ConnStringDscApiObject": connStringDscApiObject_1.ConnStringDscApiObject,
    "ConnectedItemsSearchCriteria": connectedItemsSearchCriteria_1.ConnectedItemsSearchCriteria,
    "ConnectionSearchCriteria": connectionSearchCriteria_1.ConnectionSearchCriteria,
    "ConnectionStringData": connectionStringData_1.ConnectionStringData,
    "ConnectionStringProperties": connectionStringProperties_1.ConnectionStringProperties,
    "ContentSearchParamsObject": contentSearchParamsObject_1.ContentSearchParamsObject,
    "CreateUserAdObject": createUserAdObject_1.CreateUserAdObject,
    "CreateUserDbObject": createUserDbObject_1.CreateUserDbObject,
    "CreateUserOpenIdObject": createUserOpenIdObject_1.CreateUserOpenIdObject,
    "CreateUserSamlObject": createUserSamlObject_1.CreateUserSamlObject,
    "CreatedThemeResult": createdThemeResult_1.CreatedThemeResult,
    "DataBaseRecognitionObject": dataBaseRecognitionObject_1.DataBaseRecognitionObject,
    "DataCatalogDimension": dataCatalogDimension_1.DataCatalogDimension,
    "DataCatalogHierarchy": dataCatalogHierarchy_1.DataCatalogHierarchy,
    "DataCatalogHierarchyLevel": dataCatalogHierarchyLevel_1.DataCatalogHierarchyLevel,
    "DataCatalogItem": dataCatalogItem_1.DataCatalogItem,
    "DataCatalogMeasure": dataCatalogMeasure_1.DataCatalogMeasure,
    "DataCatalogModelMetadata": dataCatalogModelMetadata_1.DataCatalogModelMetadata,
    "DataCatalogProperty": dataCatalogProperty_1.DataCatalogProperty,
    "DataCatalogUpdateData": dataCatalogUpdateData_1.DataCatalogUpdateData,
    "DataSourceTableResult": dataSourceTableResult_1.DataSourceTableResult,
    "DataSourceUsedTablesResult": dataSourceUsedTablesResult_1.DataSourceUsedTablesResult,
    "DeleteHierarchyOverlayApiObject": deleteHierarchyOverlayApiObject_1.DeleteHierarchyOverlayApiObject,
    "DeleteMeasureOverlayApiObject": deleteMeasureOverlayApiObject_1.DeleteMeasureOverlayApiObject,
    "DeleteTenantApiData": deleteTenantApiData_1.DeleteTenantApiData,
    "DiscoverData": discoverData_1.DiscoverData,
    "DiscoverDataCatalog": discoverDataCatalog_1.DiscoverDataCatalog,
    "DistributionLog": distributionLog_1.DistributionLog,
    "DomainAdminPermissionAPIObject": domainAdminPermissionAPIObject_1.DomainAdminPermissionAPIObject,
    "DomainAdminPermissions": domainAdminPermissions_1.DomainAdminPermissions,
    "DomainSecurityObject": domainSecurityObject_1.DomainSecurityObject,
    "DscApiData": dscApiData_1.DscApiData,
    "ElementSelectionData": elementSelectionData_1.ElementSelectionData,
    "EnumerationOutput": enumerationOutput_1.EnumerationOutput,
    "ErrorMessage": errorMessage_1.ErrorMessage,
    "EtlTaskSummary": etlTaskSummary_1.EtlTaskSummary,
    "EtlTaskSummaryAllOf": etlTaskSummaryAllOf_1.EtlTaskSummaryAllOf,
    "EtlValidationMessage": etlValidationMessage_1.EtlValidationMessage,
    "ExecuteMasterFlowObject": executeMasterFlowObject_1.ExecuteMasterFlowObject,
    "ExecuteMasterFlowResult": executeMasterFlowResult_1.ExecuteMasterFlowResult,
    "ExecuteScheduleApiData": executeScheduleApiData_1.ExecuteScheduleApiData,
    "ExecutionSettings": executionSettings_1.ExecutionSettings,
    "ExecutionViewData": executionViewData_1.ExecutionViewData,
    "ExportContentApiData": exportContentApiData_1.ExportContentApiData,
    "ExportData": exportData_1.ExportData,
    "ExportOptions": exportOptions_1.ExportOptions,
    "ExternalParameters": externalParameters_1.ExternalParameters,
    "FilterParameter": filterParameter_1.FilterParameter,
    "FolderTenantObject": folderTenantObject_1.FolderTenantObject,
    "FormulaData": formulaData_1.FormulaData,
    "FtpSettings": ftpSettings_1.FtpSettings,
    "GetItemParamsObject": getItemParamsObject_1.GetItemParamsObject,
    "GetOverlaySecurityObject": getOverlaySecurityObject_1.GetOverlaySecurityObject,
    "GridColorChip": gridColorChip_1.GridColorChip,
    "GridColorDropZone": gridColorDropZone_1.GridColorDropZone,
    "GridColorHierarchyChip": gridColorHierarchyChip_1.GridColorHierarchyChip,
    "GridColorMeasureChip": gridColorMeasureChip_1.GridColorMeasureChip,
    "GridColsChip": gridColsChip_1.GridColsChip,
    "GridColsDropZone": gridColsDropZone_1.GridColsDropZone,
    "GridColsHierarchyChip": gridColsHierarchyChip_1.GridColsHierarchyChip,
    "GridColsValuesChip": gridColsValuesChip_1.GridColsValuesChip,
    "GridFilterChip": gridFilterChip_1.GridFilterChip,
    "GridFilterDropZone": gridFilterDropZone_1.GridFilterDropZone,
    "GridFilterHierarchyChip": gridFilterHierarchyChip_1.GridFilterHierarchyChip,
    "GridFilterValuesChip": gridFilterValuesChip_1.GridFilterValuesChip,
    "GridIndicatorDropZone": gridIndicatorDropZone_1.GridIndicatorDropZone,
    "GridIndicatorMeasureChip": gridIndicatorMeasureChip_1.GridIndicatorMeasureChip,
    "GridRowsChip": gridRowsChip_1.GridRowsChip,
    "GridRowsDropZone": gridRowsDropZone_1.GridRowsDropZone,
    "GridRowsHierarchyChip": gridRowsHierarchyChip_1.GridRowsHierarchyChip,
    "GridRowsValuesChip": gridRowsValuesChip_1.GridRowsValuesChip,
    "GridSizeDropZone": gridSizeDropZone_1.GridSizeDropZone,
    "GridSizeMeasureChip": gridSizeMeasureChip_1.GridSizeMeasureChip,
    "GridTooltipChip": gridTooltipChip_1.GridTooltipChip,
    "GridTooltipDropZone": gridTooltipDropZone_1.GridTooltipDropZone,
    "GridTooltipHierarchyChip": gridTooltipHierarchyChip_1.GridTooltipHierarchyChip,
    "GridTooltipMeasureChip": gridTooltipMeasureChip_1.GridTooltipMeasureChip,
    "GridValuesDropZone": gridValuesDropZone_1.GridValuesDropZone,
    "GridValuesMeasureChip": gridValuesMeasureChip_1.GridValuesMeasureChip,
    "GridVisual": gridVisual_1.GridVisual,
    "HierarchyElementSelection": hierarchyElementSelection_1.HierarchyElementSelection,
    "HierarchyMeasureSecurity": hierarchyMeasureSecurity_1.HierarchyMeasureSecurity,
    "HierarchyMeasureSecurityApiObject": hierarchyMeasureSecurityApiObject_1.HierarchyMeasureSecurityApiObject,
    "HierarchyOverlayData": hierarchyOverlayData_1.HierarchyOverlayData,
    "HierarchyOverlayToDeleteData": hierarchyOverlayToDeleteData_1.HierarchyOverlayToDeleteData,
    "HubApiObject": hubApiObject_1.HubApiObject,
    "ImportApiResultObject": importApiResultObject_1.ImportApiResultObject,
    "ImportMaterializedModelObject": importMaterializedModelObject_1.ImportMaterializedModelObject,
    "ItemId": itemId_1.ItemId,
    "ItemParentApiData": itemParentApiData_1.ItemParentApiData,
    "ItemRolePair": itemRolePair_1.ItemRolePair,
    "ItemRolesForRemoval": itemRolesForRemoval_1.ItemRolesForRemoval,
    "ItemRolesToBeAdded": itemRolesToBeAdded_1.ItemRolesToBeAdded,
    "ItemsForFavorites": itemsForFavorites_1.ItemsForFavorites,
    "ItemsToCopy": itemsToCopy_1.ItemsToCopy,
    "ItemsToMove": itemsToMove_1.ItemsToMove,
    "LdapGroupDetails": ldapGroupDetails_1.LdapGroupDetails,
    "LdapGroupIdentifier": ldapGroupIdentifier_1.LdapGroupIdentifier,
    "LdapSearchObject": ldapSearchObject_1.LdapSearchObject,
    "LdapUserObject": ldapUserObject_1.LdapUserObject,
    "LdapUsersSearchObject": ldapUsersSearchObject_1.LdapUsersSearchObject,
    "LicenseCountObject": licenseCountObject_1.LicenseCountObject,
    "ListData": listData_1.ListData,
    "MSOlapProperties": mSOlapProperties_1.MSOlapProperties,
    "MapColorChip": mapColorChip_1.MapColorChip,
    "MapColorDropZone": mapColorDropZone_1.MapColorDropZone,
    "MapColorHierarchyChip": mapColorHierarchyChip_1.MapColorHierarchyChip,
    "MapColorMeasureChip": mapColorMeasureChip_1.MapColorMeasureChip,
    "MapDetailsDropZone": mapDetailsDropZone_1.MapDetailsDropZone,
    "MapDetailsHierarchyChip": mapDetailsHierarchyChip_1.MapDetailsHierarchyChip,
    "MapFilterDropZone": mapFilterDropZone_1.MapFilterDropZone,
    "MapFilterHierarchyChip": mapFilterHierarchyChip_1.MapFilterHierarchyChip,
    "MapLocationChip": mapLocationChip_1.MapLocationChip,
    "MapLocationDropZone": mapLocationDropZone_1.MapLocationDropZone,
    "MapLocationHierarchyChip": mapLocationHierarchyChip_1.MapLocationHierarchyChip,
    "MapLocationMeasureChip": mapLocationMeasureChip_1.MapLocationMeasureChip,
    "MapMotionDropZone": mapMotionDropZone_1.MapMotionDropZone,
    "MapMotionHierarchyChip": mapMotionHierarchyChip_1.MapMotionHierarchyChip,
    "MapSizeDropZone": mapSizeDropZone_1.MapSizeDropZone,
    "MapSizeMeasureChip": mapSizeMeasureChip_1.MapSizeMeasureChip,
    "MapTooltipChip": mapTooltipChip_1.MapTooltipChip,
    "MapTooltipDropZone": mapTooltipDropZone_1.MapTooltipDropZone,
    "MapTooltipHierarchyChip": mapTooltipHierarchyChip_1.MapTooltipHierarchyChip,
    "MapTooltipMeasureChip": mapTooltipMeasureChip_1.MapTooltipMeasureChip,
    "MapVisual": mapVisual_1.MapVisual,
    "MasterFlowFindDataSourceObject": masterFlowFindDataSourceObject_1.MasterFlowFindDataSourceObject,
    "MasterFlowModelNameObject": masterFlowModelNameObject_1.MasterFlowModelNameObject,
    "MasterFlowOtherObject": masterFlowOtherObject_1.MasterFlowOtherObject,
    "MasterFlowProgressResult": masterFlowProgressResult_1.MasterFlowProgressResult,
    "MasterFlowSchemasObject": masterFlowSchemasObject_1.MasterFlowSchemasObject,
    "MasterFlowSourceConnectionObject": masterFlowSourceConnectionObject_1.MasterFlowSourceConnectionObject,
    "MasterFlowSourceObject": masterFlowSourceObject_1.MasterFlowSourceObject,
    "MasterFlowTargetConnectionObject": masterFlowTargetConnectionObject_1.MasterFlowTargetConnectionObject,
    "MasterFlowTargetObject": masterFlowTargetObject_1.MasterFlowTargetObject,
    "MasterFlowUpdatedVariableResult": masterFlowUpdatedVariableResult_1.MasterFlowUpdatedVariableResult,
    "MasterFlowValidationResult": masterFlowValidationResult_1.MasterFlowValidationResult,
    "MasterFlowVariableConnectionObject": masterFlowVariableConnectionObject_1.MasterFlowVariableConnectionObject,
    "MasterFlowVariableObject": masterFlowVariableObject_1.MasterFlowVariableObject,
    "MasterFlowVariableValueObject": masterFlowVariableValueObject_1.MasterFlowVariableValueObject,
    "MasterFlowVariablesResult": masterFlowVariablesResult_1.MasterFlowVariablesResult,
    "MasterFlowVariablesValueObject": masterFlowVariablesValueObject_1.MasterFlowVariablesValueObject,
    "MasterNodeError": masterNodeError_1.MasterNodeError,
    "MaterializedItemObject": materializedItemObject_1.MaterializedItemObject,
    "MeasureGroup": measureGroup_1.MeasureGroup,
    "MeasureOverlayData": measureOverlayData_1.MeasureOverlayData,
    "MeasureOverlayToDeleteData": measureOverlayToDeleteData_1.MeasureOverlayToDeleteData,
    "MemberDataApi": memberDataApi_1.MemberDataApi,
    "MembersSecurity": membersSecurity_1.MembersSecurity,
    "MembersSecurityApiObject": membersSecurityApiObject_1.MembersSecurityApiObject,
    "MetaDataTranslation": metaDataTranslation_1.MetaDataTranslation,
    "ModelConnection": modelConnection_1.ModelConnection,
    "ModelDataCatalog": modelDataCatalog_1.ModelDataCatalog,
    "ModelDataFlowSourceInfo": modelDataFlowSourceInfo_1.ModelDataFlowSourceInfo,
    "ModelProcessDateObject": modelProcessDateObject_1.ModelProcessDateObject,
    "ModelProcessDateResult": modelProcessDateResult_1.ModelProcessDateResult,
    "ModelRecognitionObject": modelRecognitionObject_1.ModelRecognitionObject,
    "ModelScheduleOnDemandObject": modelScheduleOnDemandObject_1.ModelScheduleOnDemandObject,
    "ModelScheduleOnDemandResult": modelScheduleOnDemandResult_1.ModelScheduleOnDemandResult,
    "ModelSyncColumnsSettings": modelSyncColumnsSettings_1.ModelSyncColumnsSettings,
    "ModelingAggregationMapping": modelingAggregationMapping_1.ModelingAggregationMapping,
    "ModelingColumn": modelingColumn_1.ModelingColumn,
    "ModelingConfigTranslation": modelingConfigTranslation_1.ModelingConfigTranslation,
    "ModelingFolderTranslations": modelingFolderTranslations_1.ModelingFolderTranslations,
    "ModelingHierarchy": modelingHierarchy_1.ModelingHierarchy,
    "ModelingHierarchyLevel": modelingHierarchyLevel_1.ModelingHierarchyLevel,
    "ModelingKPI": modelingKPI_1.ModelingKPI,
    "ModelingKPIAllOf": modelingKPIAllOf_1.ModelingKPIAllOf,
    "ModelingMeasure": modelingMeasure_1.ModelingMeasure,
    "ModelingModel": modelingModel_1.ModelingModel,
    "ModelingProperty": modelingProperty_1.ModelingProperty,
    "ModelingRelationship": modelingRelationship_1.ModelingRelationship,
    "ModelingRelationshipColumnPair": modelingRelationshipColumnPair_1.ModelingRelationshipColumnPair,
    "ModelingServerInfo": modelingServerInfo_1.ModelingServerInfo,
    "ModelingTable": modelingTable_1.ModelingTable,
    "ModelingTranslation": modelingTranslation_1.ModelingTranslation,
    "ModifiedItemsResult": modifiedItemsResult_1.ModifiedItemsResult,
    "NewFolderApiData": newFolderApiData_1.NewFolderApiData,
    "NlpQueryExportData": nlpQueryExportData_1.NlpQueryExportData,
    "NotificationIndicatorsResult": notificationIndicatorsResult_1.NotificationIndicatorsResult,
    "OauthDataSourceSettings": oauthDataSourceSettings_1.OauthDataSourceSettings,
    "OdbcDirectQueryOptions": odbcDirectQueryOptions_1.OdbcDirectQueryOptions,
    "PieApiObject": pieApiObject_1.PieApiObject,
    "PrintingSummaryLog": printingSummaryLog_1.PrintingSummaryLog,
    "PrintingSummaryLogHolder": printingSummaryLogHolder_1.PrintingSummaryLogHolder,
    "PrintingSummaryLogHolderAllOf": printingSummaryLogHolderAllOf_1.PrintingSummaryLogHolderAllOf,
    "ProPermissions": proPermissions_1.ProPermissions,
    "ProProfileApiData": proProfileApiData_1.ProProfileApiData,
    "ProfileRolesData": profileRolesData_1.ProfileRolesData,
    "PulseClientData": pulseClientData_1.PulseClientData,
    "PyramidContentItem": pyramidContentItem_1.PyramidContentItem,
    "PyramidItemIdentifier": pyramidItemIdentifier_1.PyramidItemIdentifier,
    "PyramidViewUserObject": pyramidViewUserObject_1.PyramidViewUserObject,
    "QueryExportData": queryExportData_1.QueryExportData,
    "QueryLog": queryLog_1.QueryLog,
    "QueryOptions": queryOptions_1.QueryOptions,
    "QueryTotalSettings": queryTotalSettings_1.QueryTotalSettings,
    "RelatedItemData": relatedItemData_1.RelatedItemData,
    "RenameItemApiData": renameItemApiData_1.RenameItemApiData,
    "RoleAdGroupsModifyObject": roleAdGroupsModifyObject_1.RoleAdGroupsModifyObject,
    "RoleData": roleData_1.RoleData,
    "RoleMinimalData": roleMinimalData_1.RoleMinimalData,
    "RoleToItemApiData": roleToItemApiData_1.RoleToItemApiData,
    "RolesInItemRemovalObject": rolesInItemRemovalObject_1.RolesInItemRemovalObject,
    "ScatterColorChip": scatterColorChip_1.ScatterColorChip,
    "ScatterColorDropZone": scatterColorDropZone_1.ScatterColorDropZone,
    "ScatterColorHierarchyChip": scatterColorHierarchyChip_1.ScatterColorHierarchyChip,
    "ScatterColorMeasureChip": scatterColorMeasureChip_1.ScatterColorMeasureChip,
    "ScatterDetailsDropZone": scatterDetailsDropZone_1.ScatterDetailsDropZone,
    "ScatterDetailsHierarchyChip": scatterDetailsHierarchyChip_1.ScatterDetailsHierarchyChip,
    "ScatterFilterChip": scatterFilterChip_1.ScatterFilterChip,
    "ScatterFilterDropZone": scatterFilterDropZone_1.ScatterFilterDropZone,
    "ScatterFilterHierarchyChip": scatterFilterHierarchyChip_1.ScatterFilterHierarchyChip,
    "ScatterFilterValuesChip": scatterFilterValuesChip_1.ScatterFilterValuesChip,
    "ScatterLabelsChip": scatterLabelsChip_1.ScatterLabelsChip,
    "ScatterLabelsDropZone": scatterLabelsDropZone_1.ScatterLabelsDropZone,
    "ScatterLabelsHierarchyChip": scatterLabelsHierarchyChip_1.ScatterLabelsHierarchyChip,
    "ScatterLabelsMeasureChip": scatterLabelsMeasureChip_1.ScatterLabelsMeasureChip,
    "ScatterMotionDropZone": scatterMotionDropZone_1.ScatterMotionDropZone,
    "ScatterMotionHierarchyChip": scatterMotionHierarchyChip_1.ScatterMotionHierarchyChip,
    "ScatterShapeChip": scatterShapeChip_1.ScatterShapeChip,
    "ScatterShapeDropZone": scatterShapeDropZone_1.ScatterShapeDropZone,
    "ScatterShapeHierarchyChip": scatterShapeHierarchyChip_1.ScatterShapeHierarchyChip,
    "ScatterShapeMeasureChip": scatterShapeMeasureChip_1.ScatterShapeMeasureChip,
    "ScatterSizeDropZone": scatterSizeDropZone_1.ScatterSizeDropZone,
    "ScatterSizeMeasureChip": scatterSizeMeasureChip_1.ScatterSizeMeasureChip,
    "ScatterTooltipChip": scatterTooltipChip_1.ScatterTooltipChip,
    "ScatterTooltipDropZone": scatterTooltipDropZone_1.ScatterTooltipDropZone,
    "ScatterTooltipHierarchyChip": scatterTooltipHierarchyChip_1.ScatterTooltipHierarchyChip,
    "ScatterTooltipMeasureChip": scatterTooltipMeasureChip_1.ScatterTooltipMeasureChip,
    "ScatterTrellisHorizontalChip": scatterTrellisHorizontalChip_1.ScatterTrellisHorizontalChip,
    "ScatterTrellisHorizontalDropZone": scatterTrellisHorizontalDropZone_1.ScatterTrellisHorizontalDropZone,
    "ScatterTrellisHorizontalHierarchyChip": scatterTrellisHorizontalHierarchyChip_1.ScatterTrellisHorizontalHierarchyChip,
    "ScatterTrellisHorizontalValuesChip": scatterTrellisHorizontalValuesChip_1.ScatterTrellisHorizontalValuesChip,
    "ScatterTrellisVerticalChip": scatterTrellisVerticalChip_1.ScatterTrellisVerticalChip,
    "ScatterTrellisVerticalDropZone": scatterTrellisVerticalDropZone_1.ScatterTrellisVerticalDropZone,
    "ScatterTrellisVerticalHierarchyChip": scatterTrellisVerticalHierarchyChip_1.ScatterTrellisVerticalHierarchyChip,
    "ScatterTrellisVerticalValuesChip": scatterTrellisVerticalValuesChip_1.ScatterTrellisVerticalValuesChip,
    "ScatterVisual": scatterVisual_1.ScatterVisual,
    "ScatterXValuesDropZone": scatterXValuesDropZone_1.ScatterXValuesDropZone,
    "ScatterXValuesMeasureChip": scatterXValuesMeasureChip_1.ScatterXValuesMeasureChip,
    "ScatterYValuesDropZone": scatterYValuesDropZone_1.ScatterYValuesDropZone,
    "ScatterYValuesMeasureChip": scatterYValuesMeasureChip_1.ScatterYValuesMeasureChip,
    "ScheduleSearchCriteria": scheduleSearchCriteria_1.ScheduleSearchCriteria,
    "ScheduleViewObject": scheduleViewObject_1.ScheduleViewObject,
    "ScientistPermissions": scientistPermissions_1.ScientistPermissions,
    "ScientistProfileApiData": scientistProfileApiData_1.ScientistProfileApiData,
    "SearchAdGroupUsersData": searchAdGroupUsersData_1.SearchAdGroupUsersData,
    "SearchAdUserGroupsData": searchAdUserGroupsData_1.SearchAdUserGroupsData,
    "SearchCriteria": searchCriteria_1.SearchCriteria,
    "SegmentColorChip": segmentColorChip_1.SegmentColorChip,
    "SegmentColorDropZone": segmentColorDropZone_1.SegmentColorDropZone,
    "SegmentColorHierarchyChip": segmentColorHierarchyChip_1.SegmentColorHierarchyChip,
    "SegmentColorMeasureChip": segmentColorMeasureChip_1.SegmentColorMeasureChip,
    "SegmentDetailsDropZone": segmentDetailsDropZone_1.SegmentDetailsDropZone,
    "SegmentDetailsHierarchyChip": segmentDetailsHierarchyChip_1.SegmentDetailsHierarchyChip,
    "SegmentFilterChip": segmentFilterChip_1.SegmentFilterChip,
    "SegmentFilterDropZone": segmentFilterDropZone_1.SegmentFilterDropZone,
    "SegmentFilterHierarchyChip": segmentFilterHierarchyChip_1.SegmentFilterHierarchyChip,
    "SegmentFilterValuesChip": segmentFilterValuesChip_1.SegmentFilterValuesChip,
    "SegmentLabelsChip": segmentLabelsChip_1.SegmentLabelsChip,
    "SegmentLabelsDropZone": segmentLabelsDropZone_1.SegmentLabelsDropZone,
    "SegmentLabelsHierarchyChip": segmentLabelsHierarchyChip_1.SegmentLabelsHierarchyChip,
    "SegmentLabelsMeasureChip": segmentLabelsMeasureChip_1.SegmentLabelsMeasureChip,
    "SegmentMotionDropZone": segmentMotionDropZone_1.SegmentMotionDropZone,
    "SegmentMotionHierarchyChip": segmentMotionHierarchyChip_1.SegmentMotionHierarchyChip,
    "SegmentSizeDropZone": segmentSizeDropZone_1.SegmentSizeDropZone,
    "SegmentSizeMeasureChip": segmentSizeMeasureChip_1.SegmentSizeMeasureChip,
    "SegmentTooltipChip": segmentTooltipChip_1.SegmentTooltipChip,
    "SegmentTooltipDropZone": segmentTooltipDropZone_1.SegmentTooltipDropZone,
    "SegmentTooltipHierarchyChip": segmentTooltipHierarchyChip_1.SegmentTooltipHierarchyChip,
    "SegmentTooltipMeasureChip": segmentTooltipMeasureChip_1.SegmentTooltipMeasureChip,
    "SegmentTrellisHorizontalChip": segmentTrellisHorizontalChip_1.SegmentTrellisHorizontalChip,
    "SegmentTrellisHorizontalDropZone": segmentTrellisHorizontalDropZone_1.SegmentTrellisHorizontalDropZone,
    "SegmentTrellisHorizontalHierarchyChip": segmentTrellisHorizontalHierarchyChip_1.SegmentTrellisHorizontalHierarchyChip,
    "SegmentTrellisHorizontalValuesChip": segmentTrellisHorizontalValuesChip_1.SegmentTrellisHorizontalValuesChip,
    "SegmentTrellisVerticalChip": segmentTrellisVerticalChip_1.SegmentTrellisVerticalChip,
    "SegmentTrellisVerticalDropZone": segmentTrellisVerticalDropZone_1.SegmentTrellisVerticalDropZone,
    "SegmentTrellisVerticalHierarchyChip": segmentTrellisVerticalHierarchyChip_1.SegmentTrellisVerticalHierarchyChip,
    "SegmentTrellisVerticalValuesChip": segmentTrellisVerticalValuesChip_1.SegmentTrellisVerticalValuesChip,
    "SegmentValuesDropZone": segmentValuesDropZone_1.SegmentValuesDropZone,
    "SegmentValuesMeasureChip": segmentValuesMeasureChip_1.SegmentValuesMeasureChip,
    "SegmentVisual": segmentVisual_1.SegmentVisual,
    "ServerData": serverData_1.ServerData,
    "SimpleModifierResult": simpleModifierResult_1.SimpleModifierResult,
    "TabularColorChip": tabularColorChip_1.TabularColorChip,
    "TabularColorDropZone": tabularColorDropZone_1.TabularColorDropZone,
    "TabularColorHierarchyChip": tabularColorHierarchyChip_1.TabularColorHierarchyChip,
    "TabularColorMeasureChip": tabularColorMeasureChip_1.TabularColorMeasureChip,
    "TabularColsChip": tabularColsChip_1.TabularColsChip,
    "TabularColsDropZone": tabularColsDropZone_1.TabularColsDropZone,
    "TabularColsHierarchyChip": tabularColsHierarchyChip_1.TabularColsHierarchyChip,
    "TabularColsMeasureChip": tabularColsMeasureChip_1.TabularColsMeasureChip,
    "TabularFilterDropZone": tabularFilterDropZone_1.TabularFilterDropZone,
    "TabularFilterHierarchyChip": tabularFilterHierarchyChip_1.TabularFilterHierarchyChip,
    "TabularSizeDropZone": tabularSizeDropZone_1.TabularSizeDropZone,
    "TabularSizeMeasureChip": tabularSizeMeasureChip_1.TabularSizeMeasureChip,
    "TabularTooltipChip": tabularTooltipChip_1.TabularTooltipChip,
    "TabularTooltipDropZone": tabularTooltipDropZone_1.TabularTooltipDropZone,
    "TabularTooltipHierarchyChip": tabularTooltipHierarchyChip_1.TabularTooltipHierarchyChip,
    "TabularTooltipMeasureChip": tabularTooltipMeasureChip_1.TabularTooltipMeasureChip,
    "TabularVisual": tabularVisual_1.TabularVisual,
    "TagData": tagData_1.TagData,
    "TagUsageApiData": tagUsageApiData_1.TagUsageApiData,
    "TargetParameter": targetParameter_1.TargetParameter,
    "TaskSummary": taskSummary_1.TaskSummary,
    "TaskUserApiData": taskUserApiData_1.TaskUserApiData,
    "TaskViewData": taskViewData_1.TaskViewData,
    "TenantLicenseTypeData": tenantLicenseTypeData_1.TenantLicenseTypeData,
    "TenantObject": tenantObject_1.TenantObject,
    "TenantSettings": tenantSettings_1.TenantSettings,
    "TenantUsersGetObject": tenantUsersGetObject_1.TenantUsersGetObject,
    "ThemeApiObject": themeApiObject_1.ThemeApiObject,
    "ThemeListObject": themeListObject_1.ThemeListObject,
    "ThemeToItemsApiObject": themeToItemsApiObject_1.ThemeToItemsApiObject,
    "ToggleUserApiData": toggleUserApiData_1.ToggleUserApiData,
    "TotalsSettings": totalsSettings_1.TotalsSettings,
    "UpdateTenantSeatsObject": updateTenantSeatsObject_1.UpdateTenantSeatsObject,
    "UpdateUserAdObject": updateUserAdObject_1.UpdateUserAdObject,
    "UpdateUserDbObject": updateUserDbObject_1.UpdateUserDbObject,
    "UpdateUserOpenIdObject": updateUserOpenIdObject_1.UpdateUserOpenIdObject,
    "UpdateUserSamlObject": updateUserSamlObject_1.UpdateUserSamlObject,
    "UserCredentials": userCredentials_1.UserCredentials,
    "UserOpenIdCredentials": userOpenIdCredentials_1.UserOpenIdCredentials,
    "UserPhone": userPhone_1.UserPhone,
    "UserRolesData": userRolesData_1.UserRolesData,
    "UserSamlCredentials": userSamlCredentials_1.UserSamlCredentials,
    "UserTokenCredentials": userTokenCredentials_1.UserTokenCredentials,
    "ViewerPermissions": viewerPermissions_1.ViewerPermissions,
    "ViewerProfileApiData": viewerProfileApiData_1.ViewerProfileApiData,
    "Visuals": visuals_1.Visuals,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
