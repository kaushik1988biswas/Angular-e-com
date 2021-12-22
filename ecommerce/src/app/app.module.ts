import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { SignupComponent } from './users/signup/signup.component';
import { SigninComponent } from './users/signin/signin.component';
import { ViewAllComponent } from './products/view-all/view-all.component';
import { ViewComponent } from './products/view-by-category/view-by-type/view/view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ViewByCategoryComponent } from './products/view-by-category/view-by-category.component';
import { ViewByTypeComponent } from './products/view-by-category/view-by-type/view-by-type.component';
import { EditComponent } from './products/view-by-category/view-by-type/view/edit/edit.component';
import { CartComponent } from './cart/cart.component'



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    AddProductsComponent,
    SignupComponent,
    SigninComponent,
    ViewAllComponent,
    ViewComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    SigninComponent,
    SignupComponent,
    ViewAllComponent,
    ViewComponent,
    ViewByCategoryComponent,
    ViewByTypeComponent,
    EditComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
