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
}
