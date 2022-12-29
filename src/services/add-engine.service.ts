import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Engine } from 'src/model/engine.model';

@Injectable({
  providedIn: 'root',
})
export class AddEngineService {
  private url = 'http://localhost:3000/engines';

  constructor(private HttpClient: HttpClient) {}

  allEngines(): Observable<Engine[]> {
    return this.HttpClient.get<Engine[]>(this.url);
  }

  insertEngine(engine: Engine): Observable<Engine> {
    console.log('engine to add ->', engine);
    return this.HttpClient.post<Engine>(this.url, engine);
  }
}
