import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product.model';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() products: Product[];
  getSubTotal() {
    let sum = 0;
    this.products.forEach((element) => {
      sum += element.price * element.quality;
    });
    return sum;
  }
}
