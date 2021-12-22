import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/add-products/products.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-by-category',
  templateUrl: './view-by-category.component.html',
  styleUrls: ['./view-by-category.component.css']
})
export class ViewByCategoryComponent implements OnInit {

  products!: Products[];
  productsByType!: Products[];
 
  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.productService.getProductsbycategory().subscribe(res => {
      this.products = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Products;
      })
    });
  }

  sendType(product:Products) {
    this.productService.productType = product.type;
  }

  addproduct(product: any) {
    this.productService.product = product;
    this.productService.addtocart();
  }
}
