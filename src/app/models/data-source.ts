export enum DataSourceType {
  Survey = 'Survey',
  Social = 'Social'
}

export class DataSource {
  constructor(public id?: number, public name?: string, public type?: DataSourceType, public projectId?: number, public configuration?: any) {}
}
