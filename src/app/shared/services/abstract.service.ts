import { HttpClient } from '@angular/common/http';
import { AbstractDto } from '@shared/dto/abstract.dto';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';


export class AbstractService<T extends AbstractDto> {

  // @formatter:off
  constructor(
    private http: HttpClient,
    private factory: { new(data: object): T; },
    private url: string
  ) { }
  // @formatter:on


  public create(t: T, query?: object): Observable<T> {
    const url = `${this.url}?${this.getQueryString(query)}`;

    return this.http.post<object>(url, t).pipe(
      map(item => new this.factory(item)),
      catchError(<(error: any) => Observable<T>>this.handleError(`POST ${url}`))
    );
  }


  public update(t: T, query?: object): Observable<T> {
    const url = `${this.url}/${t.id}?${this.getQueryString(query)}`;

    return this.http.put<object>(url, t).pipe(
      map(item => new this.factory(item)),
      catchError(<(error: any) => Observable<T>>this.handleError(`PUT ${url}`))
    );
  }


  public remove(id: string, query?: object): Observable<object> {
    const url = `${this.url}/${id}?${this.getQueryString(query)}`;

    return this.http.delete(url).pipe(
      catchError(<(error: any) => Observable<T>>this.handleError(`DELETE ${url}`))
    );
  }


  public get(id: string, query?: object): Observable<T> {
    const url = `${this.url}/${id}?${this.getQueryString(query)}`;

    return this.http.get<object>(url).pipe(
      map(item => new this.factory(item)),
      catchError(<(error: any) => Observable<T>>this.handleError(`GET ${url}`))
    );
  }


  public getBy(query: object): Observable<T[]> {
    let url = this.getQueryString(query);
    url = this.url + (url ? `?${url}` : '' );

    return this.http.get<object[]>(url).pipe(
      map(items => (items || []).map(item => new this.factory(item))),
      catchError(<(error: any) => Observable<T[]>>this.handleError(`GET ${url}`))
    );
  }

  public getAll(query?: object): Observable<T[]> {
    let url = this.getQueryString(query);
    url = this.url + (url ? `?${url}` : '' );

    return this.http.get<object[]>(url).pipe(
      map(items => (items || []).map(item => new this.factory(item))),
      catchError(<(error: any) => Observable<T[]>>this.handleError(`GET ${url}`))
    );
  }


  private getQueryString(query: object): string {
    class LocaleClass extends AbstractDto {
      constructor(data) {
        super(data);
      }
    }

    const tmp = new LocaleClass(query);
    return Object.keys(query || {})
      .filter(key => query[key] !== null)
      .filter(key => typeof query[key] !== 'undefined')
      .filter(key => typeof tmp[key] === 'undefined')
      .map(key => `${key}_like=${query[key]}`)
      .join('&');
  }


  private handleError(operation: string) {
    return (error: any): Observable<T | T[]> => {

      // TODO: send the error to remote logging infrastructure
      console.error('Sending error to Slack API, Google Analytics API, ...', operation, error);

      // TODO: better job of transforming error for user consumption
      console.error('Transforming job for onError subscriber, ...', operation, error);

      // Let the app keep running by returning an empty result.
      return of(error as T);
    };
  }
}
