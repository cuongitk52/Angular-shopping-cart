import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Product } from '../Product.model';
import { ProductService } from '../Product.service';
import { Promo } from '../Promo.model';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  constructor(private productService: ProductService) {
    this.promos = this.productService.promos;
    this.products = this.productService.products;
  }
  @Input() subTotal: number;
  @Input() products: Product[];
  @Output() onReloadProduct = new EventEmitter();
  promos: Promo[];
  percentDiscount = 0;
  promoCode: string = null;
  totalDiscount: number = 0;
  calculateDiscount() {
    let promo = this.productService.GetPromoByCode(this.promoCode);
    if (promo) {
      this.percentDiscount = promo.discountPercent;
      this.totalDiscount = (this.subTotal * this.percentDiscount) / 100;
    } else {
      alert('Mã khuyến mại không đúng');
    }
  }
  ShoppingNow(){
    this.onReloadProduct.emit();
  }
}
