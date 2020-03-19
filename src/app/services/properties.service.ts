import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class PropertiesService {

  constructor() { }


  propertiesSubject = new Subject< any[]>();

  
  emitsProperties(){
    this.propertiesSubject.next(this.tabLogement);
  }

  // getProperties(){
  //   return new Promise(
  //     (resolve, reject) => {
  //       if(this.tabLogement && this.tabLogement.length >0){
  //         resolve(this.tabLogement);
  //       }
  //       else{
  //         const error = new Error('tabLogement does not exist or is empty')
  //         reject(error);
  //       }
  //     }
  //   )
  // }

  tabLogement = [
    {
      title:'Ma super maison', 
      category:'Maison',
      solde:true
    },
    {
      title:'Mon appartement',
      category:'Appartement',
      solde: false
    },
    {
      title: 'Ma super villa',
      category:'Maison',
      solde:'false'
    }

  ];

}
