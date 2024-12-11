import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConfigurationsComponent} from "./configurations/configurations.component";
import {
  SimulationControlComponentComponent
} from "./simulation-control-component/simulation-control-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConfigurationsComponent,
    SimulationControlComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ticket-System-Angular';
}
