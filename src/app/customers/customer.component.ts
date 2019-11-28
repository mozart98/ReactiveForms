import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';

import { Customer } from './customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm:FormGroup;
  customer = new Customer();

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customerForm=this.fb.group({
      firstName:'Thomas',
      lastName:'Rosicky',
      email:'Thomas_Rosicky@gmail.com',
      sendCatalog:false
    })

  
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }


  populateTestData(){
    this.customerForm.patchValue({
      
      lastName:'Assila',
      email:'mozart.assila@gmail.com',
      sendCatalog:false
    });
  }

  
}
