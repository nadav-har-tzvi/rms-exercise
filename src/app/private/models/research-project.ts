import {Survey} from './survey';
import {ImageEntity} from './image-entity';

export enum ProjectStatus {
  Created = 'created',
  Pending = 'pending',
  Completed = 'completed'
}

export class ResearchProject {
  constructor(public id?: number,
              public title?: string,
              public dueDate?: Date,
              public image?: ImageEntity,
              public status?: ProjectStatus,
              public surveys: Survey[] = []) {};
}
