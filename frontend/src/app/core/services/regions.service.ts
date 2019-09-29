import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regions } from '../models/regions';
import { AppConfig, APP_CONFIG } from 'src/app/app-config.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  constructor(private httpClient: HttpClient,@Inject(APP_CONFIG)  public config:AppConfig) { }

  public getAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.config.apiEndpoint}/regions/`);
  }

  public get(id: number): Observable<Regions>{
    return this.httpClient.get<Regions>(`${this.config.apiEndpoint}/regions/${id}`);
  }

  save(id:number, item: Regions): Observable<Regions> {
    return this.httpClient.post<Regions>(`${this.config.apiEndpoint}/regions/${id}` ,item);
  }
  
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.config.apiEndpoint}/regions/${id}`);
  }
  
  update(id:number, item: Regions): Observable<Regions> {
    return this.httpClient.put<Regions>(`${this.config.apiEndpoint}/regions/${id}`,item);
  }
}
