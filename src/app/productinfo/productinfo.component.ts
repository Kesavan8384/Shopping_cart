import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent {
  product: any;
  constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getprod(id);
  }

  back() {
    this.location.back()
  }
}
