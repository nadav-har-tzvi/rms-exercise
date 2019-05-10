export enum DataSourceType {
  Survey = 'Survey',
  Social = 'Social'
}

export class DataSource {
  constructor(public name?: string, public type?: DataSourceType, public projectId?: number) {}
}
