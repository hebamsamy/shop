import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "https://localhost:64346/Product/Search";

  constructor(private http: HttpClient) {
  }


  getAllProduct() {
    return this.http.get(this.url)
  }



}
