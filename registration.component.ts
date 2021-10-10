
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
public regForm = new FormGroup({
  phone: new FormControl(""),
  pancardno: new FormControl(""),
  firstname: new FormControl(""),
  email: new FormControl(""),
  
  
  
})
public registration(user:any){
  console.log("User datas", user)


}
  constructor() { }

  ngOnInit(): void {
  }

}

