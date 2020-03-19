import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { 
    
  }

  propertiesFroms:FormGroup;

  ngOnInit(): void {
    this.initPropertiesFrom();  
  }
  

  initPropertiesFrom(){  
    this.propertiesFroms = this.formBuilder.group({
      title: ['', Validators.required],
      category:'', 
      surfaces:'', 
      rooms:'', 
      description:'',
      price:''
    });
  }

  oneSubmitPropertiesForm(){
    console.log(this.propertiesFroms.value);
  }




}
