import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartitemscount: number = 0;
  constructor(private router: Router, private toastr: ToastrService, private productservice: ProductService) {

  }

  ngOnInit(): void {

  }

  Cartrefresh() {
    const product = this.productservice.products
    this.cartitemscount = product.filter((x: any) => x.cart == true).length
  }


  logout() {
    localStorage.clear()
    this.router.navigate(['/app/signin'])
    this.toastr.success('Logout Successfully')
  }

  gotocart(){
     this.router.navigate(['app/cart'])
  }  
}
