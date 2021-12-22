import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Products } from '../add-products/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productType!: string;
  productCategory!: string
  productId!: string;
  product!: Products;
  productid!: string;

  constructor(private angularFireStore:AngularFirestore) { }

  addProduct(products:Products){
    return this.angularFireStore.collection<Products>("products").add(products).then(res => {
      console.log(res);
    },error=>console.log(error))
  }

  getProductsList() {
    return this.angularFireStore.collection<Products>("products").snapshotChanges();
  }

  getProductsbycategory() {
    return this.angularFireStore.collection<Products>("products", ref=>ref.where("category","==",this.productCategory)).snapshotChanges();
  }

  getproductsbytype() {
    return this.angularFireStore.collection<Products>("products", ref=>ref.where("type","==",this.productType)).snapshotChanges();
  }

  getproductsbyid() {
    return this.angularFireStore.collection("products").doc(this.productId).get();
  }

  updateproductbyid() {
    return this.angularFireStore.collection("products").doc(this.product.id).update({
      name: this.product.name,
      type:this.product.type,
      category:this.product.category,
      price:this.product.price,
      seller:this.product.seller,
      product_info: this.product.product_info,
      product_image:this.product.product_image
    }).then(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

  addtocart() {
    return this.angularFireStore.collection("cart").add({
      name: this.product.name,
      type:this.product.type,
      category:this.product.category,
      price:this.product.price,
      seller:this.product.seller,
      product_info: this.product.product_info,
      product_image:this.product.product_image
    }).then(res => {
      console.log(res);
    }, error => console.log(error));
  }

  deletefromcart() {
    this.angularFireStore.collection("cart").doc(this.productid).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  }

  getcartproducts() {
    return this.angularFireStore.collection<Products>("cart").snapshotChanges();
  }
}
