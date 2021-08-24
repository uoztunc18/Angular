import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Contact} from "../_models/Contact";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContactList(): Observable<Contact[]>{
   return  this.http.get<Contact[]>('http://localhost:3000/contacts');
  }

  deleteContact(Id: number): Observable<any>{
    return this.http.delete('http://localhost:3000/contacts/'+ Id);
  }

  addContact(contact: Contact): Observable<any>{
    return this.http.post('http://localhost:3000/contacts', contact);
  }

  updateContact(contact: Contact): Observable<any>{
    return  this.http.post('http://localhost:3000/contacts',contact);
  }

  getContactById(Id: number): Observable<Contact>{
    return this.http.get<Contact>('http://localhost:3000/contacts/' + Id);
  }

}
