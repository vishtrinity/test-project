import { Component, OnInit } from '@angular/core';
import { Icontact } from '../icontact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
formValid:false;
 registeredContact:Icontact={firstName:"",lastName:"",email:"",phone:"",status:true};

  constructor(private cs:ContactService) { }
  
  ngOnInit() {

  }
 onSubmit(){
   console.log(this.registeredContact)
  this.cs.addContact(this.registeredContact).subscribe(
    data=>console.log(data),
  error=>{throw error}
  )
  this.registeredContact={firstName:"",lastName:"",email:"",phone:"",status:true}
 }
 
}
