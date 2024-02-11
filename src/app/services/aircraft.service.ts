import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AIRCRAFTLIST } from '../content-list/data/IAircraftContent';
import {IAircraft} from "../../models/IAircraft";

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor() { }

  fetchAircraft(): Observable<IAircraft[]> {
    return of(AIRCRAFTLIST);
  }

  fetchAircraftById(id: number): Observable<IAircraft | undefined> {
    const item = AIRCRAFTLIST.find(aircraft => aircraft.id = id)
    return of(item);
  }

  addAircraft(aircraft: IAircraft): Observable<IAircraft[]> {
    AIRCRAFTLIST.push(aircraft);
    return of(AIRCRAFTLIST);
  }

  updateAircraft(aircraft: IAircraft): Observable<IAircraft[]> {
    const index = AIRCRAFTLIST.findIndex(object => object.id === aircraft.id);
    AIRCRAFTLIST[index] = aircraft
    return of(AIRCRAFTLIST);
  }

  deleteAircraft(id: number): Observable<IAircraft> {
    const index = AIRCRAFTLIST.findIndex(object => object.id === id);
    let deletedAircraft: IAircraft
    deletedAircraft = AIRCRAFTLIST.splice(index, 1)[0]

    return of(deletedAircraft);
  }
}
