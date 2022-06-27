import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactForm = new FormGroup(
    {
      clientName : new FormControl('', [Validators.minLength(2) , Validators.maxLength(8), Validators.required]),
      clientAge : new FormControl('' , [Validators.min(10), Validators.max(80)]),
      clientMail : new FormControl('', Validators.email),
      messageTitle : new FormControl('', Validators.pattern(/^[A-Z]/)),
      messageBody : new FormControl(),
     }
    );

  constructor() { }
 
  ngOnInit(): void {
  }

}
