import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent {
  personalDetailsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  
  onSubmit() {
    console.log(this.personalDetailsForm.value);

  }

}
