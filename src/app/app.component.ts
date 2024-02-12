import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";
import { IAircraft} from "../models/IAircraft";
import {AircraftService} from "./services/aircraft.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = '';

  //
  selectedAircraft: IAircraft | undefined

  constructor(private aircraftService: AircraftService) {

  }

  ngOnInit(): void {
     this.aircraftService.fetchAircraftById(4).subscribe
     (aircraft => this.selectedAircraft = aircraft)

    //Testing the delete method
    // this.aircraftService.deleteAircraft(2).subscribe(
    //   aircraft => this.selectedAircraft = aircraft
    //)


  }


  //aircraft = [
    //new Aircraft("747-400", 416, 4, true, "February 22nd, 2024"),
    //new Aircraft("DC-10", 270, 3),
    //new Aircraft("A380", 525, 4, true)
  //]

  //This empty array init can be used to test the ngif directive in app.component.html
  //aircraft: Aircraft[] = [];
}


