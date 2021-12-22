import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ViewAllComponent } from './products/view-all/view-all.component';
import { ViewByCategoryComponent } from './products/view-by-category/view-by-category.component';
import { ViewByTypeComponent } from './products/view-by-category/view-by-type/view-by-type.component';
import { EditComponent } from './products/view-by-category/view-by-type/view/edit/edit.component';
import { ViewComponent } from './products/view-by-category/view-by-type/view/view.component';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  { path:'', redirectTo: '/users', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'cart', component:CartComponent},
  {
    path: 'users', children: [
      { path: '', component: SigninComponent },
      {path:'signup', component:SignupComponent}
    ]
  },
  {
    path: 'products', children: [
      { path: '', component: ViewAllComponent },
      {
        path: 'viewbycategory', children: [
          { path: '', component: ViewByCategoryComponent },
          {
            path: 'viewbytype', children: [
              { path: '', component: ViewByTypeComponent },
              {
                path: 'view', children: [
                  { path: '', component: ViewComponent },
                  { path: 'edit', component: EditComponent }
              ]}
          ]}
      ]}
    ]
  },
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
