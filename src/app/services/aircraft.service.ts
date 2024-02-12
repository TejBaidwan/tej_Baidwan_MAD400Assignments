import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AIRCRAFTLIST } from '../content-list/data/IAircraftContent';
import {IAircraft} from "../../models/IAircraft";

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor() { }

  //Return an observable of IAircraft objects
  fetchAircraft(): Observable<IAircraft[]> {
    return of(AIRCRAFTLIST);
  }

  //Return an IAircraft object given an ID
  fetchAircraftById(id: number): Observable<IAircraft | undefined> {
    const item = AIRCRAFTLIST.find(aircraft => aircraft.id === id)
    return of(item);
  }

  //Add an IAircraft object to the array
  addAircraft(aircraft: IAircraft): Observable<IAircraft[]> {
    AIRCRAFTLIST.push(aircraft);
    return of(AIRCRAFTLIST);
  }

  //Update an IAircraft object in the array
  updateAircraft(aircraft: IAircraft): Observable<IAircraft[]> {
    const index = AIRCRAFTLIST.findIndex(object => object.id === aircraft.id);
    AIRCRAFTLIST[index] = aircraft
    return of(AIRCRAFTLIST);
  }

  //Delete an IAircraft object with a given ID
  deleteAircraft(id: number): Observable<IAircraft> {
    const index = AIRCRAFTLIST.findIndex(object => object.id === id);
    let deletedAircraft: IAircraft
    deletedAircraft = AIRCRAFTLIST.splice(index, 1)[0]

    return of(deletedAircraft);
  }
}
