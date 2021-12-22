import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/add-products/products.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-view-by-type',
  templateUrl: './view-by-type.component.html',
  styleUrls: ['./view-by-type.component.css']
})
export class ViewByTypeComponent implements OnInit {

  products!: Products[];
  productsByType!: Products[];
 
  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.productService.getproductsbytype().subscribe(res => {
      this.products = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Products;
      })
    });
  }

  sendId(productid:any) {
    this.productService.productId = productid;
  }

  addproduct(product: any) {
    this.productService.product = product;
    this.productService.addtocart();
  }
}
