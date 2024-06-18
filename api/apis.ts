export * from './accessServiceApi';
import { AccessServiceApi } from './accessServiceApi';
export * from './analyticsServiceApi';
import { AnalyticsServiceApi } from './analyticsServiceApi';
export * from './authenticationServiceApi';
import { AuthenticationServiceApi } from './authenticationServiceApi';
export * from './contentServiceApi';
import { ContentServiceApi } from './contentServiceApi';
export * from './dataSourcesServiceApi';
import { DataSourcesServiceApi } from './dataSourcesServiceApi';
export * from './notificationServiceApi';
import { NotificationServiceApi } from './notificationServiceApi';
export * from './tasksServiceApi';
import { TasksServiceApi } from './tasksServiceApi';
export * from './themesServiceApi';
import { ThemesServiceApi } from './themesServiceApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
		const message = `HTTP request failed ${!!statusCode?'status code is:'+statusCode:''}. ${body}`;
        super(message);
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccessServiceApi, AnalyticsServiceApi, AuthenticationServiceApi, ContentServiceApi, DataSourcesServiceApi, NotificationServiceApi, TasksServiceApi, ThemesServiceApi];
