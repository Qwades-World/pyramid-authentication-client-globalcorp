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
import { BulkWritingType } from './bulkWritingType';
import { BwDatabaseListType } from './bwDatabaseListType';
import { BwInfoAreaTreeViewType } from './bwInfoAreaTreeViewType';
import { CubeAuthMethod } from './cubeAuthMethod';
import { CustomRootCAType } from './customRootCAType';
import { FtpSettings } from './ftpSettings';
import { GaType } from './gaType';
import { HierarchyType } from './hierarchyType';
import { MsOlapConnectionType } from './msOlapConnectionType';
import { OauthDataSourceSettings } from './oauthDataSourceSettings';
import { OdbcDirectQueryOptions } from './odbcDirectQueryOptions';
import { SapBwServerConnectionType } from './sapBwServerConnectionType';
import { ServerEffectiveUserName } from './serverEffectiveUserName';
import { SparkTransportMode } from './sparkTransportMode';

/**
* Additional data source connection properties and settings used OPTIONALLY for different server types.
*/
export class AdditionalServerProperties {
    /**
    * Path to custom java trust store (in Pyramid server filesystem)
    */
    'customTrustStore'?: string;
    'certValidationCustomRootCaType'?: CustomRootCAType;
    'disableDBTables'?: boolean;
    'hierarchyType'?: HierarchyType;
    /**
    * Password for the default trust store
    */
    'defaultTrustStorePassword'?: string;
    'salesforceSecurityToken'?: string;
    /**
    * service principal name for kerberos authentication
    */
    'krbServiceName'?: string;
    'disableAnalyticViews'?: boolean;
    'googleAnalyticsType'?: GaType;
    'msOlapConnectionType'?: MsOlapConnectionType;
    'bwSupportStructures'?: boolean;
    'messageServerHost'?: string;
    'ftpSettings'?: FtpSettings;
    /**
    * Custom keystore type (JKS | PKCS12)
    */
    'customKeyStoreType'?: string;
    'sapBwServerConnectionType'?: SapBwServerConnectionType;
    /**
    * Shared Folder Path for temporary file for bulk uploads
    */
    'sharedFolderPath'?: string;
    'showInfoAreaTree'?: boolean;
    /**
    * Should validate the server certificate\'s hostname
    */
    'shouldValidateServerCertHostname'?: boolean;
    /**
    * Hadoop HDFS port number
    */
    'hdfsPort'?: number;
    /**
    * Hadoop HDFS IP address
    */
    'hdfsIP'?: string;
    'mdxCompatibility'?: number;
    'keytabPath'?: string;
    's3StagingDir'?: string;
    'systemR3Name'?: string;
    /**
    * Required when serverType is CustomJdbc and specifies which custom jdbc it is 
    */
    'customJdbcId'?: string;
    'sysNumber'?: string;
    'bringNonOleDbComponents'?: boolean;
    'messageServerService'?: string;
    /**
    * quota project id for bigquery
    */
    'quotaProjectId'?: string;
    'bulkWritingType'?: BulkWritingType;
    /**
    * Should the client use an ssl certificate?
    */
    'useClientCertificate'?: boolean;
    /**
    * Using a different java trust store than the java VM trust store?
    */
    'isCustomTrustStore'?: boolean;
    'awsBucketName'?: string;
    'customJdbcProps'?: { [key: string]: string; };
    /**
    * Path to the client\'s key
    */
    'clientKeyPath'?: string;
    'bwDataBaseListTechnique'?: BwDatabaseListType;
    'warehouse'?: string;
    'accessToken'?: string;
    /**
    * Trust store password
    */
    'customTrustStorePassword'?: string;
    /**
    * Using a Operating System trust store instead of java VM trust store
    */
    'isOperatingSystemTrustStore'?: boolean;
    /**
    * Treat schemas names as database names in Pyramid
    */
    'isDatabaseSchema'?: boolean;
    /**
    * Use SSL to connect
    */
    'useSSL'?: boolean;
    /**
    * Account ID
    */
    'accountId'?: string;
    'odbcDirectQueryOptions'?: OdbcDirectQueryOptions;
    'avoidMultiPassAuthentication'?: boolean;
    'urlPortal'?: string;
    'privateCertId'?: string;
    'supportsBwFlatQueries'?: boolean;
    'bwInfoAreaTreeViewType'?: BwInfoAreaTreeViewType;
    /**
    * Should validate Server certificate
    */
    'shouldValidateServerCert'?: boolean;
    'sapRouter'?: string;
    /**
    * Override timezone for session
    */
    'timezone'?: string;
    'disableCalculationViews'?: boolean;
    'sncPartnerName'?: string;
    'groupServer'?: string;
    /**
    * Should we override the connection string - if so, use optionalJdbcParameters to specify the full JDBC connection string
    */
    'isOverrideConnectionString'?: boolean;
    'consumerSecret'?: string;
    /**
    * Using a different keystore than the java VM keystore?
    */
    'isCustomKeyStore'?: boolean;
    /**
    * Custom truststore type (JKS | PKCS12)
    */
    'customTrustStoreType'?: string;
    /**
    * Mark true if it is Azure Tabular
    */
    'azureTabular'?: boolean;
    'disableAttributeViews'?: boolean;
    /**
    * Hostname in certificate that we should validate
    */
    'customCertHostname'?: string;
    'consumerKey'?: string;
    /**
    * Path to the client\'s certificate
    */
    'clientCertPath'?: string;
    'awsSecretAccessKey'?: string;
    /**
    * Should validate a different hostname than the server hostname
    */
    'isCustomCertHostname'?: boolean;
    'oauthDataSourceSettings'?: OauthDataSourceSettings;
    /**
    * Hadoop HIVE IP address
    */
    'hiveIP'?: string;
    /**
    * Language option for SAP HANA and BW
    */
    'defaultCulture'?: string;
    'awsRegion'?: string;
    'bwInfoAreaIconIds'?: string;
    /**
    * Specify whether to customize the certificate configuration
    */
    'useCustomCertificateConfig'?: boolean;
    'awsAccessKeyId'?: string;
    /**
    * Role ID
    */
    'roleId'?: string;
    /**
    * Hadoop HIVE port number
    */
    'hivePort'?: number;
    /**
    * Custom client parameter for SAP HANA and BW
    */
    'clientNumber'?: string;
    'keytabId'?: string;
    'proxyAccountInUse'?: ServerEffectiveUserName;
    'accessTokenSecret'?: string;
    /**
    * Relative Folder Path
    */
    'relativeFolderName'?: string;
    /**
    * Path to custom keystore (in Pyramid server filesystem)
    */
    'customKeyStore'?: string;
    'sparkTransportMode'?: SparkTransportMode;
    /**
    * Password for the client\'s key
    */
    'clientKeyPassword'?: string;
    /**
    * Keystore password
    */
    'customKeyStorePassword'?: string;
    'resolveColumnLabel'?: boolean;
    'machineAccountFallback'?: boolean;
    'authMethod'?: CubeAuthMethod;
    /**
    * Custom root CA certificate used to validate the server\'s certificate
    */
    'customRootCaCert'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customTrustStore",
            "baseName": "customTrustStore",
            "type": "string"
        },
        {
            "name": "certValidationCustomRootCaType",
            "baseName": "certValidationCustomRootCaType",
            "type": "CustomRootCAType"
        },
        {
            "name": "disableDBTables",
            "baseName": "disableDBTables",
            "type": "boolean"
        },
        {
            "name": "hierarchyType",
            "baseName": "hierarchyType",
            "type": "HierarchyType"
        },
        {
            "name": "defaultTrustStorePassword",
            "baseName": "defaultTrustStorePassword",
            "type": "string"
        },
        {
            "name": "salesforceSecurityToken",
            "baseName": "salesforceSecurityToken",
            "type": "string"
        },
        {
            "name": "krbServiceName",
            "baseName": "krbServiceName",
            "type": "string"
        },
        {
            "name": "disableAnalyticViews",
            "baseName": "disableAnalyticViews",
            "type": "boolean"
        },
        {
            "name": "googleAnalyticsType",
            "baseName": "googleAnalyticsType",
            "type": "GaType"
        },
        {
            "name": "msOlapConnectionType",
            "baseName": "msOlapConnectionType",
            "type": "MsOlapConnectionType"
        },
        {
            "name": "bwSupportStructures",
            "baseName": "bwSupportStructures",
            "type": "boolean"
        },
        {
            "name": "messageServerHost",
            "baseName": "messageServerHost",
            "type": "string"
        },
        {
            "name": "ftpSettings",
            "baseName": "ftpSettings",
            "type": "FtpSettings"
        },
        {
            "name": "customKeyStoreType",
            "baseName": "customKeyStoreType",
            "type": "string"
        },
        {
            "name": "sapBwServerConnectionType",
            "baseName": "sapBwServerConnectionType",
            "type": "SapBwServerConnectionType"
        },
        {
            "name": "sharedFolderPath",
            "baseName": "sharedFolderPath",
            "type": "string"
        },
        {
            "name": "showInfoAreaTree",
            "baseName": "showInfoAreaTree",
            "type": "boolean"
        },
        {
            "name": "shouldValidateServerCertHostname",
            "baseName": "shouldValidateServerCertHostname",
            "type": "boolean"
        },
        {
            "name": "hdfsPort",
            "baseName": "hdfsPort",
            "type": "number"
        },
        {
            "name": "hdfsIP",
            "baseName": "hdfsIP",
            "type": "string"
        },
        {
            "name": "mdxCompatibility",
            "baseName": "mdxCompatibility",
            "type": "number"
        },
        {
            "name": "keytabPath",
            "baseName": "keytabPath",
            "type": "string"
        },
        {
            "name": "s3StagingDir",
            "baseName": "s3StagingDir",
            "type": "string"
        },
        {
            "name": "systemR3Name",
            "baseName": "systemR3Name",
            "type": "string"
        },
        {
            "name": "customJdbcId",
            "baseName": "customJdbcId",
            "type": "string"
        },
        {
            "name": "sysNumber",
            "baseName": "sysNumber",
            "type": "string"
        },
        {
            "name": "bringNonOleDbComponents",
            "baseName": "bringNonOleDbComponents",
            "type": "boolean"
        },
        {
            "name": "messageServerService",
            "baseName": "messageServerService",
            "type": "string"
        },
        {
            "name": "quotaProjectId",
            "baseName": "quotaProjectId",
            "type": "string"
        },
        {
            "name": "bulkWritingType",
            "baseName": "bulkWritingType",
            "type": "BulkWritingType"
        },
        {
            "name": "useClientCertificate",
            "baseName": "useClientCertificate",
            "type": "boolean"
        },
        {
            "name": "isCustomTrustStore",
            "baseName": "isCustomTrustStore",
            "type": "boolean"
        },
        {
            "name": "awsBucketName",
            "baseName": "awsBucketName",
            "type": "string"
        },
        {
            "name": "customJdbcProps",
            "baseName": "customJdbcProps",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "clientKeyPath",
            "baseName": "clientKeyPath",
            "type": "string"
        },
        {
            "name": "bwDataBaseListTechnique",
            "baseName": "bwDataBaseListTechnique",
            "type": "BwDatabaseListType"
        },
        {
            "name": "warehouse",
            "baseName": "warehouse",
            "type": "string"
        },
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string"
        },
        {
            "name": "customTrustStorePassword",
            "baseName": "customTrustStorePassword",
            "type": "string"
        },
        {
            "name": "isOperatingSystemTrustStore",
            "baseName": "isOperatingSystemTrustStore",
            "type": "boolean"
        },
        {
            "name": "isDatabaseSchema",
            "baseName": "isDatabaseSchema",
            "type": "boolean"
        },
        {
            "name": "useSSL",
            "baseName": "useSSL",
            "type": "boolean"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "odbcDirectQueryOptions",
            "baseName": "odbcDirectQueryOptions",
            "type": "OdbcDirectQueryOptions"
        },
        {
            "name": "avoidMultiPassAuthentication",
            "baseName": "avoidMultiPassAuthentication",
            "type": "boolean"
        },
        {
            "name": "urlPortal",
            "baseName": "urlPortal",
            "type": "string"
        },
        {
            "name": "privateCertId",
            "baseName": "privateCertId",
            "type": "string"
        },
        {
            "name": "supportsBwFlatQueries",
            "baseName": "supportsBwFlatQueries",
            "type": "boolean"
        },
        {
            "name": "bwInfoAreaTreeViewType",
            "baseName": "bwInfoAreaTreeViewType",
            "type": "BwInfoAreaTreeViewType"
        },
        {
            "name": "shouldValidateServerCert",
            "baseName": "shouldValidateServerCert",
            "type": "boolean"
        },
        {
            "name": "sapRouter",
            "baseName": "sapRouter",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "disableCalculationViews",
            "baseName": "disableCalculationViews",
            "type": "boolean"
        },
        {
            "name": "sncPartnerName",
            "baseName": "sncPartnerName",
            "type": "string"
        },
        {
            "name": "groupServer",
            "baseName": "groupServer",
            "type": "string"
        },
        {
            "name": "isOverrideConnectionString",
            "baseName": "isOverrideConnectionString",
            "type": "boolean"
        },
        {
            "name": "consumerSecret",
            "baseName": "consumerSecret",
            "type": "string"
        },
        {
            "name": "isCustomKeyStore",
            "baseName": "isCustomKeyStore",
            "type": "boolean"
        },
        {
            "name": "customTrustStoreType",
            "baseName": "customTrustStoreType",
            "type": "string"
        },
        {
            "name": "azureTabular",
            "baseName": "azureTabular",
            "type": "boolean"
        },
        {
            "name": "disableAttributeViews",
            "baseName": "disableAttributeViews",
            "type": "boolean"
        },
        {
            "name": "customCertHostname",
            "baseName": "customCertHostname",
            "type": "string"
        },
        {
            "name": "consumerKey",
            "baseName": "consumerKey",
            "type": "string"
        },
        {
            "name": "clientCertPath",
            "baseName": "clientCertPath",
            "type": "string"
        },
        {
            "name": "awsSecretAccessKey",
            "baseName": "awsSecretAccessKey",
            "type": "string"
        },
        {
            "name": "isCustomCertHostname",
            "baseName": "isCustomCertHostname",
            "type": "boolean"
        },
        {
            "name": "oauthDataSourceSettings",
            "baseName": "oauthDataSourceSettings",
            "type": "OauthDataSourceSettings"
        },
        {
            "name": "hiveIP",
            "baseName": "hiveIP",
            "type": "string"
        },
        {
            "name": "defaultCulture",
            "baseName": "defaultCulture",
            "type": "string"
        },
        {
            "name": "awsRegion",
            "baseName": "awsRegion",
            "type": "string"
        },
        {
            "name": "bwInfoAreaIconIds",
            "baseName": "bwInfoAreaIconIds",
            "type": "string"
        },
        {
            "name": "useCustomCertificateConfig",
            "baseName": "useCustomCertificateConfig",
            "type": "boolean"
        },
        {
            "name": "awsAccessKeyId",
            "baseName": "awsAccessKeyId",
            "type": "string"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string"
        },
        {
            "name": "hivePort",
            "baseName": "hivePort",
            "type": "number"
        },
        {
            "name": "clientNumber",
            "baseName": "clientNumber",
            "type": "string"
        },
        {
            "name": "keytabId",
            "baseName": "keytabId",
            "type": "string"
        },
        {
            "name": "proxyAccountInUse",
            "baseName": "proxyAccountInUse",
            "type": "ServerEffectiveUserName"
        },
        {
            "name": "accessTokenSecret",
            "baseName": "accessTokenSecret",
            "type": "string"
        },
        {
            "name": "relativeFolderName",
            "baseName": "relativeFolderName",
            "type": "string"
        },
        {
            "name": "customKeyStore",
            "baseName": "customKeyStore",
            "type": "string"
        },
        {
            "name": "sparkTransportMode",
            "baseName": "sparkTransportMode",
            "type": "SparkTransportMode"
        },
        {
            "name": "clientKeyPassword",
            "baseName": "clientKeyPassword",
            "type": "string"
        },
        {
            "name": "customKeyStorePassword",
            "baseName": "customKeyStorePassword",
            "type": "string"
        },
        {
            "name": "resolveColumnLabel",
            "baseName": "resolveColumnLabel",
            "type": "boolean"
        },
        {
            "name": "machineAccountFallback",
            "baseName": "machineAccountFallback",
            "type": "boolean"
        },
        {
            "name": "authMethod",
            "baseName": "authMethod",
            "type": "CubeAuthMethod"
        },
        {
            "name": "customRootCaCert",
            "baseName": "customRootCaCert",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalServerProperties.attributeTypeMap;
    }
}

