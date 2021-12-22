import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/add-products/products.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  products!: Products[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsList().subscribe(prod => {
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

  addproduct(product:any) {
    this.productService.product = product;
    this.productService.addtocart();
  }

}
