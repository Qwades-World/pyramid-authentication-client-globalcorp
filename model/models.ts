import localVarRequest from 'request';

export * from './accessType';
export * from './addHierarchyOverlayApiObject';
export * from './addMeasureOverlayApiObject';
export * from './addUserRoleData';
export * from './addUsersRoleData';
export * from './additionalServerProperties';
export * from './adminMultiTenantData';
export * from './adminType';
export * from './adminTypeApiData';
export * from './aggregationType';
export * from './analystPermissionBitIndex';
export * from './analystProfileApiData';
export * from './analyticsPermissions';
export * from './apiResponseFormat';
export * from './apiResultLicenseStatus';
export * from './apiResultTaskStatus';
export * from './attributeTranslation';
export * from './axisTotalsType';
export * from './bulkWritingType';
export * from './bwDatabaseListType';
export * from './bwInfoAreaTreeViewType';
export * from './cartesianBarVisualType';
export * from './cartesianCategoriesDropZone';
export * from './cartesianCategoriesHierarchyChip';
export * from './cartesianColorChip';
export * from './cartesianColorDropZone';
export * from './cartesianColorHierarchyChip';
export * from './cartesianColorMeasureChip';
export * from './cartesianColumnVisualType';
export * from './cartesianFilterChip';
export * from './cartesianFilterDropZone';
export * from './cartesianFilterHierarchyChip';
export * from './cartesianFilterValuesChip';
export * from './cartesianLabelsChip';
export * from './cartesianLabelsDropZone';
export * from './cartesianLabelsHierarchyChip';
export * from './cartesianLabelsMeasureChip';
export * from './cartesianLineVisualType';
export * from './cartesianMotionDropZone';
export * from './cartesianMotionHierarchyChip';
export * from './cartesianShapeChip';
export * from './cartesianShapeDropZone';
export * from './cartesianShapeHierarchyChip';
export * from './cartesianShapeMeasureChip';
export * from './cartesianSizeDropZone';
export * from './cartesianSizeMeasureChip';
export * from './cartesianStackedBarVisualType';
export * from './cartesianStackedColumnVisualType';
export * from './cartesianTooltipChip';
export * from './cartesianTooltipDropZone';
export * from './cartesianTooltipHierarchyChip';
export * from './cartesianTooltipMeasureChip';
export * from './cartesianTrellisHorizontalChip';
export * from './cartesianTrellisHorizontalDropZone';
export * from './cartesianTrellisHorizontalHierarchyChip';
export * from './cartesianTrellisHorizontalValuesChip';
export * from './cartesianTrellisVerticalChip';
export * from './cartesianTrellisVerticalDropZone';
export * from './cartesianTrellisVerticalHierarchyChip';
export * from './cartesianTrellisVerticalValuesChip';
export * from './cartesianValuesDropZone';
export * from './cartesianValuesMeasureChip';
export * from './cartesianValuesVisualTypes';
export * from './cartesianVisual';
export * from './cartesianVisualType';
export * from './changeItemDescriptionData';
export * from './changeUserLicenseObject';
export * from './clashDefaultOption';
export * from './clientLicenseType';
export * from './colorMathFunction';
export * from './componentLog';
export * from './conditionConjunctionType';
export * from './connStringDscApiObject';
export * from './connectedItemsSearchCriteria';
export * from './connectionSearchCriteria';
export * from './connectionStringData';
export * from './connectionStringProperties';
export * from './connectionStringType';
export * from './contentItemObject';
export * from './contentSearchParamsObject';
export * from './contentType';
export * from './contentTypeObject';
export * from './createUserAdObject';
export * from './createUserDbObject';
export * from './createUserOpenIdObject';
export * from './createUserSamlObject';
export * from './createdThemeResult';
export * from './csvDelimiter';
export * from './cubeAuthMethod';
export * from './customRootCAType';
export * from './dataBaseRecognitionObject';
export * from './dataCatalogDimension';
export * from './dataCatalogHierarchy';
export * from './dataCatalogHierarchyLevel';
export * from './dataCatalogItem';
export * from './dataCatalogMeasure';
export * from './dataCatalogModelMetadata';
export * from './dataCatalogProperty';
export * from './dataCatalogUpdateData';
export * from './dataFlowModelType';
export * from './dataSourceTableResult';
export * from './dataSourceUsedTablesResult';
export * from './dataType';
export * from './deleteHierarchyOverlayApiObject';
export * from './deleteMeasureOverlayApiObject';
export * from './deleteTenantApiData';
export * from './discoverData';
export * from './discoverDataCatalog';
export * from './distributionLog';
export * from './distributionType';
export * from './domainAdminPermissionAPIObject';
export * from './domainAdminPermissionType';
export * from './domainAdminPermissions';
export * from './domainSecurityObject';
export * from './dscApiData';
export * from './elementSelectionData';
export * from './elementSelectionDataType';
export * from './enumerationOutput';
export * from './errorMessage';
export * from './etlSyncModelColumnsType';
export * from './etlTaskSummary';
export * from './etlTaskSummaryAllOf';
export * from './etlValidationMessage';
export * from './executeMasterFlowObject';
export * from './executeMasterFlowResult';
export * from './executeScheduleApiData';
export * from './executionSettings';
export * from './executionViewData';
export * from './exportContentApiData';
export * from './exportData';
export * from './exportOptions';
export * from './externalParameters';
export * from './filterHierarchyType';
export * from './filterParameter';
export * from './filterValuesType';
export * from './firstWorkday';
export * from './folderTenantObject';
export * from './formulaData';
export * from './ftpDataMode';
export * from './ftpSecurityType';
export * from './ftpSettings';
export * from './gaType';
export * from './getItemParamsObject';
export * from './getOverlaySecurityObject';
export * from './gridColorChip';
export * from './gridColorDropZone';
export * from './gridColorHierarchyChip';
export * from './gridColorMeasureChip';
export * from './gridColorOption';
export * from './gridColsChip';
export * from './gridColsDropZone';
export * from './gridColsHierarchyChip';
export * from './gridColsValuesChip';
export * from './gridFilterChip';
export * from './gridFilterDropZone';
export * from './gridFilterHierarchyChip';
export * from './gridFilterValuesChip';
export * from './gridIndicatorDropZone';
export * from './gridIndicatorMeasureChip';
export * from './gridRowsChip';
export * from './gridRowsDropZone';
export * from './gridRowsHierarchyChip';
export * from './gridRowsValuesChip';
export * from './gridSizeDropZone';
export * from './gridSizeMeasureChip';
export * from './gridTooltipChip';
export * from './gridTooltipDropZone';
export * from './gridTooltipHierarchyChip';
export * from './gridTooltipMeasureChip';
export * from './gridValuesDropZone';
export * from './gridValuesMeasureChip';
export * from './gridVisual';
export * from './hideMemberType';
export * from './hierarchyCategory';
export * from './hierarchyElementSelection';
export * from './hierarchyMeasureSecurity';
export * from './hierarchyMeasureSecurityApiObject';
export * from './hierarchyOverlayData';
export * from './hierarchyOverlayProperty';
export * from './hierarchyOverlayToDeleteData';
export * from './hierarchyType';
export * from './hubApiObject';
export * from './importApiResultObject';
export * from './importMaterializedModelObject';
export * from './isolationMode';
export * from './itemId';
export * from './itemParentApiData';
export * from './itemRolePair';
export * from './itemRolesForRemoval';
export * from './itemRolesToBeAdded';
export * from './itemType';
export * from './itemsForFavorites';
export * from './itemsToCopy';
export * from './itemsToMove';
export * from './joinType';
export * from './kpiAttributeType';
export * from './languageType';
export * from './ldapGroupDetails';
export * from './ldapGroupIdentifier';
export * from './ldapSearchObject';
export * from './ldapSearchType';
export * from './ldapUserObject';
export * from './ldapUsersSearchObject';
export * from './licenseCountObject';
export * from './licenseStatus';
export * from './listData';
export * from './mSOlapProperties';
export * from './mapColorChip';
export * from './mapColorDropZone';
export * from './mapColorHierarchyChip';
export * from './mapColorMeasureChip';
export * from './mapDetailsDropZone';
export * from './mapDetailsHierarchyChip';
export * from './mapFilterDropZone';
export * from './mapFilterHierarchyChip';
export * from './mapLocationChip';
export * from './mapLocationDropZone';
export * from './mapLocationHierarchyChip';
export * from './mapLocationMeasureChip';
export * from './mapMotionDropZone';
export * from './mapMotionHierarchyChip';
export * from './mapSizeDropZone';
export * from './mapSizeMeasureChip';
export * from './mapTooltipChip';
export * from './mapTooltipDropZone';
export * from './mapTooltipHierarchyChip';
export * from './mapTooltipMeasureChip';
export * from './mapVisual';
export * from './mapVisualType';
export * from './maskingMethodType';
export * from './masterFlowErrorType';
export * from './masterFlowFindDataSourceObject';
export * from './masterFlowModelNameObject';
export * from './masterFlowOtherObject';
export * from './masterFlowProgressResult';
export * from './masterFlowSchemasObject';
export * from './masterFlowSourceConnectionObject';
export * from './masterFlowSourceObject';
export * from './masterFlowTargetConnectionObject';
export * from './masterFlowTargetObject';
export * from './masterFlowUpdatedVariableResult';
export * from './masterFlowValidationResult';
export * from './masterFlowVariableConnectionObject';
export * from './masterFlowVariableObject';
export * from './masterFlowVariableValueObject';
export * from './masterFlowVariablesResult';
export * from './masterFlowVariablesValueObject';
export * from './masterNodeError';
export * from './materializedItemObject';
export * from './materializedItemType';
export * from './materializedRoleAssignmentType';
export * from './measureFormat';
export * from './measureGroup';
export * from './measureMapOptions';
export * from './measureOverlayData';
export * from './measureOverlayProperty';
export * from './measureOverlayToDeleteData';
export * from './memberDataApi';
export * from './membersSecurity';
export * from './membersSecurityApiObject';
export * from './metaDataTranslation';
export * from './metadataDisplayType';
export * from './modelAttributeType';
export * from './modelConnection';
export * from './modelDataCatalog';
export * from './modelDataFlowSourceInfo';
export * from './modelProcessDateObject';
export * from './modelProcessDateResult';
export * from './modelRecognitionObject';
export * from './modelScheduleOnDemandObject';
export * from './modelScheduleOnDemandResult';
export * from './modelSyncColumnsSettings';
export * from './modelingAggregationMapping';
export * from './modelingColumn';
export * from './modelingColumnCategories';
export * from './modelingColumnType';
export * from './modelingConfigTranslation';
export * from './modelingFolderTranslations';
export * from './modelingHierarchy';
export * from './modelingHierarchyLevel';
export * from './modelingKPI';
export * from './modelingKPIAllOf';
export * from './modelingMeasure';
export * from './modelingModel';
export * from './modelingProperty';
export * from './modelingRelationship';
export * from './modelingRelationshipColumnPair';
export * from './modelingServerInfo';
export * from './modelingTable';
export * from './modelingTableType';
export * from './modelingTranslation';
export * from './modifiedItemsResult';
export * from './msOlapConnectionType';
export * from './newFolderApiData';
export * from './nlpQueryExportData';
export * from './notificationIndicatorsResult';
export * from './oauthDataSourceSettings';
export * from './odbcDirectQueryOptions';
export * from './openIdAuthType';
export * from './operatorType';
export * from './paperType';
export * from './parentChildOrphanHandlingType';
export * from './parentChildRollupType';
export * from './pieApiObject';
export * from './printingComponentType';
export * from './printingOutputType';
export * from './printingSummaryLog';
export * from './printingSummaryLogHolder';
export * from './printingSummaryLogHolderAllOf';
export * from './proPermissionBitIndex';
export * from './proPermissions';
export * from './proProfileApiData';
export * from './profileRolesData';
export * from './pulseClientData';
export * from './pyramidContentItem';
export * from './pyramidItemIdentifier';
export * from './pyramidViewUserObject';
export * from './queryCacheMode';
export * from './queryExportData';
export * from './queryLog';
export * from './queryOptions';
export * from './queryTotalPosition';
export * from './queryTotalSettings';
export * from './relatedItemData';
export * from './renameItemApiData';
export * from './roleAdGroupsModifyObject';
export * from './roleAssignmentType';
export * from './roleData';
export * from './roleMinimalData';
export * from './roleToItemApiData';
export * from './rolesInItemRemovalObject';
export * from './rootFolderType';
export * from './sapBwServerConnectionType';
export * from './scatterColorChip';
export * from './scatterColorDropZone';
export * from './scatterColorHierarchyChip';
export * from './scatterColorMeasureChip';
export * from './scatterDetailsDropZone';
export * from './scatterDetailsHierarchyChip';
export * from './scatterFilterChip';
export * from './scatterFilterDropZone';
export * from './scatterFilterHierarchyChip';
export * from './scatterFilterValuesChip';
export * from './scatterLabelsChip';
export * from './scatterLabelsDropZone';
export * from './scatterLabelsHierarchyChip';
export * from './scatterLabelsMeasureChip';
export * from './scatterMotionDropZone';
export * from './scatterMotionHierarchyChip';
export * from './scatterShapeChip';
export * from './scatterShapeDropZone';
export * from './scatterShapeHierarchyChip';
export * from './scatterShapeMeasureChip';
export * from './scatterSizeDropZone';
export * from './scatterSizeMeasureChip';
export * from './scatterTooltipChip';
export * from './scatterTooltipDropZone';
export * from './scatterTooltipHierarchyChip';
export * from './scatterTooltipMeasureChip';
export * from './scatterTrellisHorizontalChip';
export * from './scatterTrellisHorizontalDropZone';
export * from './scatterTrellisHorizontalHierarchyChip';
export * from './scatterTrellisHorizontalValuesChip';
export * from './scatterTrellisVerticalChip';
export * from './scatterTrellisVerticalDropZone';
export * from './scatterTrellisVerticalHierarchyChip';
export * from './scatterTrellisVerticalValuesChip';
export * from './scatterVisual';
export * from './scatterVisualType';
export * from './scatterXValuesDropZone';
export * from './scatterXValuesMeasureChip';
export * from './scatterYValuesDropZone';
export * from './scatterYValuesMeasureChip';
export * from './scheduleDataType';
export * from './scheduleSearchCriteria';
export * from './scheduleStatus';
export * from './scheduleType';
export * from './scheduleViewObject';
export * from './scientistPermissionBitIndex';
export * from './scientistPermissions';
export * from './scientistProfileApiData';
export * from './searchAdGroupUsersData';
export * from './searchAdUserGroupsData';
export * from './searchCriteria';
export * from './searchMatchType';
export * from './searchRootFolderType';
export * from './securityType';
export * from './segmentColorChip';
export * from './segmentColorDropZone';
export * from './segmentColorHierarchyChip';
export * from './segmentColorMeasureChip';
export * from './segmentDetailsDropZone';
export * from './segmentDetailsHierarchyChip';
export * from './segmentFilterChip';
export * from './segmentFilterDropZone';
export * from './segmentFilterHierarchyChip';
export * from './segmentFilterValuesChip';
export * from './segmentLabelsChip';
export * from './segmentLabelsDropZone';
export * from './segmentLabelsHierarchyChip';
export * from './segmentLabelsMeasureChip';
export * from './segmentMotionDropZone';
export * from './segmentMotionHierarchyChip';
export * from './segmentSizeDropZone';
export * from './segmentSizeMeasureChip';
export * from './segmentTooltipChip';
export * from './segmentTooltipDropZone';
export * from './segmentTooltipHierarchyChip';
export * from './segmentTooltipMeasureChip';
export * from './segmentTrellisHorizontalChip';
export * from './segmentTrellisHorizontalDropZone';
export * from './segmentTrellisHorizontalHierarchyChip';
export * from './segmentTrellisHorizontalValuesChip';
export * from './segmentTrellisVerticalChip';
export * from './segmentTrellisVerticalDropZone';
export * from './segmentTrellisVerticalHierarchyChip';
export * from './segmentTrellisVerticalValuesChip';
export * from './segmentValuesDropZone';
export * from './segmentValuesMeasureChip';
export * from './segmentVisual';
export * from './segmentVisualType';
export * from './serverAuthenticationMethod';
export * from './serverData';
export * from './serverEffectiveUserName';
export * from './serviceStatus';
export * from './simpleModifierResult';
export * from './sizeDropZoneOptions';
export * from './sizeMathFunction';
export * from './sparkTransportMode';
export * from './syntaxType';
export * from './tabularColorChip';
export * from './tabularColorDropZone';
export * from './tabularColorHierarchyChip';
export * from './tabularColorMeasureChip';
export * from './tabularColsChip';
export * from './tabularColsDropZone';
export * from './tabularColsHierarchyChip';
export * from './tabularColsMeasureChip';
export * from './tabularFilterDropZone';
export * from './tabularFilterHierarchyChip';
export * from './tabularSizeDropZone';
export * from './tabularSizeMeasureChip';
export * from './tabularTooltipChip';
export * from './tabularTooltipDropZone';
export * from './tabularTooltipHierarchyChip';
export * from './tabularTooltipMeasureChip';
export * from './tabularVisual';
export * from './tagData';
export * from './tagType';
export * from './tagUsageApiData';
export * from './targetParameter';
export * from './taskStatus';
export * from './taskSummary';
export * from './taskUserApiData';
export * from './taskViewData';
export * from './tenantLicenseTypeData';
export * from './tenantObject';
export * from './tenantSettings';
export * from './tenantUsersGetObject';
export * from './themeApiObject';
export * from './themeListObject';
export * from './themeToItemsApiObject';
export * from './toggleUserApiData';
export * from './totalsSettings';
export * from './updateSchemaValidation';
export * from './updateTenantSeatsObject';
export * from './updateUserAdObject';
export * from './updateUserDbObject';
export * from './updateUserOpenIdObject';
export * from './updateUserSamlObject';
export * from './userCredentials';
export * from './userOpenIdCredentials';
export * from './userPhone';
export * from './userProfileType';
export * from './userRolesData';
export * from './userSamlCredentials';
export * from './userStatusID';
export * from './userTokenCredentials';
export * from './validRootFolderType';
export * from './valuesDropZoneOptions';
export * from './variableType';
export * from './viewerPermissionBitIndex';
export * from './viewerPermissions';
export * from './viewerProfileApiData';
export * from './visuals';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccessType } from './accessType';
import { AddHierarchyOverlayApiObject } from './addHierarchyOverlayApiObject';
import { AddMeasureOverlayApiObject } from './addMeasureOverlayApiObject';
import { AddUserRoleData } from './addUserRoleData';
import { AddUsersRoleData } from './addUsersRoleData';
import { AdditionalServerProperties } from './additionalServerProperties';
import { AdminMultiTenantData } from './adminMultiTenantData';
import { AdminType } from './adminType';
import { AdminTypeApiData } from './adminTypeApiData';
import { AggregationType } from './aggregationType';
import { AnalystPermissionBitIndex } from './analystPermissionBitIndex';
import { AnalystProfileApiData } from './analystProfileApiData';
import { AnalyticsPermissions } from './analyticsPermissions';
import { ApiResponseFormat } from './apiResponseFormat';
import { ApiResultLicenseStatus } from './apiResultLicenseStatus';
import { ApiResultTaskStatus } from './apiResultTaskStatus';
import { AttributeTranslation } from './attributeTranslation';
import { AxisTotalsType } from './axisTotalsType';
import { BulkWritingType } from './bulkWritingType';
import { BwDatabaseListType } from './bwDatabaseListType';
import { BwInfoAreaTreeViewType } from './bwInfoAreaTreeViewType';
import { CartesianBarVisualType } from './cartesianBarVisualType';
import { CartesianCategoriesDropZone } from './cartesianCategoriesDropZone';
import { CartesianCategoriesHierarchyChip } from './cartesianCategoriesHierarchyChip';
import { CartesianColorChip } from './cartesianColorChip';
import { CartesianColorDropZone } from './cartesianColorDropZone';
import { CartesianColorHierarchyChip } from './cartesianColorHierarchyChip';
import { CartesianColorMeasureChip } from './cartesianColorMeasureChip';
import { CartesianColumnVisualType } from './cartesianColumnVisualType';
import { CartesianFilterChip } from './cartesianFilterChip';
import { CartesianFilterDropZone } from './cartesianFilterDropZone';
import { CartesianFilterHierarchyChip } from './cartesianFilterHierarchyChip';
import { CartesianFilterValuesChip } from './cartesianFilterValuesChip';
import { CartesianLabelsChip } from './cartesianLabelsChip';
import { CartesianLabelsDropZone } from './cartesianLabelsDropZone';
import { CartesianLabelsHierarchyChip } from './cartesianLabelsHierarchyChip';
import { CartesianLabelsMeasureChip } from './cartesianLabelsMeasureChip';
import { CartesianLineVisualType } from './cartesianLineVisualType';
import { CartesianMotionDropZone } from './cartesianMotionDropZone';
import { CartesianMotionHierarchyChip } from './cartesianMotionHierarchyChip';
import { CartesianShapeChip } from './cartesianShapeChip';
import { CartesianShapeDropZone } from './cartesianShapeDropZone';
import { CartesianShapeHierarchyChip } from './cartesianShapeHierarchyChip';
import { CartesianShapeMeasureChip } from './cartesianShapeMeasureChip';
import { CartesianSizeDropZone } from './cartesianSizeDropZone';
import { CartesianSizeMeasureChip } from './cartesianSizeMeasureChip';
import { CartesianStackedBarVisualType } from './cartesianStackedBarVisualType';
import { CartesianStackedColumnVisualType } from './cartesianStackedColumnVisualType';
import { CartesianTooltipChip } from './cartesianTooltipChip';
import { CartesianTooltipDropZone } from './cartesianTooltipDropZone';
import { CartesianTooltipHierarchyChip } from './cartesianTooltipHierarchyChip';
import { CartesianTooltipMeasureChip } from './cartesianTooltipMeasureChip';
import { CartesianTrellisHorizontalChip } from './cartesianTrellisHorizontalChip';
import { CartesianTrellisHorizontalDropZone } from './cartesianTrellisHorizontalDropZone';
import { CartesianTrellisHorizontalHierarchyChip } from './cartesianTrellisHorizontalHierarchyChip';
import { CartesianTrellisHorizontalValuesChip } from './cartesianTrellisHorizontalValuesChip';
import { CartesianTrellisVerticalChip } from './cartesianTrellisVerticalChip';
import { CartesianTrellisVerticalDropZone } from './cartesianTrellisVerticalDropZone';
import { CartesianTrellisVerticalHierarchyChip } from './cartesianTrellisVerticalHierarchyChip';
import { CartesianTrellisVerticalValuesChip } from './cartesianTrellisVerticalValuesChip';
import { CartesianValuesDropZone } from './cartesianValuesDropZone';
import { CartesianValuesMeasureChip } from './cartesianValuesMeasureChip';
import { CartesianValuesVisualTypes } from './cartesianValuesVisualTypes';
import { CartesianVisual } from './cartesianVisual';
import { CartesianVisualType } from './cartesianVisualType';
import { ChangeItemDescriptionData } from './changeItemDescriptionData';
import { ChangeUserLicenseObject } from './changeUserLicenseObject';
import { ClashDefaultOption } from './clashDefaultOption';
import { ClientLicenseType } from './clientLicenseType';
import { ColorMathFunction } from './colorMathFunction';
import { ComponentLog } from './componentLog';
import { ConditionConjunctionType } from './conditionConjunctionType';
import { ConnStringDscApiObject } from './connStringDscApiObject';
import { ConnectedItemsSearchCriteria } from './connectedItemsSearchCriteria';
import { ConnectionSearchCriteria } from './connectionSearchCriteria';
import { ConnectionStringData } from './connectionStringData';
import { ConnectionStringProperties } from './connectionStringProperties';
import { ConnectionStringType } from './connectionStringType';
import { ContentItemObject } from './contentItemObject';
import { ContentSearchParamsObject } from './contentSearchParamsObject';
import { ContentType } from './contentType';
import { ContentTypeObject } from './contentTypeObject';
import { CreateUserAdObject } from './createUserAdObject';
import { CreateUserDbObject } from './createUserDbObject';
import { CreateUserOpenIdObject } from './createUserOpenIdObject';
import { CreateUserSamlObject } from './createUserSamlObject';
import { CreatedThemeResult } from './createdThemeResult';
import { CsvDelimiter } from './csvDelimiter';
import { CubeAuthMethod } from './cubeAuthMethod';
import { CustomRootCAType } from './customRootCAType';
import { DataBaseRecognitionObject } from './dataBaseRecognitionObject';
import { DataCatalogDimension } from './dataCatalogDimension';
import { DataCatalogHierarchy } from './dataCatalogHierarchy';
import { DataCatalogHierarchyLevel } from './dataCatalogHierarchyLevel';
import { DataCatalogItem } from './dataCatalogItem';
import { DataCatalogMeasure } from './dataCatalogMeasure';
import { DataCatalogModelMetadata } from './dataCatalogModelMetadata';
import { DataCatalogProperty } from './dataCatalogProperty';
import { DataCatalogUpdateData } from './dataCatalogUpdateData';
import { DataFlowModelType } from './dataFlowModelType';
import { DataSourceTableResult } from './dataSourceTableResult';
import { DataSourceUsedTablesResult } from './dataSourceUsedTablesResult';
import { DataType } from './dataType';
import { DeleteHierarchyOverlayApiObject } from './deleteHierarchyOverlayApiObject';
import { DeleteMeasureOverlayApiObject } from './deleteMeasureOverlayApiObject';
import { DeleteTenantApiData } from './deleteTenantApiData';
import { DiscoverData } from './discoverData';
import { DiscoverDataCatalog } from './discoverDataCatalog';
import { DistributionLog } from './distributionLog';
import { DistributionType } from './distributionType';
import { DomainAdminPermissionAPIObject } from './domainAdminPermissionAPIObject';
import { DomainAdminPermissionType } from './domainAdminPermissionType';
import { DomainAdminPermissions } from './domainAdminPermissions';
import { DomainSecurityObject } from './domainSecurityObject';
import { DscApiData } from './dscApiData';
import { ElementSelectionData } from './elementSelectionData';
import { ElementSelectionDataType } from './elementSelectionDataType';
import { EnumerationOutput } from './enumerationOutput';
import { ErrorMessage } from './errorMessage';
import { EtlSyncModelColumnsType } from './etlSyncModelColumnsType';
import { EtlTaskSummary } from './etlTaskSummary';
import { EtlTaskSummaryAllOf } from './etlTaskSummaryAllOf';
import { EtlValidationMessage } from './etlValidationMessage';
import { ExecuteMasterFlowObject } from './executeMasterFlowObject';
import { ExecuteMasterFlowResult } from './executeMasterFlowResult';
import { ExecuteScheduleApiData } from './executeScheduleApiData';
import { ExecutionSettings } from './executionSettings';
import { ExecutionViewData } from './executionViewData';
import { ExportContentApiData } from './exportContentApiData';
import { ExportData } from './exportData';
import { ExportOptions } from './exportOptions';
import { ExternalParameters } from './externalParameters';
import { FilterHierarchyType } from './filterHierarchyType';
import { FilterParameter } from './filterParameter';
import { FilterValuesType } from './filterValuesType';
import { FirstWorkday } from './firstWorkday';
import { FolderTenantObject } from './folderTenantObject';
import { FormulaData } from './formulaData';
import { FtpDataMode } from './ftpDataMode';
import { FtpSecurityType } from './ftpSecurityType';
import { FtpSettings } from './ftpSettings';
import { GaType } from './gaType';
import { GetItemParamsObject } from './getItemParamsObject';
import { GetOverlaySecurityObject } from './getOverlaySecurityObject';
import { GridColorChip } from './gridColorChip';
import { GridColorDropZone } from './gridColorDropZone';
import { GridColorHierarchyChip } from './gridColorHierarchyChip';
import { GridColorMeasureChip } from './gridColorMeasureChip';
import { GridColorOption } from './gridColorOption';
import { GridColsChip } from './gridColsChip';
import { GridColsDropZone } from './gridColsDropZone';
import { GridColsHierarchyChip } from './gridColsHierarchyChip';
import { GridColsValuesChip } from './gridColsValuesChip';
import { GridFilterChip } from './gridFilterChip';
import { GridFilterDropZone } from './gridFilterDropZone';
import { GridFilterHierarchyChip } from './gridFilterHierarchyChip';
import { GridFilterValuesChip } from './gridFilterValuesChip';
import { GridIndicatorDropZone } from './gridIndicatorDropZone';
import { GridIndicatorMeasureChip } from './gridIndicatorMeasureChip';
import { GridRowsChip } from './gridRowsChip';
import { GridRowsDropZone } from './gridRowsDropZone';
import { GridRowsHierarchyChip } from './gridRowsHierarchyChip';
import { GridRowsValuesChip } from './gridRowsValuesChip';
import { GridSizeDropZone } from './gridSizeDropZone';
import { GridSizeMeasureChip } from './gridSizeMeasureChip';
import { GridTooltipChip } from './gridTooltipChip';
import { GridTooltipDropZone } from './gridTooltipDropZone';
import { GridTooltipHierarchyChip } from './gridTooltipHierarchyChip';
import { GridTooltipMeasureChip } from './gridTooltipMeasureChip';
import { GridValuesDropZone } from './gridValuesDropZone';
import { GridValuesMeasureChip } from './gridValuesMeasureChip';
import { GridVisual } from './gridVisual';
import { HideMemberType } from './hideMemberType';
import { HierarchyCategory } from './hierarchyCategory';
import { HierarchyElementSelection } from './hierarchyElementSelection';
import { HierarchyMeasureSecurity } from './hierarchyMeasureSecurity';
import { HierarchyMeasureSecurityApiObject } from './hierarchyMeasureSecurityApiObject';
import { HierarchyOverlayData } from './hierarchyOverlayData';
import { HierarchyOverlayProperty } from './hierarchyOverlayProperty';
import { HierarchyOverlayToDeleteData } from './hierarchyOverlayToDeleteData';
import { HierarchyType } from './hierarchyType';
import { HubApiObject } from './hubApiObject';
import { ImportApiResultObject } from './importApiResultObject';
import { ImportMaterializedModelObject } from './importMaterializedModelObject';
import { IsolationMode } from './isolationMode';
import { ItemId } from './itemId';
import { ItemParentApiData } from './itemParentApiData';
import { ItemRolePair } from './itemRolePair';
import { ItemRolesForRemoval } from './itemRolesForRemoval';
import { ItemRolesToBeAdded } from './itemRolesToBeAdded';
import { ItemType } from './itemType';
import { ItemsForFavorites } from './itemsForFavorites';
import { ItemsToCopy } from './itemsToCopy';
import { ItemsToMove } from './itemsToMove';
import { JoinType } from './joinType';
import { KpiAttributeType } from './kpiAttributeType';
import { LanguageType } from './languageType';
import { LdapGroupDetails } from './ldapGroupDetails';
import { LdapGroupIdentifier } from './ldapGroupIdentifier';
import { LdapSearchObject } from './ldapSearchObject';
import { LdapSearchType } from './ldapSearchType';
import { LdapUserObject } from './ldapUserObject';
import { LdapUsersSearchObject } from './ldapUsersSearchObject';
import { LicenseCountObject } from './licenseCountObject';
import { LicenseStatus } from './licenseStatus';
import { ListData } from './listData';
import { MSOlapProperties } from './mSOlapProperties';
import { MapColorChip } from './mapColorChip';
import { MapColorDropZone } from './mapColorDropZone';
import { MapColorHierarchyChip } from './mapColorHierarchyChip';
import { MapColorMeasureChip } from './mapColorMeasureChip';
import { MapDetailsDropZone } from './mapDetailsDropZone';
import { MapDetailsHierarchyChip } from './mapDetailsHierarchyChip';
import { MapFilterDropZone } from './mapFilterDropZone';
import { MapFilterHierarchyChip } from './mapFilterHierarchyChip';
import { MapLocationChip } from './mapLocationChip';
import { MapLocationDropZone } from './mapLocationDropZone';
import { MapLocationHierarchyChip } from './mapLocationHierarchyChip';
import { MapLocationMeasureChip } from './mapLocationMeasureChip';
import { MapMotionDropZone } from './mapMotionDropZone';
import { MapMotionHierarchyChip } from './mapMotionHierarchyChip';
import { MapSizeDropZone } from './mapSizeDropZone';
import { MapSizeMeasureChip } from './mapSizeMeasureChip';
import { MapTooltipChip } from './mapTooltipChip';
import { MapTooltipDropZone } from './mapTooltipDropZone';
import { MapTooltipHierarchyChip } from './mapTooltipHierarchyChip';
import { MapTooltipMeasureChip } from './mapTooltipMeasureChip';
import { MapVisual } from './mapVisual';
import { MapVisualType } from './mapVisualType';
import { MaskingMethodType } from './maskingMethodType';
import { MasterFlowErrorType } from './masterFlowErrorType';
import { MasterFlowFindDataSourceObject } from './masterFlowFindDataSourceObject';
import { MasterFlowModelNameObject } from './masterFlowModelNameObject';
import { MasterFlowOtherObject } from './masterFlowOtherObject';
import { MasterFlowProgressResult } from './masterFlowProgressResult';
import { MasterFlowSchemasObject } from './masterFlowSchemasObject';
import { MasterFlowSourceConnectionObject } from './masterFlowSourceConnectionObject';
import { MasterFlowSourceObject } from './masterFlowSourceObject';
import { MasterFlowTargetConnectionObject } from './masterFlowTargetConnectionObject';
import { MasterFlowTargetObject } from './masterFlowTargetObject';
import { MasterFlowUpdatedVariableResult } from './masterFlowUpdatedVariableResult';
import { MasterFlowValidationResult } from './masterFlowValidationResult';
import { MasterFlowVariableConnectionObject } from './masterFlowVariableConnectionObject';
import { MasterFlowVariableObject } from './masterFlowVariableObject';
import { MasterFlowVariableValueObject } from './masterFlowVariableValueObject';
import { MasterFlowVariablesResult } from './masterFlowVariablesResult';
import { MasterFlowVariablesValueObject } from './masterFlowVariablesValueObject';
import { MasterNodeError } from './masterNodeError';
import { MaterializedItemObject } from './materializedItemObject';
import { MaterializedItemType } from './materializedItemType';
import { MaterializedRoleAssignmentType } from './materializedRoleAssignmentType';
import { MeasureFormat } from './measureFormat';
import { MeasureGroup } from './measureGroup';
import { MeasureMapOptions } from './measureMapOptions';
import { MeasureOverlayData } from './measureOverlayData';
import { MeasureOverlayProperty } from './measureOverlayProperty';
import { MeasureOverlayToDeleteData } from './measureOverlayToDeleteData';
import { MemberDataApi } from './memberDataApi';
import { MembersSecurity } from './membersSecurity';
import { MembersSecurityApiObject } from './membersSecurityApiObject';
import { MetaDataTranslation } from './metaDataTranslation';
import { MetadataDisplayType } from './metadataDisplayType';
import { ModelAttributeType } from './modelAttributeType';
import { ModelConnection } from './modelConnection';
import { ModelDataCatalog } from './modelDataCatalog';
import { ModelDataFlowSourceInfo } from './modelDataFlowSourceInfo';
import { ModelProcessDateObject } from './modelProcessDateObject';
import { ModelProcessDateResult } from './modelProcessDateResult';
import { ModelRecognitionObject } from './modelRecognitionObject';
import { ModelScheduleOnDemandObject } from './modelScheduleOnDemandObject';
import { ModelScheduleOnDemandResult } from './modelScheduleOnDemandResult';
import { ModelSyncColumnsSettings } from './modelSyncColumnsSettings';
import { ModelingAggregationMapping } from './modelingAggregationMapping';
import { ModelingColumn } from './modelingColumn';
import { ModelingColumnCategories } from './modelingColumnCategories';
import { ModelingColumnType } from './modelingColumnType';
import { ModelingConfigTranslation } from './modelingConfigTranslation';
import { ModelingFolderTranslations } from './modelingFolderTranslations';
import { ModelingHierarchy } from './modelingHierarchy';
import { ModelingHierarchyLevel } from './modelingHierarchyLevel';
import { ModelingKPI } from './modelingKPI';
import { ModelingKPIAllOf } from './modelingKPIAllOf';
import { ModelingMeasure } from './modelingMeasure';
import { ModelingModel } from './modelingModel';
import { ModelingProperty } from './modelingProperty';
import { ModelingRelationship } from './modelingRelationship';
import { ModelingRelationshipColumnPair } from './modelingRelationshipColumnPair';
import { ModelingServerInfo } from './modelingServerInfo';
import { ModelingTable } from './modelingTable';
import { ModelingTableType } from './modelingTableType';
import { ModelingTranslation } from './modelingTranslation';
import { ModifiedItemsResult } from './modifiedItemsResult';
import { MsOlapConnectionType } from './msOlapConnectionType';
import { NewFolderApiData } from './newFolderApiData';
import { NlpQueryExportData } from './nlpQueryExportData';
import { NotificationIndicatorsResult } from './notificationIndicatorsResult';
import { OauthDataSourceSettings } from './oauthDataSourceSettings';
import { OdbcDirectQueryOptions } from './odbcDirectQueryOptions';
import { OpenIdAuthType } from './openIdAuthType';
import { OperatorType } from './operatorType';
import { PaperType } from './paperType';
import { ParentChildOrphanHandlingType } from './parentChildOrphanHandlingType';
import { ParentChildRollupType } from './parentChildRollupType';
import { PieApiObject } from './pieApiObject';
import { PrintingComponentType } from './printingComponentType';
import { PrintingOutputType } from './printingOutputType';
import { PrintingSummaryLog } from './printingSummaryLog';
import { PrintingSummaryLogHolder } from './printingSummaryLogHolder';
import { PrintingSummaryLogHolderAllOf } from './printingSummaryLogHolderAllOf';
import { ProPermissionBitIndex } from './proPermissionBitIndex';
import { ProPermissions } from './proPermissions';
import { ProProfileApiData } from './proProfileApiData';
import { ProfileRolesData } from './profileRolesData';
import { PulseClientData } from './pulseClientData';
import { PyramidContentItem } from './pyramidContentItem';
import { PyramidItemIdentifier } from './pyramidItemIdentifier';
import { PyramidViewUserObject } from './pyramidViewUserObject';
import { QueryCacheMode } from './queryCacheMode';
import { QueryExportData } from './queryExportData';
import { QueryLog } from './queryLog';
import { QueryOptions } from './queryOptions';
import { QueryTotalPosition } from './queryTotalPosition';
import { QueryTotalSettings } from './queryTotalSettings';
import { RelatedItemData } from './relatedItemData';
import { RenameItemApiData } from './renameItemApiData';
import { RoleAdGroupsModifyObject } from './roleAdGroupsModifyObject';
import { RoleAssignmentType } from './roleAssignmentType';
import { RoleData } from './roleData';
import { RoleMinimalData } from './roleMinimalData';
import { RoleToItemApiData } from './roleToItemApiData';
import { RolesInItemRemovalObject } from './rolesInItemRemovalObject';
import { RootFolderType } from './rootFolderType';
import { SapBwServerConnectionType } from './sapBwServerConnectionType';
import { ScatterColorChip } from './scatterColorChip';
import { ScatterColorDropZone } from './scatterColorDropZone';
import { ScatterColorHierarchyChip } from './scatterColorHierarchyChip';
import { ScatterColorMeasureChip } from './scatterColorMeasureChip';
import { ScatterDetailsDropZone } from './scatterDetailsDropZone';
import { ScatterDetailsHierarchyChip } from './scatterDetailsHierarchyChip';
import { ScatterFilterChip } from './scatterFilterChip';
import { ScatterFilterDropZone } from './scatterFilterDropZone';
import { ScatterFilterHierarchyChip } from './scatterFilterHierarchyChip';
import { ScatterFilterValuesChip } from './scatterFilterValuesChip';
import { ScatterLabelsChip } from './scatterLabelsChip';
import { ScatterLabelsDropZone } from './scatterLabelsDropZone';
import { ScatterLabelsHierarchyChip } from './scatterLabelsHierarchyChip';
import { ScatterLabelsMeasureChip } from './scatterLabelsMeasureChip';
import { ScatterMotionDropZone } from './scatterMotionDropZone';
import { ScatterMotionHierarchyChip } from './scatterMotionHierarchyChip';
import { ScatterShapeChip } from './scatterShapeChip';
import { ScatterShapeDropZone } from './scatterShapeDropZone';
import { ScatterShapeHierarchyChip } from './scatterShapeHierarchyChip';
import { ScatterShapeMeasureChip } from './scatterShapeMeasureChip';
import { ScatterSizeDropZone } from './scatterSizeDropZone';
import { ScatterSizeMeasureChip } from './scatterSizeMeasureChip';
import { ScatterTooltipChip } from './scatterTooltipChip';
import { ScatterTooltipDropZone } from './scatterTooltipDropZone';
import { ScatterTooltipHierarchyChip } from './scatterTooltipHierarchyChip';
import { ScatterTooltipMeasureChip } from './scatterTooltipMeasureChip';
import { ScatterTrellisHorizontalChip } from './scatterTrellisHorizontalChip';
import { ScatterTrellisHorizontalDropZone } from './scatterTrellisHorizontalDropZone';
import { ScatterTrellisHorizontalHierarchyChip } from './scatterTrellisHorizontalHierarchyChip';
import { ScatterTrellisHorizontalValuesChip } from './scatterTrellisHorizontalValuesChip';
import { ScatterTrellisVerticalChip } from './scatterTrellisVerticalChip';
import { ScatterTrellisVerticalDropZone } from './scatterTrellisVerticalDropZone';
import { ScatterTrellisVerticalHierarchyChip } from './scatterTrellisVerticalHierarchyChip';
import { ScatterTrellisVerticalValuesChip } from './scatterTrellisVerticalValuesChip';
import { ScatterVisual } from './scatterVisual';
import { ScatterVisualType } from './scatterVisualType';
import { ScatterXValuesDropZone } from './scatterXValuesDropZone';
import { ScatterXValuesMeasureChip } from './scatterXValuesMeasureChip';
import { ScatterYValuesDropZone } from './scatterYValuesDropZone';
import { ScatterYValuesMeasureChip } from './scatterYValuesMeasureChip';
import { ScheduleDataType } from './scheduleDataType';
import { ScheduleSearchCriteria } from './scheduleSearchCriteria';
import { ScheduleStatus } from './scheduleStatus';
import { ScheduleType } from './scheduleType';
import { ScheduleViewObject } from './scheduleViewObject';
import { ScientistPermissionBitIndex } from './scientistPermissionBitIndex';
import { ScientistPermissions } from './scientistPermissions';
import { ScientistProfileApiData } from './scientistProfileApiData';
import { SearchAdGroupUsersData } from './searchAdGroupUsersData';
import { SearchAdUserGroupsData } from './searchAdUserGroupsData';
import { SearchCriteria } from './searchCriteria';
import { SearchMatchType } from './searchMatchType';
import { SearchRootFolderType } from './searchRootFolderType';
import { SecurityType } from './securityType';
import { SegmentColorChip } from './segmentColorChip';
import { SegmentColorDropZone } from './segmentColorDropZone';
import { SegmentColorHierarchyChip } from './segmentColorHierarchyChip';
import { SegmentColorMeasureChip } from './segmentColorMeasureChip';
import { SegmentDetailsDropZone } from './segmentDetailsDropZone';
import { SegmentDetailsHierarchyChip } from './segmentDetailsHierarchyChip';
import { SegmentFilterChip } from './segmentFilterChip';
import { SegmentFilterDropZone } from './segmentFilterDropZone';
import { SegmentFilterHierarchyChip } from './segmentFilterHierarchyChip';
import { SegmentFilterValuesChip } from './segmentFilterValuesChip';
import { SegmentLabelsChip } from './segmentLabelsChip';
import { SegmentLabelsDropZone } from './segmentLabelsDropZone';
import { SegmentLabelsHierarchyChip } from './segmentLabelsHierarchyChip';
import { SegmentLabelsMeasureChip } from './segmentLabelsMeasureChip';
import { SegmentMotionDropZone } from './segmentMotionDropZone';
import { SegmentMotionHierarchyChip } from './segmentMotionHierarchyChip';
import { SegmentSizeDropZone } from './segmentSizeDropZone';
import { SegmentSizeMeasureChip } from './segmentSizeMeasureChip';
import { SegmentTooltipChip } from './segmentTooltipChip';
import { SegmentTooltipDropZone } from './segmentTooltipDropZone';
import { SegmentTooltipHierarchyChip } from './segmentTooltipHierarchyChip';
import { SegmentTooltipMeasureChip } from './segmentTooltipMeasureChip';
import { SegmentTrellisHorizontalChip } from './segmentTrellisHorizontalChip';
import { SegmentTrellisHorizontalDropZone } from './segmentTrellisHorizontalDropZone';
import { SegmentTrellisHorizontalHierarchyChip } from './segmentTrellisHorizontalHierarchyChip';
import { SegmentTrellisHorizontalValuesChip } from './segmentTrellisHorizontalValuesChip';
import { SegmentTrellisVerticalChip } from './segmentTrellisVerticalChip';
import { SegmentTrellisVerticalDropZone } from './segmentTrellisVerticalDropZone';
import { SegmentTrellisVerticalHierarchyChip } from './segmentTrellisVerticalHierarchyChip';
import { SegmentTrellisVerticalValuesChip } from './segmentTrellisVerticalValuesChip';
import { SegmentValuesDropZone } from './segmentValuesDropZone';
import { SegmentValuesMeasureChip } from './segmentValuesMeasureChip';
import { SegmentVisual } from './segmentVisual';
import { SegmentVisualType } from './segmentVisualType';
import { ServerAuthenticationMethod } from './serverAuthenticationMethod';
import { ServerData } from './serverData';
import { ServerEffectiveUserName } from './serverEffectiveUserName';
import { ServiceStatus } from './serviceStatus';
import { SimpleModifierResult } from './simpleModifierResult';
import { SizeDropZoneOptions } from './sizeDropZoneOptions';
import { SizeMathFunction } from './sizeMathFunction';
import { SparkTransportMode } from './sparkTransportMode';
import { SyntaxType } from './syntaxType';
import { TabularColorChip } from './tabularColorChip';
import { TabularColorDropZone } from './tabularColorDropZone';
import { TabularColorHierarchyChip } from './tabularColorHierarchyChip';
import { TabularColorMeasureChip } from './tabularColorMeasureChip';
import { TabularColsChip } from './tabularColsChip';
import { TabularColsDropZone } from './tabularColsDropZone';
import { TabularColsHierarchyChip } from './tabularColsHierarchyChip';
import { TabularColsMeasureChip } from './tabularColsMeasureChip';
import { TabularFilterDropZone } from './tabularFilterDropZone';
import { TabularFilterHierarchyChip } from './tabularFilterHierarchyChip';
import { TabularSizeDropZone } from './tabularSizeDropZone';
import { TabularSizeMeasureChip } from './tabularSizeMeasureChip';
import { TabularTooltipChip } from './tabularTooltipChip';
import { TabularTooltipDropZone } from './tabularTooltipDropZone';
import { TabularTooltipHierarchyChip } from './tabularTooltipHierarchyChip';
import { TabularTooltipMeasureChip } from './tabularTooltipMeasureChip';
import { TabularVisual } from './tabularVisual';
import { TagData } from './tagData';
import { TagType } from './tagType';
import { TagUsageApiData } from './tagUsageApiData';
import { TargetParameter } from './targetParameter';
import { TaskStatus } from './taskStatus';
import { TaskSummary } from './taskSummary';
import { TaskUserApiData } from './taskUserApiData';
import { TaskViewData } from './taskViewData';
import { TenantLicenseTypeData } from './tenantLicenseTypeData';
import { TenantObject } from './tenantObject';
import { TenantSettings } from './tenantSettings';
import { TenantUsersGetObject } from './tenantUsersGetObject';
import { ThemeApiObject } from './themeApiObject';
import { ThemeListObject } from './themeListObject';
import { ThemeToItemsApiObject } from './themeToItemsApiObject';
import { ToggleUserApiData } from './toggleUserApiData';
import { TotalsSettings } from './totalsSettings';
import { UpdateSchemaValidation } from './updateSchemaValidation';
import { UpdateTenantSeatsObject } from './updateTenantSeatsObject';
import { UpdateUserAdObject } from './updateUserAdObject';
import { UpdateUserDbObject } from './updateUserDbObject';
import { UpdateUserOpenIdObject } from './updateUserOpenIdObject';
import { UpdateUserSamlObject } from './updateUserSamlObject';
import { UserCredentials } from './userCredentials';
import { UserOpenIdCredentials } from './userOpenIdCredentials';
import { UserPhone } from './userPhone';
import { UserProfileType } from './userProfileType';
import { UserRolesData } from './userRolesData';
import { UserSamlCredentials } from './userSamlCredentials';
import { UserStatusID } from './userStatusID';
import { UserTokenCredentials } from './userTokenCredentials';
import { ValidRootFolderType } from './validRootFolderType';
import { ValuesDropZoneOptions } from './valuesDropZoneOptions';
import { VariableType } from './variableType';
import { ViewerPermissionBitIndex } from './viewerPermissionBitIndex';
import { ViewerPermissions } from './viewerPermissions';
import { ViewerProfileApiData } from './viewerProfileApiData';
import { Visuals } from './visuals';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccessType": AccessType,
        "AdminType": AdminType,
        "AggregationType": AggregationType,
        "AnalystPermissionBitIndex": AnalystPermissionBitIndex,
        "ApiResponseFormat": ApiResponseFormat,
        "AxisTotalsType": AxisTotalsType,
        "BulkWritingType": BulkWritingType,
        "BwDatabaseListType": BwDatabaseListType,
        "BwInfoAreaTreeViewType": BwInfoAreaTreeViewType,
        "CartesianBarVisualType": CartesianBarVisualType,
        "CartesianColumnVisualType": CartesianColumnVisualType,
        "CartesianLineVisualType": CartesianLineVisualType,
        "CartesianStackedBarVisualType": CartesianStackedBarVisualType,
        "CartesianStackedColumnVisualType": CartesianStackedColumnVisualType,
        "CartesianVisualType": CartesianVisualType,
        "ClashDefaultOption": ClashDefaultOption,
        "ClientLicenseType": ClientLicenseType,
        "ColorMathFunction": ColorMathFunction,
        "ConditionConjunctionType": ConditionConjunctionType,
        "ConnectionStringType": ConnectionStringType,
        "ContentItemObject": ContentItemObject,
        "ContentType": ContentType,
        "ContentTypeObject": ContentTypeObject,
        "CsvDelimiter": CsvDelimiter,
        "CubeAuthMethod": CubeAuthMethod,
        "CustomRootCAType": CustomRootCAType,
        "DataFlowModelType": DataFlowModelType,
        "DataType": DataType,
        "DistributionType": DistributionType,
        "DomainAdminPermissionType": DomainAdminPermissionType,
        "ElementSelectionDataType": ElementSelectionDataType,
        "EtlSyncModelColumnsType": EtlSyncModelColumnsType,
        "FilterHierarchyType": FilterHierarchyType,
        "FilterValuesType": FilterValuesType,
        "FirstWorkday": FirstWorkday,
        "FtpDataMode": FtpDataMode,
        "FtpSecurityType": FtpSecurityType,
        "GaType": GaType,
        "GridColorOption": GridColorOption,
        "HideMemberType": HideMemberType,
        "HierarchyCategory": HierarchyCategory,
        "HierarchyOverlayProperty": HierarchyOverlayProperty,
        "HierarchyType": HierarchyType,
        "IsolationMode": IsolationMode,
        "ItemType": ItemType,
        "JoinType": JoinType,
        "KpiAttributeType": KpiAttributeType,
        "LanguageType": LanguageType,
        "LdapSearchType": LdapSearchType,
        "LicenseStatus": LicenseStatus,
        "MapVisualType": MapVisualType,
        "MaskingMethodType": MaskingMethodType,
        "MasterFlowErrorType": MasterFlowErrorType,
        "MaterializedItemType": MaterializedItemType,
        "MaterializedRoleAssignmentType": MaterializedRoleAssignmentType,
        "MeasureFormat": MeasureFormat,
        "MeasureMapOptions": MeasureMapOptions,
        "MeasureOverlayProperty": MeasureOverlayProperty,
        "MetadataDisplayType": MetadataDisplayType,
        "ModelAttributeType": ModelAttributeType,
        "ModelingColumnCategories": ModelingColumnCategories,
        "ModelingColumnType": ModelingColumnType,
        "ModelingTableType": ModelingTableType,
        "MsOlapConnectionType": MsOlapConnectionType,
        "OpenIdAuthType": OpenIdAuthType,
        "OperatorType": OperatorType,
        "PaperType": PaperType,
        "ParentChildOrphanHandlingType": ParentChildOrphanHandlingType,
        "ParentChildRollupType": ParentChildRollupType,
        "PrintingComponentType": PrintingComponentType,
        "PrintingOutputType": PrintingOutputType,
        "ProPermissionBitIndex": ProPermissionBitIndex,
        "QueryCacheMode": QueryCacheMode,
        "QueryTotalPosition": QueryTotalPosition,
        "RoleAssignmentType": RoleAssignmentType,
        "RootFolderType": RootFolderType,
        "SapBwServerConnectionType": SapBwServerConnectionType,
        "ScatterVisualType": ScatterVisualType,
        "ScheduleDataType": ScheduleDataType,
        "ScheduleStatus": ScheduleStatus,
        "ScheduleType": ScheduleType,
        "ScientistPermissionBitIndex": ScientistPermissionBitIndex,
        "SearchMatchType": SearchMatchType,
        "SearchRootFolderType": SearchRootFolderType,
        "SecurityType": SecurityType,
        "SegmentVisualType": SegmentVisualType,
        "ServerAuthenticationMethod": ServerAuthenticationMethod,
        "ServerEffectiveUserName": ServerEffectiveUserName,
        "ServiceStatus": ServiceStatus,
        "SizeDropZoneOptions": SizeDropZoneOptions,
        "SizeMathFunction": SizeMathFunction,
        "SparkTransportMode": SparkTransportMode,
        "SyntaxType": SyntaxType,
        "TagType": TagType,
        "TaskStatus": TaskStatus,
        "UpdateSchemaValidation": UpdateSchemaValidation,
        "UserProfileType": UserProfileType,
        "UserStatusID": UserStatusID,
        "ValidRootFolderType": ValidRootFolderType,
        "ValuesDropZoneOptions": ValuesDropZoneOptions,
        "VariableType": VariableType,
        "ViewerPermissionBitIndex": ViewerPermissionBitIndex,
}

let typeMap: {[index: string]: any} = {
    "AddHierarchyOverlayApiObject": AddHierarchyOverlayApiObject,
    "AddMeasureOverlayApiObject": AddMeasureOverlayApiObject,
    "AddUserRoleData": AddUserRoleData,
    "AddUsersRoleData": AddUsersRoleData,
    "AdditionalServerProperties": AdditionalServerProperties,
    "AdminMultiTenantData": AdminMultiTenantData,
    "AdminTypeApiData": AdminTypeApiData,
    "AnalystProfileApiData": AnalystProfileApiData,
    "AnalyticsPermissions": AnalyticsPermissions,
    "ApiResultLicenseStatus": ApiResultLicenseStatus,
    "ApiResultTaskStatus": ApiResultTaskStatus,
    "AttributeTranslation": AttributeTranslation,
    "CartesianCategoriesDropZone": CartesianCategoriesDropZone,
    "CartesianCategoriesHierarchyChip": CartesianCategoriesHierarchyChip,
    "CartesianColorChip": CartesianColorChip,
    "CartesianColorDropZone": CartesianColorDropZone,
    "CartesianColorHierarchyChip": CartesianColorHierarchyChip,
    "CartesianColorMeasureChip": CartesianColorMeasureChip,
    "CartesianFilterChip": CartesianFilterChip,
    "CartesianFilterDropZone": CartesianFilterDropZone,
    "CartesianFilterHierarchyChip": CartesianFilterHierarchyChip,
    "CartesianFilterValuesChip": CartesianFilterValuesChip,
    "CartesianLabelsChip": CartesianLabelsChip,
    "CartesianLabelsDropZone": CartesianLabelsDropZone,
    "CartesianLabelsHierarchyChip": CartesianLabelsHierarchyChip,
    "CartesianLabelsMeasureChip": CartesianLabelsMeasureChip,
    "CartesianMotionDropZone": CartesianMotionDropZone,
    "CartesianMotionHierarchyChip": CartesianMotionHierarchyChip,
    "CartesianShapeChip": CartesianShapeChip,
    "CartesianShapeDropZone": CartesianShapeDropZone,
    "CartesianShapeHierarchyChip": CartesianShapeHierarchyChip,
    "CartesianShapeMeasureChip": CartesianShapeMeasureChip,
    "CartesianSizeDropZone": CartesianSizeDropZone,
    "CartesianSizeMeasureChip": CartesianSizeMeasureChip,
    "CartesianTooltipChip": CartesianTooltipChip,
    "CartesianTooltipDropZone": CartesianTooltipDropZone,
    "CartesianTooltipHierarchyChip": CartesianTooltipHierarchyChip,
    "CartesianTooltipMeasureChip": CartesianTooltipMeasureChip,
    "CartesianTrellisHorizontalChip": CartesianTrellisHorizontalChip,
    "CartesianTrellisHorizontalDropZone": CartesianTrellisHorizontalDropZone,
    "CartesianTrellisHorizontalHierarchyChip": CartesianTrellisHorizontalHierarchyChip,
    "CartesianTrellisHorizontalValuesChip": CartesianTrellisHorizontalValuesChip,
    "CartesianTrellisVerticalChip": CartesianTrellisVerticalChip,
    "CartesianTrellisVerticalDropZone": CartesianTrellisVerticalDropZone,
    "CartesianTrellisVerticalHierarchyChip": CartesianTrellisVerticalHierarchyChip,
    "CartesianTrellisVerticalValuesChip": CartesianTrellisVerticalValuesChip,
    "CartesianValuesDropZone": CartesianValuesDropZone,
    "CartesianValuesMeasureChip": CartesianValuesMeasureChip,
    "CartesianValuesVisualTypes": CartesianValuesVisualTypes,
    "CartesianVisual": CartesianVisual,
    "ChangeItemDescriptionData": ChangeItemDescriptionData,
    "ChangeUserLicenseObject": ChangeUserLicenseObject,
    "ComponentLog": ComponentLog,
    "ConnStringDscApiObject": ConnStringDscApiObject,
    "ConnectedItemsSearchCriteria": ConnectedItemsSearchCriteria,
    "ConnectionSearchCriteria": ConnectionSearchCriteria,
    "ConnectionStringData": ConnectionStringData,
    "ConnectionStringProperties": ConnectionStringProperties,
    "ContentSearchParamsObject": ContentSearchParamsObject,
    "CreateUserAdObject": CreateUserAdObject,
    "CreateUserDbObject": CreateUserDbObject,
    "CreateUserOpenIdObject": CreateUserOpenIdObject,
    "CreateUserSamlObject": CreateUserSamlObject,
    "CreatedThemeResult": CreatedThemeResult,
    "DataBaseRecognitionObject": DataBaseRecognitionObject,
    "DataCatalogDimension": DataCatalogDimension,
    "DataCatalogHierarchy": DataCatalogHierarchy,
    "DataCatalogHierarchyLevel": DataCatalogHierarchyLevel,
    "DataCatalogItem": DataCatalogItem,
    "DataCatalogMeasure": DataCatalogMeasure,
    "DataCatalogModelMetadata": DataCatalogModelMetadata,
    "DataCatalogProperty": DataCatalogProperty,
    "DataCatalogUpdateData": DataCatalogUpdateData,
    "DataSourceTableResult": DataSourceTableResult,
    "DataSourceUsedTablesResult": DataSourceUsedTablesResult,
    "DeleteHierarchyOverlayApiObject": DeleteHierarchyOverlayApiObject,
    "DeleteMeasureOverlayApiObject": DeleteMeasureOverlayApiObject,
    "DeleteTenantApiData": DeleteTenantApiData,
    "DiscoverData": DiscoverData,
    "DiscoverDataCatalog": DiscoverDataCatalog,
    "DistributionLog": DistributionLog,
    "DomainAdminPermissionAPIObject": DomainAdminPermissionAPIObject,
    "DomainAdminPermissions": DomainAdminPermissions,
    "DomainSecurityObject": DomainSecurityObject,
    "DscApiData": DscApiData,
    "ElementSelectionData": ElementSelectionData,
    "EnumerationOutput": EnumerationOutput,
    "ErrorMessage": ErrorMessage,
    "EtlTaskSummary": EtlTaskSummary,
    "EtlTaskSummaryAllOf": EtlTaskSummaryAllOf,
    "EtlValidationMessage": EtlValidationMessage,
    "ExecuteMasterFlowObject": ExecuteMasterFlowObject,
    "ExecuteMasterFlowResult": ExecuteMasterFlowResult,
    "ExecuteScheduleApiData": ExecuteScheduleApiData,
    "ExecutionSettings": ExecutionSettings,
    "ExecutionViewData": ExecutionViewData,
    "ExportContentApiData": ExportContentApiData,
    "ExportData": ExportData,
    "ExportOptions": ExportOptions,
    "ExternalParameters": ExternalParameters,
    "FilterParameter": FilterParameter,
    "FolderTenantObject": FolderTenantObject,
    "FormulaData": FormulaData,
    "FtpSettings": FtpSettings,
    "GetItemParamsObject": GetItemParamsObject,
    "GetOverlaySecurityObject": GetOverlaySecurityObject,
    "GridColorChip": GridColorChip,
    "GridColorDropZone": GridColorDropZone,
    "GridColorHierarchyChip": GridColorHierarchyChip,
    "GridColorMeasureChip": GridColorMeasureChip,
    "GridColsChip": GridColsChip,
    "GridColsDropZone": GridColsDropZone,
    "GridColsHierarchyChip": GridColsHierarchyChip,
    "GridColsValuesChip": GridColsValuesChip,
    "GridFilterChip": GridFilterChip,
    "GridFilterDropZone": GridFilterDropZone,
    "GridFilterHierarchyChip": GridFilterHierarchyChip,
    "GridFilterValuesChip": GridFilterValuesChip,
    "GridIndicatorDropZone": GridIndicatorDropZone,
    "GridIndicatorMeasureChip": GridIndicatorMeasureChip,
    "GridRowsChip": GridRowsChip,
    "GridRowsDropZone": GridRowsDropZone,
    "GridRowsHierarchyChip": GridRowsHierarchyChip,
    "GridRowsValuesChip": GridRowsValuesChip,
    "GridSizeDropZone": GridSizeDropZone,
    "GridSizeMeasureChip": GridSizeMeasureChip,
    "GridTooltipChip": GridTooltipChip,
    "GridTooltipDropZone": GridTooltipDropZone,
    "GridTooltipHierarchyChip": GridTooltipHierarchyChip,
    "GridTooltipMeasureChip": GridTooltipMeasureChip,
    "GridValuesDropZone": GridValuesDropZone,
    "GridValuesMeasureChip": GridValuesMeasureChip,
    "GridVisual": GridVisual,
    "HierarchyElementSelection": HierarchyElementSelection,
    "HierarchyMeasureSecurity": HierarchyMeasureSecurity,
    "HierarchyMeasureSecurityApiObject": HierarchyMeasureSecurityApiObject,
    "HierarchyOverlayData": HierarchyOverlayData,
    "HierarchyOverlayToDeleteData": HierarchyOverlayToDeleteData,
    "HubApiObject": HubApiObject,
    "ImportApiResultObject": ImportApiResultObject,
    "ImportMaterializedModelObject": ImportMaterializedModelObject,
    "ItemId": ItemId,
    "ItemParentApiData": ItemParentApiData,
    "ItemRolePair": ItemRolePair,
    "ItemRolesForRemoval": ItemRolesForRemoval,
    "ItemRolesToBeAdded": ItemRolesToBeAdded,
    "ItemsForFavorites": ItemsForFavorites,
    "ItemsToCopy": ItemsToCopy,
    "ItemsToMove": ItemsToMove,
    "LdapGroupDetails": LdapGroupDetails,
    "LdapGroupIdentifier": LdapGroupIdentifier,
    "LdapSearchObject": LdapSearchObject,
    "LdapUserObject": LdapUserObject,
    "LdapUsersSearchObject": LdapUsersSearchObject,
    "LicenseCountObject": LicenseCountObject,
    "ListData": ListData,
    "MSOlapProperties": MSOlapProperties,
    "MapColorChip": MapColorChip,
    "MapColorDropZone": MapColorDropZone,
    "MapColorHierarchyChip": MapColorHierarchyChip,
    "MapColorMeasureChip": MapColorMeasureChip,
    "MapDetailsDropZone": MapDetailsDropZone,
    "MapDetailsHierarchyChip": MapDetailsHierarchyChip,
    "MapFilterDropZone": MapFilterDropZone,
    "MapFilterHierarchyChip": MapFilterHierarchyChip,
    "MapLocationChip": MapLocationChip,
    "MapLocationDropZone": MapLocationDropZone,
    "MapLocationHierarchyChip": MapLocationHierarchyChip,
    "MapLocationMeasureChip": MapLocationMeasureChip,
    "MapMotionDropZone": MapMotionDropZone,
    "MapMotionHierarchyChip": MapMotionHierarchyChip,
    "MapSizeDropZone": MapSizeDropZone,
    "MapSizeMeasureChip": MapSizeMeasureChip,
    "MapTooltipChip": MapTooltipChip,
    "MapTooltipDropZone": MapTooltipDropZone,
    "MapTooltipHierarchyChip": MapTooltipHierarchyChip,
    "MapTooltipMeasureChip": MapTooltipMeasureChip,
    "MapVisual": MapVisual,
    "MasterFlowFindDataSourceObject": MasterFlowFindDataSourceObject,
    "MasterFlowModelNameObject": MasterFlowModelNameObject,
    "MasterFlowOtherObject": MasterFlowOtherObject,
    "MasterFlowProgressResult": MasterFlowProgressResult,
    "MasterFlowSchemasObject": MasterFlowSchemasObject,
    "MasterFlowSourceConnectionObject": MasterFlowSourceConnectionObject,
    "MasterFlowSourceObject": MasterFlowSourceObject,
    "MasterFlowTargetConnectionObject": MasterFlowTargetConnectionObject,
    "MasterFlowTargetObject": MasterFlowTargetObject,
    "MasterFlowUpdatedVariableResult": MasterFlowUpdatedVariableResult,
    "MasterFlowValidationResult": MasterFlowValidationResult,
    "MasterFlowVariableConnectionObject": MasterFlowVariableConnectionObject,
    "MasterFlowVariableObject": MasterFlowVariableObject,
    "MasterFlowVariableValueObject": MasterFlowVariableValueObject,
    "MasterFlowVariablesResult": MasterFlowVariablesResult,
    "MasterFlowVariablesValueObject": MasterFlowVariablesValueObject,
    "MasterNodeError": MasterNodeError,
    "MaterializedItemObject": MaterializedItemObject,
    "MeasureGroup": MeasureGroup,
    "MeasureOverlayData": MeasureOverlayData,
    "MeasureOverlayToDeleteData": MeasureOverlayToDeleteData,
    "MemberDataApi": MemberDataApi,
    "MembersSecurity": MembersSecurity,
    "MembersSecurityApiObject": MembersSecurityApiObject,
    "MetaDataTranslation": MetaDataTranslation,
    "ModelConnection": ModelConnection,
    "ModelDataCatalog": ModelDataCatalog,
    "ModelDataFlowSourceInfo": ModelDataFlowSourceInfo,
    "ModelProcessDateObject": ModelProcessDateObject,
    "ModelProcessDateResult": ModelProcessDateResult,
    "ModelRecognitionObject": ModelRecognitionObject,
    "ModelScheduleOnDemandObject": ModelScheduleOnDemandObject,
    "ModelScheduleOnDemandResult": ModelScheduleOnDemandResult,
    "ModelSyncColumnsSettings": ModelSyncColumnsSettings,
    "ModelingAggregationMapping": ModelingAggregationMapping,
    "ModelingColumn": ModelingColumn,
    "ModelingConfigTranslation": ModelingConfigTranslation,
    "ModelingFolderTranslations": ModelingFolderTranslations,
    "ModelingHierarchy": ModelingHierarchy,
    "ModelingHierarchyLevel": ModelingHierarchyLevel,
    "ModelingKPI": ModelingKPI,
    "ModelingKPIAllOf": ModelingKPIAllOf,
    "ModelingMeasure": ModelingMeasure,
    "ModelingModel": ModelingModel,
    "ModelingProperty": ModelingProperty,
    "ModelingRelationship": ModelingRelationship,
    "ModelingRelationshipColumnPair": ModelingRelationshipColumnPair,
    "ModelingServerInfo": ModelingServerInfo,
    "ModelingTable": ModelingTable,
    "ModelingTranslation": ModelingTranslation,
    "ModifiedItemsResult": ModifiedItemsResult,
    "NewFolderApiData": NewFolderApiData,
    "NlpQueryExportData": NlpQueryExportData,
    "NotificationIndicatorsResult": NotificationIndicatorsResult,
    "OauthDataSourceSettings": OauthDataSourceSettings,
    "OdbcDirectQueryOptions": OdbcDirectQueryOptions,
    "PieApiObject": PieApiObject,
    "PrintingSummaryLog": PrintingSummaryLog,
    "PrintingSummaryLogHolder": PrintingSummaryLogHolder,
    "PrintingSummaryLogHolderAllOf": PrintingSummaryLogHolderAllOf,
    "ProPermissions": ProPermissions,
    "ProProfileApiData": ProProfileApiData,
    "ProfileRolesData": ProfileRolesData,
    "PulseClientData": PulseClientData,
    "PyramidContentItem": PyramidContentItem,
    "PyramidItemIdentifier": PyramidItemIdentifier,
    "PyramidViewUserObject": PyramidViewUserObject,
    "QueryExportData": QueryExportData,
    "QueryLog": QueryLog,
    "QueryOptions": QueryOptions,
    "QueryTotalSettings": QueryTotalSettings,
    "RelatedItemData": RelatedItemData,
    "RenameItemApiData": RenameItemApiData,
    "RoleAdGroupsModifyObject": RoleAdGroupsModifyObject,
    "RoleData": RoleData,
    "RoleMinimalData": RoleMinimalData,
    "RoleToItemApiData": RoleToItemApiData,
    "RolesInItemRemovalObject": RolesInItemRemovalObject,
    "ScatterColorChip": ScatterColorChip,
    "ScatterColorDropZone": ScatterColorDropZone,
    "ScatterColorHierarchyChip": ScatterColorHierarchyChip,
    "ScatterColorMeasureChip": ScatterColorMeasureChip,
    "ScatterDetailsDropZone": ScatterDetailsDropZone,
    "ScatterDetailsHierarchyChip": ScatterDetailsHierarchyChip,
    "ScatterFilterChip": ScatterFilterChip,
    "ScatterFilterDropZone": ScatterFilterDropZone,
    "ScatterFilterHierarchyChip": ScatterFilterHierarchyChip,
    "ScatterFilterValuesChip": ScatterFilterValuesChip,
    "ScatterLabelsChip": ScatterLabelsChip,
    "ScatterLabelsDropZone": ScatterLabelsDropZone,
    "ScatterLabelsHierarchyChip": ScatterLabelsHierarchyChip,
    "ScatterLabelsMeasureChip": ScatterLabelsMeasureChip,
    "ScatterMotionDropZone": ScatterMotionDropZone,
    "ScatterMotionHierarchyChip": ScatterMotionHierarchyChip,
    "ScatterShapeChip": ScatterShapeChip,
    "ScatterShapeDropZone": ScatterShapeDropZone,
    "ScatterShapeHierarchyChip": ScatterShapeHierarchyChip,
    "ScatterShapeMeasureChip": ScatterShapeMeasureChip,
    "ScatterSizeDropZone": ScatterSizeDropZone,
    "ScatterSizeMeasureChip": ScatterSizeMeasureChip,
    "ScatterTooltipChip": ScatterTooltipChip,
    "ScatterTooltipDropZone": ScatterTooltipDropZone,
    "ScatterTooltipHierarchyChip": ScatterTooltipHierarchyChip,
    "ScatterTooltipMeasureChip": ScatterTooltipMeasureChip,
    "ScatterTrellisHorizontalChip": ScatterTrellisHorizontalChip,
    "ScatterTrellisHorizontalDropZone": ScatterTrellisHorizontalDropZone,
    "ScatterTrellisHorizontalHierarchyChip": ScatterTrellisHorizontalHierarchyChip,
    "ScatterTrellisHorizontalValuesChip": ScatterTrellisHorizontalValuesChip,
    "ScatterTrellisVerticalChip": ScatterTrellisVerticalChip,
    "ScatterTrellisVerticalDropZone": ScatterTrellisVerticalDropZone,
    "ScatterTrellisVerticalHierarchyChip": ScatterTrellisVerticalHierarchyChip,
    "ScatterTrellisVerticalValuesChip": ScatterTrellisVerticalValuesChip,
    "ScatterVisual": ScatterVisual,
    "ScatterXValuesDropZone": ScatterXValuesDropZone,
    "ScatterXValuesMeasureChip": ScatterXValuesMeasureChip,
    "ScatterYValuesDropZone": ScatterYValuesDropZone,
    "ScatterYValuesMeasureChip": ScatterYValuesMeasureChip,
    "ScheduleSearchCriteria": ScheduleSearchCriteria,
    "ScheduleViewObject": ScheduleViewObject,
    "ScientistPermissions": ScientistPermissions,
    "ScientistProfileApiData": ScientistProfileApiData,
    "SearchAdGroupUsersData": SearchAdGroupUsersData,
    "SearchAdUserGroupsData": SearchAdUserGroupsData,
    "SearchCriteria": SearchCriteria,
    "SegmentColorChip": SegmentColorChip,
    "SegmentColorDropZone": SegmentColorDropZone,
    "SegmentColorHierarchyChip": SegmentColorHierarchyChip,
    "SegmentColorMeasureChip": SegmentColorMeasureChip,
    "SegmentDetailsDropZone": SegmentDetailsDropZone,
    "SegmentDetailsHierarchyChip": SegmentDetailsHierarchyChip,
    "SegmentFilterChip": SegmentFilterChip,
    "SegmentFilterDropZone": SegmentFilterDropZone,
    "SegmentFilterHierarchyChip": SegmentFilterHierarchyChip,
    "SegmentFilterValuesChip": SegmentFilterValuesChip,
    "SegmentLabelsChip": SegmentLabelsChip,
    "SegmentLabelsDropZone": SegmentLabelsDropZone,
    "SegmentLabelsHierarchyChip": SegmentLabelsHierarchyChip,
    "SegmentLabelsMeasureChip": SegmentLabelsMeasureChip,
    "SegmentMotionDropZone": SegmentMotionDropZone,
    "SegmentMotionHierarchyChip": SegmentMotionHierarchyChip,
    "SegmentSizeDropZone": SegmentSizeDropZone,
    "SegmentSizeMeasureChip": SegmentSizeMeasureChip,
    "SegmentTooltipChip": SegmentTooltipChip,
    "SegmentTooltipDropZone": SegmentTooltipDropZone,
    "SegmentTooltipHierarchyChip": SegmentTooltipHierarchyChip,
    "SegmentTooltipMeasureChip": SegmentTooltipMeasureChip,
    "SegmentTrellisHorizontalChip": SegmentTrellisHorizontalChip,
    "SegmentTrellisHorizontalDropZone": SegmentTrellisHorizontalDropZone,
    "SegmentTrellisHorizontalHierarchyChip": SegmentTrellisHorizontalHierarchyChip,
    "SegmentTrellisHorizontalValuesChip": SegmentTrellisHorizontalValuesChip,
    "SegmentTrellisVerticalChip": SegmentTrellisVerticalChip,
    "SegmentTrellisVerticalDropZone": SegmentTrellisVerticalDropZone,
    "SegmentTrellisVerticalHierarchyChip": SegmentTrellisVerticalHierarchyChip,
    "SegmentTrellisVerticalValuesChip": SegmentTrellisVerticalValuesChip,
    "SegmentValuesDropZone": SegmentValuesDropZone,
    "SegmentValuesMeasureChip": SegmentValuesMeasureChip,
    "SegmentVisual": SegmentVisual,
    "ServerData": ServerData,
    "SimpleModifierResult": SimpleModifierResult,
    "TabularColorChip": TabularColorChip,
    "TabularColorDropZone": TabularColorDropZone,
    "TabularColorHierarchyChip": TabularColorHierarchyChip,
    "TabularColorMeasureChip": TabularColorMeasureChip,
    "TabularColsChip": TabularColsChip,
    "TabularColsDropZone": TabularColsDropZone,
    "TabularColsHierarchyChip": TabularColsHierarchyChip,
    "TabularColsMeasureChip": TabularColsMeasureChip,
    "TabularFilterDropZone": TabularFilterDropZone,
    "TabularFilterHierarchyChip": TabularFilterHierarchyChip,
    "TabularSizeDropZone": TabularSizeDropZone,
    "TabularSizeMeasureChip": TabularSizeMeasureChip,
    "TabularTooltipChip": TabularTooltipChip,
    "TabularTooltipDropZone": TabularTooltipDropZone,
    "TabularTooltipHierarchyChip": TabularTooltipHierarchyChip,
    "TabularTooltipMeasureChip": TabularTooltipMeasureChip,
    "TabularVisual": TabularVisual,
    "TagData": TagData,
    "TagUsageApiData": TagUsageApiData,
    "TargetParameter": TargetParameter,
    "TaskSummary": TaskSummary,
    "TaskUserApiData": TaskUserApiData,
    "TaskViewData": TaskViewData,
    "TenantLicenseTypeData": TenantLicenseTypeData,
    "TenantObject": TenantObject,
    "TenantSettings": TenantSettings,
    "TenantUsersGetObject": TenantUsersGetObject,
    "ThemeApiObject": ThemeApiObject,
    "ThemeListObject": ThemeListObject,
    "ThemeToItemsApiObject": ThemeToItemsApiObject,
    "ToggleUserApiData": ToggleUserApiData,
    "TotalsSettings": TotalsSettings,
    "UpdateTenantSeatsObject": UpdateTenantSeatsObject,
    "UpdateUserAdObject": UpdateUserAdObject,
    "UpdateUserDbObject": UpdateUserDbObject,
    "UpdateUserOpenIdObject": UpdateUserOpenIdObject,
    "UpdateUserSamlObject": UpdateUserSamlObject,
    "UserCredentials": UserCredentials,
    "UserOpenIdCredentials": UserOpenIdCredentials,
    "UserPhone": UserPhone,
    "UserRolesData": UserRolesData,
    "UserSamlCredentials": UserSamlCredentials,
    "UserTokenCredentials": UserTokenCredentials,
    "ViewerPermissions": ViewerPermissions,
    "ViewerProfileApiData": ViewerProfileApiData,
    "Visuals": Visuals,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
