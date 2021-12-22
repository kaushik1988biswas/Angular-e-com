import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  prod!: FormGroup;
  product: any;

  constructor(private productService:ProductService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.productService.getproductsbyid().subscribe(res => {
      this.product=res.data();
    });
    this.prod = this.formBuilder.group({
      id:[this.productService.productId],
      name : [this.product.name],
      type : [this.product.type],
      category : [this.product.category],
      price : [this.product.price],
      seller : [this.product.seller],
      product_image : [this.product.product_image],
      product_info : [this.product.product_info]
    });
  }

  setUser() {
    console.log(this.prod.value);

    this.productService.product = this.prod.value;
    this.productService.updateproductbyid();
    // this.router.navigate(['/', 'products']);
  }

}
