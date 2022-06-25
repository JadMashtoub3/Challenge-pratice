import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  readonly baseUrl: string = "https://localhost:5001";

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
  OwnerID: number;
  Surname: string;
  FirstName: string;
  Phone: number;
}
export interface Pet {
  OwnerID: number;
  PetName: string;
  Type: string;
}
export interface Procedure {
  ProcedureID: number;
  Description: string;
  Price: number;
}
export interface Treatment {
  OwnerID: number;
  ProcedureID: number;
  PetID: number;
  Date: Date;
  Notes: string;
  Payment: number;
}
