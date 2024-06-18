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
* An item \'Root\' path node
*/
export enum RootFolderType {
    Private = <any> 'Private',
    Public = <any> 'Public',
    Group = <any> 'Group',
    OneOff = <any> 'OneOff',
    PrivateDummy = <any> 'PrivateDummy',
    TenantsRootFolderDummy = <any> 'TenantsRootFolderDummy',
    TenantDummy = <any> 'TenantDummy',
    DeletedContent = <any> 'DeletedContent',
    CrossTenant = <any> 'CrossTenant',
    Recent = <any> 'Recent',
    Favorites = <any> 'Favorites',
    CustomColumnMeasure = <any> 'CustomColumnMeasure',
    NoAccess = <any> 'NoAccess'
}