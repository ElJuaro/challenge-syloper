import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent{

  
  @Input() movies !: any;
  constructor(private router:Router) { }
  
  mandarId(id:any){
    this.router.navigate(['movie', id])
  }

}
