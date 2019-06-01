export enum DataSourceType {
  Survey = 'Survey',
  Social = 'Social'
}

export abstract class DataSource {
  constructor(public id?: number, public name?: string, public projectId?: number, public configuration?: any) {}
}
