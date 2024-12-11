import { Component } from '@angular/core';
import {TicketingService} from "../services/ticketing.service";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-configurations',
  providers: [],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInput,
    MatButton
  ],
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.css'
})
export class ConfigurationsComponent {

  configurations = {
    ticketReleaseRate: 1,
    customerRetrievalRate: 1,
    totalTickets: 100,
    maxTicketCapacity: 20,
    vendorCount: 2,
    customerCount: 2,
  }

  constructor(
    public ticketingService: TicketingService
  ) { }

  saveConfigurations() {
    this.ticketingService.setConfigurations(this.configurations).subscribe({
      next: (response) => {
        console.log('Configurations saved:', response); // Log the response from the API
        // You can also handle the response further as needed
      },
      error: (error) => {
        console.error('Error saving configurations:', error); // Handle any error during the API call
      },
      complete: () => {
        console.log('Save configurations API call completed.');
      },
    });
  }


}
