import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Flight {
  id: string;
  departureAirport: string;
  departureCountry: string;
  departureCity: string;
  arrivalAirport: string;
  arrivalCountry: string;
  arrivalCity: string;
  departureTime: string;
  flightDuration: number;
  image: string;
}

export interface Airline {
  id: string;
  airlineName: string;
  country: string;
  city: string;
  address: string;
  identityColor: string;
  slogan: string;
  flights?: Flight[];
}

@Injectable({ providedIn: 'root' })
export class AirlineService {
  private base = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Airline[]> {
    return this.http.get<Airline[]>(`${this.base}/flights.json`);
  }

  getOne(id: string): Observable<Airline> {
    return this.http.get<Airline>(`${this.base}/flights/${id}.json`);
  }
}
