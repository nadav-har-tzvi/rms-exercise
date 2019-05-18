import { DataSource } from './data-source';

export enum SurveyStatus {
  Active = 'Active',
  Closed = 'Closed',
  Ready = 'Ready',
  Created = 'Created'
}

export class Survey extends DataSource {
  constructor(
    public id?: number,
    public name?: string,
    public status?: SurveyStatus,
    public respondentsGoal?: number,
    public loi?: number,
    public projectId?: number,
    public created?: Date,
    public statusChanged?: Date,
    public configuration?: string) {
    super(id, name, projectId, configuration);
  }
}
