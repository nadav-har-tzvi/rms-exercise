import {Observable} from 'rxjs';

export interface LabelledEntityService {
  getLabelById(id: number): Observable<string>;
}
