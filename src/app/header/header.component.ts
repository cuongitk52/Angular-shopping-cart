import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() totalItems: number;
}
