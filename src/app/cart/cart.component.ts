import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private productservice: ProductService, private location: Location) { }

  ngOnInit() {
    this.cartItems = this.productservice.getProducts().filter((x: any) => x.cart == true);
    console.log(this.cartItems)
  }

  remove(id: any) {
    this.cartItems = this.cartItems.filter(p => p.id !== id);
    this.productservice.products.map((x:any)=>{
      if(x.id==id){
       x.quantity=1;
       x.cart=false
      }
    })

  }
  back() {
    this.location.back()
  }

  gettotal() {
    return this.cartItems.reduce((total, product) => total + (product.price * product.quantity), 0);
  }
}
