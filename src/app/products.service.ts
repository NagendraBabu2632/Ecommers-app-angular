import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"

  constructor(private http:HttpClient) { }

   loginUser(usname:any,psword:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwtToken}`
    });
    const body = { usname, psword };
    console.log(body,"body")
    return  this.http.post("https://apis.ccbp.in/login",body)
  }

  getProducts(activeOptionId?:string, searchInput?: string, activeCategoryId?: any, activeRatingId?: any): Observable<any> {
    return this.http.get(`https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`)
    
  }

  getSingleProduct(id:any){
    return this.http.get(`https://apis.ccbp.in/products/${id}`)
  }


}
