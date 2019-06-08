import { environment } from '../../../environments/environment';

export enum EntityType {
  Project,
  DataSource,
  Survey,
  User
}

export enum EndpointAction {
  Create,
  Update,
  Delete,
  Retrieve,
  List
}


export class EndpointsConfig {
  static endpointsConfig = {
    [EntityType.Project]: {
      [EndpointAction.Create]: {
        url: 'api/projects',
        method: 'POST'
      },
      [EndpointAction.Delete]: {
        url: 'api/projects/:projectId',
        method: 'DELETE'
      },
      [EndpointAction.List]: {
        url: 'api/projects',
        method: 'GET'
      },
      [EndpointAction.Retrieve]: {
        url: 'api/projects/:projectId',
        method: 'GET'
      },
      [EndpointAction.Update]: {
        url: 'api/projects/:projectId',
        method: 'PUT'
      }
    },
    [EntityType.DataSource]: {
      [EndpointAction.Create]: {
        url: 'api/datasources/',
        method: 'POST'
      },
      [EndpointAction.Delete]: {
        url: 'api/datasources/:dataSourceId/',
        method: 'DELETE'
      },
      [EndpointAction.List]: {
        url: 'api/datasources',
        method: 'GET'
      },
      [EndpointAction.Retrieve]: {
        url: 'api/datasources/:dataSourceId',
        method: 'GET'
      },
      [EndpointAction.Update]: {
        url: 'api/datasources/:dataSourceId/',
        method: 'PUT'
      }
    },
    [EntityType.Survey]: {
      [EndpointAction.Create]: {
        url: 'api/surveys',
        method: 'POST'
      },
      [EndpointAction.Delete]: {
        url: 'api/surveys/:dataSourceId',
        method: 'DELETE'
      },
      [EndpointAction.List]: {
        url: 'api/surveys',
        method: 'GET'
      },
      [EndpointAction.Retrieve]: {
        url: 'api/surveys/:dataSourceId',
        method: 'GET'
      },
      [EndpointAction.Update]: {
        url: 'api/surveys/:dataSourceId',
        method: 'PUT'
      }
    },
    [EntityType.User]: {
      Authenticate: {
        url: 'api/user/authenticate',
        method: 'POST'
      }
    }
  };

  static getHttpConfig(entityType: EntityType, action: EndpointAction | string, urlParams: {[k: string]: string} = {}, queryParams: {[k: string]: string} = {}) {
    const config = EndpointsConfig.endpointsConfig[entityType][action];
    const filledUrl = new URL(environment.apiBase + '/' + config.url);
    const matchGroups = config.url.match(/:\w+/) || [];
    matchGroups.forEach(paramPlaceHolder => {
      const paramValue = urlParams[paramPlaceHolder.replace(':', '')];
      const queryParamValue = queryParams[paramPlaceHolder.replace(':', '')];
      filledUrl.pathname = filledUrl.pathname.replace(paramPlaceHolder, paramValue);
      filledUrl.search = filledUrl.search.replace(paramPlaceHolder, queryParamValue);
    });
    return {
      url: filledUrl.href,
      method: config.method
    };
  }
}
