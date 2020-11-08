import { Injectable,OnInit } from '@angular/core';
import { Product } from '../app/Product.model';
import { Promo } from '../app/Promo.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  ngOnInit(){
  }
  constructor(){
    this.LoadProduct();
  }
  products: Product[] = [];
  promos: Promo[] = [
    {
      code: 'CUONGBUI1',
      discountPercent: 10
    },
    {
      code: 'CUONGBUI2',
      discountPercent: 20
    },
  ];
  LoadProduct(){
    this.products = [
      {
        id: '1',
        name: 'Ô tô',
        description: 'Đây là phần tử thứ 1',
        image: 'https://via.placeholder.com/200x150',
        price: 12000,
        quality: 2,
      },
      {
        id: '2',
        name: 'Xe máy',
        description: 'Đây là phần tử thứ 2',
        image: 'https://via.placeholder.com/200x150',
        price: 24000,
        quality: 6,
      },
    ];
  }
  getSubTotal() {
    let sum = 0;
    this.products.forEach((element) => {
      sum += element.price * element.quality;
    });
    return sum;
  }
  RemoveProductById(productId) {
    let index = this.products.findIndex((item) => item.id === productId);
    this.products.splice(index, 1);
  }
  UpdateQuality(product: Product) {
    let index = this.products.findIndex((item) => item.id === product.id);
    this.products[index].quality = product.quality;
  }
  GetPromoByCode(promoCode){
    return this.promos.find((item) => item.code === promoCode);
  }
}
