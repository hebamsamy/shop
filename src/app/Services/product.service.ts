import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddProductModel } from '../Types/addproductmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  GetAllUrl = "https://localhost:64346/Product/Search";
  editUrl= ""
  getOneUrl=''
  deletaUrl=''
  addUrl= "http://localhost:5170/api/Product/add";

  constructor(private http: HttpClient) {
  }

  getAllProduct() {
    return this.http.get(this.GetAllUrl)
  }

  getProductByID(id:number) {
    return this.http.get(this.getOneUrl)
  }

  addProduct(obj:any){
    return this.http.post(this.addUrl,obj)
  }

  edit(obj:any){
    return this.http.put(this.editUrl,obj)
  }

  delete(id:number){
    return this.http.delete(this.deletaUrl)
  }

}
