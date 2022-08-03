import { ToastrService } from 'ngx-toastr';
import { ProductModel } from './../../models/product';
import { BasketModel } from './../../models/basket';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @Input() baskets:BasketModel[]=[]; //Model bağladık. 
  @Input()total:number=0;

  //Basket tarafında ınputla birlikte karşılığını yakalayarak form ekranıma yazdırmış oldum.

  constructor(private toastrService:ToastrService) { }

  ngOnInit(): void {

    

  }

  deleteProduct(basket:BasketModel)
  {
    let index= this.baskets.indexOf(basket); //hangi indexte olduğunu buluyoruz.
    this.baskets.splice(index,1); //bulduğun indexi sil işlemi.
    // this.total= this.total- (basket.product.price * basket.quantity);
    this.toastrService.error(basket.product.name+"  silindi");
   
  }

  calc(){

    this.total=0;
    this.baskets.forEach(element => {
      this.total=this.total+(element.product.price * element.quantity)

      //Sepet toplamını dinamik hale getirdik. Ekleme ve çıkarmalarında düzgün sonuç vermesi adına.
    })

    return this.total;

  }

  changeData(basket:BasketModel){

    let quantity:number = parseInt((<HTMLInputElement>document.getElementById("basketQuantity-"+basket.product.name)).value);
    //sepet adetinde yakalanan değişikliği yakalamak adına elemente id verildi, verilen id ile element yakalandı ve value ile değeri çekildi.
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index,1); 
    basket.quantity=quantity;
    this.baskets.push(basket);


  }

  payment(event:any){
    if(this.total==event.total){
      let count=this.baskets.length;
      this.baskets.splice(0,count);
      this.toastrService.info("Ödeme Başarılı, siparişiniz hazırlanıyor!");
    }


  }




}
