import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onChangeQuality = new EventEmitter();

  changeQuality(product: Product) {
    if(product.quality <0) product.quality = 0;
    this.onChangeQuality.emit(product);
  }
  removeProduct(productId: string) {
    let confrm = confirm('Xóa sản phẩm có id= ' + productId);
    if (confrm) {
      this.onRemoveProduct.emit(productId);
      // let index = this.products.findIndex((item) => item.id === product.id);
      // this.products.splice(index, 1);
    }
  }
}
