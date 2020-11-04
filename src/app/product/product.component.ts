import { Component, OnInit } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: Product[] = [
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

  removeProduct(productId: string) {
    let confrm = confirm('Xóa sản phẩm có id= ' + productId);
    if (confrm) {
      let index = this.products.findIndex((item) => item.id === productId);
      this.products.splice(index, 1);
    }
  }
}
