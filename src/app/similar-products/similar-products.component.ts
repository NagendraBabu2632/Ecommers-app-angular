import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrl: './similar-products.component.css'
})
export class SimilarProductsComponent implements OnChanges{
 
  @Input() similarProducts: any[] = [];
  @Output() productSelected = new EventEmitter<any>(); 


  constructor(private se:ProductsService){

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Similar Products:', this.similarProducts);
  }

  changetoPrd(e:any){
     this.se.getSingleProduct(e).subscribe((data)=>{
      this.productSelected.emit(data);
     })
  }
 
  
}
