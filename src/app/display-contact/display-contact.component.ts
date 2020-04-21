import { Component, OnInit } from '@angular/core';
import { Icontact } from '../icontact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {
contacts:Icontact[]=[];
results:Icontact[]=JSON.parse(JSON.stringify(this.contacts));

  constructor(private cs:ContactService) { }

  ngOnInit() {
    
this.cs.getContacts().subscribe(
  data=>{
    console.log(data);
    this.contacts=data;
  },
  err=>{
    throw err;
  }
  )

  }



  Search(value:string){
    
    this.contacts.forEach((item)=>console.log("first",item));
    if(value){
      this.contacts.forEach((item)=>console.log("before equating",item))
      //this.contacts=JSON.parse(JSON.stringify(this.results));
      this.contacts.forEach((item)=>console.log("after equating",item));
     this.contacts=this.contacts.filter(item=>{
       return (item.firstName.toLocaleLowerCase().match(value.toLocaleLowerCase()) || 
       item.lastName.toLocaleLowerCase().match(value.toLocaleLowerCase()));
     })
  this.contacts.forEach((item)=>console.log("result",item));
  return this.contacts;
   }else{
    this.contacts.forEach((item)=>console.log("last",item));

    return this.cs.getContacts().subscribe(
      data=>{
        console.log(data);
        this.contacts=data;
      },
      err=>{
        throw err;
      }
      )
     
   }
 
    
   }

}
