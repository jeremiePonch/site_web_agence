import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Property } from 'src/app/interfaces/property';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private propertyService: PropertiesService) {}

  propertiesFroms:FormGroup;
  propertiesSubscription:Subscription;
  properties : Property[] = [];
  indexRemove;
  indexToUpdate;
  editMode=false;

  ngOnInit(): void {
    this.initPropertiesFrom();  
    this.propertyService.propertiesSubject.subscribe(
      (data:Property[])=>{
        console.log(data);
        this.properties = data;
      }
    );
    this.propertyService.emitsProperties();
  }
  

  initPropertiesFrom(){  
    this.propertiesFroms = this.formBuilder.group({
      title: ['', Validators.required],
      category:'', 
      surfaces:'', 
      rooms:'', 
      description:'',
      price:'',
      solde:''
    });
  }

  oneSubmitPropertiesForm(){
    const newProperty:Property = this.propertiesFroms.value;
    if(this.editMode){
      this.propertyService.updateProperty(newProperty, this.indexToUpdate);
    }else{
      this.propertyService.createProperty(newProperty);
    }
    
    //console.log(this.properties);
    $('#propertiesFromModal').modal('hide');
    
  }

  //fonction qui permet le recharge du formulaire 
  resetForm(){
    this.editMode = false;
    this.propertiesFroms.reset();
  }

  onDeleteProperty(index){
    console.log(index);
    console.log(this.properties[index]);
    //if(confirm("Etes-vous sur de vouloir supprimer ce bien ?")){
      this.propertyService.deleteProperty(index);
    //}
  }


  onConfirmDelete(index){
    $('#deleteModal').modal("show");
    this.indexRemove = index;
  }


  onConfirmDeleteProperty(){
    this.propertyService.deleteProperty(this.indexRemove);
    $('#deleteModal').modal("hide");
  }

  
  onEditProperty(property:Property){
    this.editMode = true;
    //ouvrir la modal
    $('#propertiesFromModal').modal('show');
    this.propertiesFroms.get('title').setValue(property.title);
    this.propertiesFroms.get('category').setValue(property.category);
    this.propertiesFroms.get('surfaces').setValue(property.surfaces);
    this.propertiesFroms.get('rooms').setValue(property.rooms);
    this.propertiesFroms.get('description').setValue(property.description);
    this.propertiesFroms.get('price').setValue(property.price);
    this.propertiesFroms.get('solde').setValue(property.solde);
    this.editMode = true;

    const index = this.properties.findIndex(
      (propertyEl)=>{
        if(propertyEl == property){
          console.log(propertyEl);
          return true;
        }
      }
      );
      console.log(index);
    this.indexToUpdate = index;
    


    //sauvegarder index du tableau 
 

  }

}
