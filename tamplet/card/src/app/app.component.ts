import { Component, ɵɵpureFunction1 } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, MinLengthValidator , FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card';
  form!: FormGroup;
  constructor(private fb: FormBuilder){
    this.createForm();

    this.form = new FormGroup({
      first_name: new FormControl('',[Validators.required , Validators.minLength(4), ]),
      last_name: new FormControl('',[Validators.required , Validators.minLength(4)]),
      phoneNo: new FormControl('',[Validators.required , Validators.pattern('[0-9]{10}'), Validators.maxLength(10)&&Validators.minLength(10)]),
      address: new FormControl('',[Validators.required , Validators.minLength(4),]),
      email: new FormControl('',[Validators.required , Validators.minLength(4), Validators.email ]),
      pin: new FormControl('',[Validators.required , Validators.minLength(6)||Validators.maxLength(6)]),
    })
  }

  
  createForm() {
    this.form = this.fb.group({
       first_name: ['', Validators.required],
       last_name: ['', Validators.required],
       phoneNo: ['',Validators.required],
       address: ['',Validators.required],
       email: ['', Validators.required],
       pin: ['',Validators.required]
    });
  }


  // store(){
  //   var data={
  //     first_name: this.form.value.first_name,
  //     last_name: this.form.value.last_name,
  //     phoneNo: this.form.value.phoneNo,
  //     address: this.form.value.address,
  //     email: this.form.value.email,
  //     pin: this.form.value.pin,
  //   }

  //   var name=this.form.value.first_name;
  //   var last=this.form.value.last_name;
  //   var number=this.form.value.phoneNo;
  //   var address=this.form.value.address;
  //   var email=this.form.value.email;
  //   var pin=this.form.value.pin;

  //   // localStorage.setItem('session',JSON.stringify(data));
  //   localStorage.setItem('first_name',JSON.stringify(name));
  //   localStorage.setItem('last_name',JSON.stringify(last));
  //   localStorage.setItem('phoneNo',JSON.stringify(number));
  //   localStorage.setItem('address',JSON.stringify(address));
  //   localStorage.setItem('email',JSON.stringify(email));
  //   localStorage.setItem('pin',JSON.stringify(pin));

  //   console.log("Store() working fine");
  //   this.form.reset({})
  // }

  get first_name(){
    return this.form.get('first_name');
  }
  get last_name(){
    return this.form.get('last_name');
  }
  get phoneNo(){
    return this.form.get('phoneNo');
  }
  get address(){
    return this.form.get('address');
  }
  get email(){
    return this.form.get('email');
  }
  get pin(){
    return this.form.get('pin');
  }





  loginuser(){
    console.log(this.form.value);
    var data={
      first_name: this.form.value.first_name,
      last_name: this.form.value.last_name,
      phoneNo: this.form.value.phoneNo,
      address: this.form.value.address,
      email: this.form.value.email,
      pin: this.form.value.pin,
    }

    var name=this.form.value.first_name;
    var last=this.form.value.last_name;
    var number=this.form.value.phoneNo;
    var address=this.form.value.address;
    var email=this.form.value.email;
    var pin=this.form.value.pin;

    function customEmailValidator(control: AbstractControl): {[key: string]: any} | null {
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (control.value && !emailRegex.test(control.value)) {
        return { invalidEmail: true };
      }
      return null;
    }

    // localStorage.setItem('session',JSON.stringify(data));
    localStorage.setItem('first_name',JSON.stringify(name));
    localStorage.setItem('last_name',JSON.stringify(last));
    localStorage.setItem('phoneNo',JSON.stringify(number));
    localStorage.setItem('address',JSON.stringify(address));
    localStorage.setItem('email',JSON.stringify(email));
    localStorage.setItem('pin',JSON.stringify(pin));

    console.log("Store() working fine");
    this.form.reset({})

  }

}
