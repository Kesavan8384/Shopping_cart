import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products :any= [];
  constructor(private productservice: ProductService) {}
  ngOnInit() {
    this.products = this.productservice.getProducts();
  }

  update(product:any) {
    
    this.productservice.update(product);
  }
}
