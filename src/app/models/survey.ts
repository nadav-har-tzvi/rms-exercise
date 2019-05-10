export enum SurveyStatus {
  Active = 'Active',
  Closed = 'Closed',
  Ready = 'Ready',
  Created = 'Created'
}

export class Survey {
  constructor(
    public id: string,
    public title: string,
    public pages: string[],
    public status: SurveyStatus,
    public respondentsGoal: number,
    public loi: number,
    public projectId: number,
    public created: Date,
    public statusChanged: Date) {}
}
