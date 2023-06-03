import { Component } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validator} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  form1!: FormGroup
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form1 = this.fb.group({
       newemail: [''],
    });
  }


  Edit() {
    localStorage.setItem('email', JSON.stringify(this.form1.value.newemail));
    alert("Email Edited")
  }


}
