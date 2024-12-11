import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private client: Client;
  private logsSubject = new Subject<string>();

  constructor() {
    this.client = new Client({
      brokerURL: 'ws://localhost:8080/ws',  // WebSocket endpoint
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'), // Correct WebSocket URL
      reconnectDelay: 5000,  // Attempt to reconnect every 5 seconds
    });

    this.client.onConnect = () => {
      // Subscribe to the '/topic/logs' for incoming log messages
      this.client.subscribe('/topic/updates', (message) => {
        this.logsSubject.next(message.body);  // Push incoming messages to the subject
      });
    };

    this.client.activate();  // Connect WebSocket
  }

  // Expose logs as an observable to the TicketingService
  getLogs(): Observable<string> {
    return this.logsSubject.asObservable();
  }

  // Send a message through WebSocket (if needed for other functionality)
  sendMessage(message: string): void {
    if (this.client.connected) {
      this.client.publish({ destination: '/app/sendMessage', body: message });  // Send a message to a specific destination
    }
  }

  // Close the WebSocket connection when needed
  disconnect(): void {
    if (this.client) {
      this.client.deactivate();
    }
  }
}
