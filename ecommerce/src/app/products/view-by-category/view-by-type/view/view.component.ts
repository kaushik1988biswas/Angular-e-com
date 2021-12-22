import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/add-products/products.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  products!: any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getproductsbyid().subscribe(res => {
      this.products=res.data();
    });
  }

  addproduct(products:any) {
    this.productService.product = products;
    this.productService.addtocart();
  }
  editproduct(products:any) {
    this.productService.product = products;
  }
  deleteproduct(products:any) {
    this.productService.product = products;

  }
}
