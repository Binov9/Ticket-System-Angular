import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WebSocketService} from "../websocket/web-socket.service";

@Injectable({
  providedIn: 'root'
})
export class TicketingService {

  public apiURL = 'http://localhost:8080/api/ticketing';

  constructor(
    private http: HttpClient,
    private webSocketService: WebSocketService  // Inject the WebSocketService

) { }

  setConfigurations(configurations: any): Observable<any> {
    return this.http.post(`${this.apiURL}/setConfigurations`, configurations);
  }

  startSimulation(): Observable<string> {
    return this.http.post(`${this.apiURL}/startSimulation`, null, {
      responseType: 'text',
    });
  }

  stopSimulation(): Observable<string> {
    return this.http.post(`${this.apiURL}/stopSimulation`, null, {
      responseType: 'text',
    });
  }

  getLogs(): Observable<string> {
    return this.webSocketService.getLogs();
  }
}
