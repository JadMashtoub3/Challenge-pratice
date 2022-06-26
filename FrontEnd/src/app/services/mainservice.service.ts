import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  // readonly baseUrl: string = "https://localhost:5001";
     readonly baseUrl: string = "https://pracchal.azurewebsites.net";


  constructor(private _http: HttpClient) { }

  getAllPets(): Observable<Pet[]> {
    return this._http.get<Pet[]>(this.baseUrl + '/pets');
  }
  getAllOwners(): Observable<Owner[]> {
    return this._http.get<Owner[]>(this.baseUrl + '/owners');
  }
  getAllProcedures(): Observable<Procedure[]> {
    return this._http.get<Procedure[]>(this.baseUrl + '/procedures');
  }
  getAllTreatments(): Observable<Treatment[]> {
    return this._http.get<Treatment[]>(this.baseUrl + '/treatments')
  }

}
export interface Owner {
  ownerID: number;
  surname: string;
  firstname: string;
  phone: number;
}
export interface Pet {
  ownerID: number;
  petname: string;
  type: string;
}
export interface Procedure {
  procedureID: number;
  description: string;
  price: number;
}
export interface Treatment {
  ownerID: number;
  procedureID: number;
  petName: string;
  treatmentDate: Date;
  notes: string;
  payment: number;
}
