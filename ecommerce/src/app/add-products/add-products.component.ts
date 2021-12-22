import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  formObj!: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router:Router) { }

  ngOnInit(): void {

    this.formObj = this.formBuilder.group({
      name: [''],
      type:[''],
      category: [''],
      price: [''],
      seller: [''],
      product_image: [''],
      product_info: [''],
    })

  }
  
  setUser(formObj: any) {
    this.productService.addProduct(this.formObj.value);
    this.router.navigate(['/', 'products'])
  }
}
