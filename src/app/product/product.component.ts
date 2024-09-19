import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private home: HomeComponent,private router:Router) {

  }


  @Input() product: any;
  @Output() update = new EventEmitter();

  increase() {
    this.product.quantity++;
    this.update.emit(this.product);
  }
  decrease() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
      this.update.emit(this.product);
    }
  }

  addcart() {
    this.product.cart = true;
    this.update.emit(this.product);
    this.home.Cartrefresh()
  }
  removecart() {
    this.product.cart = false;
    this.update.emit(this.product);
    this.home.Cartrefresh()
  }

  info(id:any){
    this.router.navigate(['app/productinfo/'+id])
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
