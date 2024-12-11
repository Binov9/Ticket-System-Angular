import {Component, OnDestroy, OnInit} from '@angular/core';
import {TicketingService} from "../services/ticketing.service";
import {MatButton} from "@angular/material/button";
import {WebSocketService} from "../websocket/web-socket.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-simulation-control-component',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    NgForOf
  ],
  templateUrl: './simulation-control-component.component.html',
  styleUrl: './simulation-control-component.component.css'
})
export class SimulationControlComponentComponent implements OnInit{
  logMessages: string[] = [];

  constructor(
    private ticketingService: TicketingService,  // Inject the TicketingService
  ) { }

  ngOnInit(): void {
    // Subscribe to logs from the WebSocket service
    this.ticketingService.getLogs().subscribe((message: string) => {
      this.logMessages.push(message);  // Append each new log message
    });
  }

  startSimulation(): void {
    this.ticketingService.startSimulation().subscribe(
      (response) => {
        console.log('Simulation started:', response);
        this.logMessages.push('Simulation started.');
      },
      (error) => {
        console.error('Error starting simulation:', error);
      }
    );
  }

  stopSimulation(): void {
    this.ticketingService.stopSimulation().subscribe(
      (response) => {
        console.log('Simulation stopped:', response);
        this.logMessages.push('Simulation stopped.');
      },
      (error) => {
        console.error('Error stopping simulation:', error);
      }
    );
  }

  // ngOnDestroy(): void {
  //   // Disconnect WebSocket when the component is destroyed
  //   this.ticketingService.getLogs().unsubscribe(); // Unsubscribe to prevent memory leaks
  // }
}
