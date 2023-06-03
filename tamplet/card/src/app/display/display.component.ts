import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  data:any
  first_name:any
  last_name:any
  phoneNo:any
  address:any
  gender:any
  email:any
  pin:any

  constructor () {}

  ngOnInit () : void {
    this.get()
  }

    get () {
      this.data=localStorage.getItem('session')

      this.first_name=localStorage.getItem('first_name')
      this.first_name=JSON.parse(this.first_name)
      this.last_name=localStorage.getItem('last_name')
      this.last_name=JSON.parse(this.last_name)
      this.email=localStorage.getItem('email')
      this.email=JSON.parse(this.email)
      this.address=localStorage.getItem('address')
      this.address=JSON.parse(this.address)
      this.phoneNo=localStorage.getItem('phoneNo')
      this.phoneNo=JSON.parse(this.phoneNo)
      this.pin=localStorage.getItem('pin')
      this.pin=JSON.parse(this.pin)
  }
  clear() {
    localStorage.clear()
  }
  }

