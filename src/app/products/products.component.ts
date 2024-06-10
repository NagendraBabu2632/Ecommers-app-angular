import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  activeCategoryId:any = ""
  searchInput:any= ""
  activeRatingId:any = ""
  

  sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: 'Price (High-Low)',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'Price (Low-High)',
    },
  ]

  activeOptionId: string = this.sortbyOptions[0].optionId;

  categoryOptions = [
    {
      name: 'Clothing',
      categoryId: '1',
    },
    {
      name: 'Electronics',
      categoryId: '2',
    },
    {
      name: 'Appliances',
      categoryId: '3',
    },
    {
      name: 'Grocery',
      categoryId: '4',
    },
    {
      name: 'Toys',
      categoryId: '5',
    },
  ]

  ratingsList = [
    {
      ratingId: '4',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
    },
    {
      ratingId: '3',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
    },
    {
      ratingId: '2',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
    },
    {
      ratingId: '1',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
    },
  ]
  


  constructor(private pr:ProductsService){

  }

  productDetails: any
 
  getcatId(catId:any){
    this.activeCategoryId = catId
    this.ngOnInit() 
  }

  getrateId(rateId:any){
   this.activeRatingId = rateId
   this.ngOnInit()
  }

  onActiveOptionIdChange(activeOptionId: string): void {
    this.activeOptionId = activeOptionId;
    this.ngOnInit(); // Call ngOnInit to reload the products based on the new activeOptionId
  }

  searchText(searchValue: any): void {
    if (searchValue !== null) {
      this.searchInput = searchValue;
      this.ngOnInit()
    }
  
  }

  clearAll(): void {
    this.searchInput = '';
    this.activeCategoryId = '';
    this.activeRatingId = '';
    this.activeOptionId =  this.sortbyOptions[0].optionId;
    this.ngOnInit() // Call the method to reload the products based on the cleared filters
  }

  ngOnInit(): void {
  
    this.pr.getProducts(this.activeOptionId,this.searchInput,this.activeCategoryId,this.activeRatingId).subscribe((data)=>{
      this.productDetails=data
    },(error)=>{console.log(error,"prd error")})
  
  }

}

