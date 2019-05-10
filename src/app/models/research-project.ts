import {Survey} from './survey';

export enum ProjectStatus {
  Created = 'created',
  Pending = 'pending',
  Completed = 'completed'
}

export class ResearchProject {
  constructor(public id?: number,
              public title?: string,
              public dueDate?: Date,
              public image?: string | ArrayBuffer,
              public status?: ProjectStatus,
              public surveys: Survey[] = []) {};
}
