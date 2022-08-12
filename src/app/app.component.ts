import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForms';

  @ViewChild('contactForm')contactForm:any;

  countryList:country[] = [
    new country("1", "India"),
    new country("2", "USA"),
    new country("3", "England")
  ]

  contact:contact = new contact();

  ngOnInit() {
    this.contact = {
      firstname:"Keerthi",
      lastname:"Prabhu",
      email:"keerthikpb@gmail.com",
      gender:"female",
      isMarried:false,
      country:"2",
      address : {
        city:"Udupi",
        street:"Devi nagar",
        pincode:"576113"
     }    
    };

    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    })
  }

  setDefaults() {

    this.contactForm.setValue(this.contact);
  }
 

  onSubmit(contactForm:NgForm) {
    //console.log(contactForm.value);
    console.log(this.contact);
  }

  changeCountry() {
    this.contactForm.controls["country"].setValue("1");
  }

  patchValue() {
    let obj = {
      firstname:"Rahul",
      lastname:"Dravid",
      email:"rahul@gmail.com"
    };
    this.contactForm.control.patchValue(obj);
  }

 

  changeAddress() {
    let obj = {
      city:"Banglore",
      street:"Brigade road",
      pincode:"563001"
    }
    let address = this.contactForm.controls["address"] as FormGroup;
    address.patchValue(obj);
  };

   

  reset() {
    this.contactForm.reset();
  }

  resetForm() {
    this.contactForm.resetForm();
  }

}

export class country {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id = id;
    this.name = name;
  }

}

export class contact {
  firstname:string;
  lastname:string;
  email:string;
  gender:string;
  isMarried:boolean;
  country:string;
  address : {
    city:string;
    street:string;
    pincode:string;
  } 

  
  constructor() {
  this.firstname = " ";
  this.lastname = "";
  this.email = "";
  this.gender = "";
  this.isMarried = false;
  this.country = "";
  this.address = {
    city : "",
    street : "",
    pincode : ""
  } 
  }

}