import {Observable} from 'rxjs';

export interface Breadcrumb {
  label: Observable<string>;
  url: string;
}
