import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = [
    { id: 1, name: 'Product 1', price: 100, description: 'This is the first product description.', image: '/assets/prod-image/close-up-seller-s-hand-gloves-shows-exclusive-men-s-watch-from-new-collection-luxury-jewelry-store (1).jpg',quantity: 1,cart:false },
    { id: 2, name: 'Product 2', price: 200, description: 'This is the second product description.', image: '/assets/prod-image/businessman-checking-time.jpg' ,quantity: 1,cart:false},
    { id: 3, name: 'Product 3', price: 300, description: 'This is the third product description.', image: '/assets/prod-image/hand-gloves-takes-exclusive-rings-showcase-luxury-jewelry-store.jpg',quantity: 1,cart:false },
    { id: 4, name: 'Product 4', price: 400, description: 'This is the fourth product description.', image: '/assets/prod-image/rendering-smart-home-device (1).jpg',quantity: 1 ,cart:false},
    { id: 5, name: 'Product 5', price: 500, description: 'This is the fifth product description.', image: '/assets/prod-image/rendering-smart-home-device.jpg',quantity: 1 ,cart:false}
  ];


  getProducts() {
    return this.products;
  }

  update(updatedProduct:any) {
    const index = this.products.findIndex((p:any) => p.id === updatedProduct.id);
    if (index > -1) {
      this.products[index] = updatedProduct;
    }
  }

  getprod(id:any) {
    return this.products.find((p:any) => p.id == id);
  }


}
