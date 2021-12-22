import { Component, OnInit } from '@angular/core';
import { Products } from '../add-products/products.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products!: Products[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getcartproducts().subscribe(prod => {
      this.products = prod.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Products;
      })
    });
  }

  sendCategory(product:Products) {
    this.productService.productCategory = product.category;
  }

  deleteproduct(pid:any) {
    this.productService.productid = pid;
    this.productService.deletefromcart();
  }

}
