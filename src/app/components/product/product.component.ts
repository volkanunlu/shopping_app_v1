import { BasketModel } from './../../models/basket';
import { ProductModel } from './../../models/product';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  products:ProductModel [] = [
    {name:"Peynir",
    price:26.61,
    imageUrl:"https://www.peynircibaba.com/image/catalog/urunler/1008.jpg"},

    {name:"Zeytin",
    price:59.34,
    imageUrl:"https://cdn.dsmcdn.com/mnresize/500/-/ty278/product/media/images/20211222/9/14930386/17329977/2/2_org.jpg"},

    {name:"Salam",
    price:160.00,
    imageUrl:"https://www.basyazici.com.tr/basyazici-macar-salam-900-gram-salamlar-basyazici-et-sucuk-429-12-B.jpg"},

    {name:"Yumurta",
    price:30.00,
    imageUrl:"https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30098630/30098630_0_MC/8797011247154_1499978070917.jpg"},

    {name:"Reçel",
    price:22.00,
    imageUrl:"https://www.segmen.com.tr/segmen-diyabetik-cilek-receli-kavanoz-230g-diyabetik-recel-segmen-bal-recel-556-32-O.jpg"},

    {name:"Bal",
    price:92.41,
    imageUrl:"https://m.media-amazon.com/images/I/712z43hZMDL.jpg"},

    {name:"Kaşar Peyniri",
    price:33.95,
    imageUrl:"https://st1.myideasoft.com/idea/if/83/myassets/products/181/sm-urun-gorselleri-peynirler-310700-kasar-peyniri-225g.jpg?revision=1638257738"},

    {name:"Yeşil Zeytin",
    price:104.95,
    imageUrl:"https://www.aydizeytin.com.tr/wp-content/uploads/2020/10/KOY-KIRMA-YESIL-ZEYTIN-2-KILO.jpg"},

    {name:"Süt",
    price:17.45,  
    imageUrl:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11013025/11013025-cf97ab-1650x1650.jpg"},
    
    {name:"Sucuk",
    price:129.90,
    imageUrl:"https://st.myideasoft.com/idea/en/31/myassets/products/082/fermente-kangalll_min.jpg?revision=1628850875"},

    {name:"Tereyağı",
    price:23.50,
    imageUrl:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/12010203/sutas-tereyagi-125-gr-4f4e46.jpg"},

    {name:"Lavaş",
    price:32.50,
    imageUrl:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05051773/05051773-2e6f99-1650x1650.jpg"},

    {name:"Nutella",
    price:54.15,
    imageUrl:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07155709/07155709-00754d-1650x1650.jpg"},

    {name:"Çay",
    price:68.49,
    imageUrl:"https://cdnsta.avansas.com/mnresize/900/-/urun/50129/caykur-tiryaki-cayi-1000-gr-zoom-1.jpg"},

    {name:"Sıvı Yağ",
    price:235.00,
    imageUrl:"https://productimages.hepsiburada.net/s/158/500/110000115512664.jpg"},

    {name:"Soya Kıyma",
    price:30.00, 
    imageUrl:"https://cdn.shopify.com/s/files/1/1194/0918/products/3F170C85-B172-4175-8B6C-A64EFF592CF1_1024x1024.png?v=1564342927"}



  ]      //ürünleri modelden alıyoruz. //url name ve fiyat bilgisini buradan çekiyoruz.

 baskets:BasketModel [] = []; //Basketi bu alanda çağırdık.(Sepet olayı)

 total:number=0;
 @Output() myEvent: EventEmitter <any> = new EventEmitter();
  //Home'a  outputla birlikte event gönderdik.



  constructor(private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  addBasket(product:ProductModel){
    let basketModel= new BasketModel();  //Modelden aldık
    basketModel.product=product;  
    basketModel.quantity=parseInt((<HTMLInputElement>document.getElementById("quantity-"+product.name)).value);  

    //Elementi id'si ile yakaladık parseInt ve value ile sayısını çektik.
    (<HTMLInputElement>document.getElementById("quantity-"+product.name)).value="1";
    //Sonrasında adet sayısını tekrar 1 alması adına oluşturduk.
    this.baskets.push(basketModel); 
    this.total=this.total+ basketModel.quantity* product.price;
    this.myEvent.emit({data:this.baskets}); //Event ile verdik.
    this.toastrService.success(product.name+ " Eklendi","Başarılı!");

  }

}


