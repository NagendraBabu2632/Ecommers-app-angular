import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit{
  productId: any;
  singleProduct:any;

  constructor(private route: ActivatedRoute, private prd: ProductsService) { }

  onProductSelected(product: any) {
    this.singleProduct = product;
    // Handle the selected product data
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getSingleProduct();
  }
  
  getSingleProduct() {
    this.prd.getSingleProduct(this.productId).subscribe(
      (data) => { this.singleProduct = data},
      (error) => { console.log(error); }
    );
  }
}