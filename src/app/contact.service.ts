import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icontact } from './icontact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
private addContactUrl="http://localhost:3000/api/addContact";
private getContactUrl="http://localhost:3000/api/contactList";
  constructor(private http:HttpClient) {}

  addContact(registeredContact:Icontact){
    console.log("in service",registeredContact);
    return this.http.post(this.addContactUrl,registeredContact);
  }


  getContacts():Observable<Icontact[]>{
    return this.http.get<any>(this.getContactUrl);
  }
}
