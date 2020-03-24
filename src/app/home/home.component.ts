import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  propertieSubscription : Subscription;

  properties = [];

  constructor( private propertiesService : PropertiesService ) { 
  }

  ngOnInit(){
    this. propertieSubscription = this.propertiesService.propertiesSubject.subscribe(
      (data:any) => {
        console.log(data);
        this.properties = data;
      }
    );
    this.propertiesService.emitsProperties();
    
  }

  getSolde(index){
    if(this.properties[index].solde){
      return 'red';
    }else{
      return 'green';
    }
  }

  ngOndestroy(){
    this.propertieSubscription.unsubscribe;
  }
}
