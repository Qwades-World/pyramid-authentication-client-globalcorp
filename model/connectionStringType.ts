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
* The data source server type enumeration.
*/
export enum ConnectionStringType {
    None = <any> 'None',
    MsOlap = <any> 'MS_OLAP',
    MsOlapTabular = <any> 'MS_OLAP_TABULAR',
    Powerpivot = <any> 'POWERPIVOT',
    InMemory = <any> 'In_Memory',
    SqlServer = <any> 'SqlServer',
    MySql = <any> 'MySql',
    MySqlOfficial = <any> 'MySqlOfficial',
    Postgresql = <any> 'Postgresql',
    Oracle = <any> 'Oracle',
    Db2 = <any> 'DB2',
    Teradata = <any> 'Teradata',
    Drill = <any> 'Drill',
    PaImdb = <any> 'PA_IMDB',
    Redshift = <any> 'Redshift',
    Presto = <any> 'Presto',
    Athena = <any> 'Athena',
    BigQuery = <any> 'BigQuery',
    Hive = <any> 'Hive',
    Salesforce = <any> 'Salesforce',
    SapHana = <any> 'SAP_HANA',
    GoogleAnalytics = <any> 'GoogleAnalytics',
    MongoDbBiCx = <any> 'MongoDbBiCx',
    SqlServerAzure = <any> 'SqlServerAzure',
    Snowflake = <any> 'Snowflake',
    Sybase = <any> 'Sybase',
    Firebird = <any> 'Firebird',
    Facebook = <any> 'Facebook',
    Vertica = <any> 'Vertica',
    XTwitter = <any> 'X_Twitter',
    OdbcServer = <any> 'OdbcServer',
    Sharepoint = <any> 'Sharepoint',
    SapBw = <any> 'SAP_BW',
    AzureBlobStorage = <any> 'AzureBlobStorage',
    AmazonS3Storage = <any> 'AmazonS3Storage',
    Greenplum = <any> 'Greenplum',
    Exasol = <any> 'Exasol',
    MemSql = <any> 'MemSql',
    MariaDb = <any> 'MariaDB',
    Netezza = <any> 'Netezza',
    Glue = <any> 'Glue',
    Impala = <any> 'Impala',
    AzureSynapse = <any> 'AzureSynapse',
    OdbcDirectQuery = <any> 'OdbcDirectQuery',
    As400 = <any> 'AS400',
    Neo4jCypher = <any> 'Neo4jCypher',
    Neo4jBi = <any> 'Neo4jBI',
    CustomJdbc = <any> 'CustomJdbc',
    SparkSql = <any> 'SparkSQL',
    Databricks = <any> 'Databricks',
    Denodo = <any> 'Denodo',
    NetSuite = <any> 'NetSuite',
    ClickHouse = <any> 'ClickHouse',
    Starburst = <any> 'Starburst',
    Dremio = <any> 'Dremio',
    FtpServer = <any> 'FtpServer',
    SshServer = <any> 'SshServer',
    SapHanaCloud = <any> 'SAP_HANA_CLOUD',
    SapDatasphere = <any> 'SAP_Datasphere',
    BoxStorage = <any> 'BoxStorage',
    GoogleDrive = <any> 'GoogleDrive'
}
