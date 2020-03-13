import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Ma Super Agence';
  isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }


  onClick(){
    alert('Hello World');
    this.isDisabled = false;
  }

}
