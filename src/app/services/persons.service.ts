import { Injectable } from '@angular/core';
import { Persons } from '../models/persons.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
 
  constructor(private http: HttpClient) {
   }


}
