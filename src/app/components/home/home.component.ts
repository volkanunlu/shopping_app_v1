import { BasketModel } from './../../models/basket';
import { Component } from "@angular/core";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html'
})

export class HomeComponent{


    baskets:BasketModel[]=[]


    //output edilen verilerin karşılığını yazarak burada çektim.sonra html kısmında da basket tarafına gönderdim.

    getBaskets(event:any){

    this.baskets=event.data;

    }
    
}