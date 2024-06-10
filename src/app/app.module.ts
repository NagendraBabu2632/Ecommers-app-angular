import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ProductsComponent } from './products/products.component';
import { MyHttpInterceptor } from './user-check.interceptor';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'products', component: ProductsComponent },
  {path:'cart', component:CartComponent},
  {path:'single-product/:id', component:SingleProductComponent},
  { path: '**', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent,
    ProductsComponent,
    NavBarComponent,
    CartComponent,
    SingleProductComponent,
    SimilarProductsComponent,
    ProductsHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
   provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
