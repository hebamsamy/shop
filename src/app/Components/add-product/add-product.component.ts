import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategroyService } from '../../Services/Categroy.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  form: FormGroup;
  productData: FormData;
  catList :any[] = []

  constructor(
    private prdServ: ProductService,
    private builder: FormBuilder,
  private router:Router,
  private CatServ:CategroyService
) {
  this.CatServ.getAll().subscribe((res:any)=>{
    this.catList = res
  })
    this.productData = new FormData();

    this.form = this.builder.group({
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      CategoryID: ['', [Validators.required]],
      Quantity: ['', [Validators.required]],
      Price: ['', [Validators.required]],
    })

  }

  Send() {
    this.productData.append("Name", this.form.controls['Name'].value)
    this.productData.append("Description", this.form.controls['Description'].value)
    this.productData.append("CategoryID", this.form.controls['CategoryID'].value)
    this.productData.append("Quantity", this.form.controls['Quantity'].value)
    this.productData.append("Price", this.form.controls['Price'].value)

    this.prdServ.addProduct(this.productData).subscribe({
      next: (res) => {
        console.log(res);
        // this.router.navigateByUrl('/admin/list')
        // this.form.reset()
        // this.productData = new FormData()
      },
      error: (err) => {
        console.log(err);

      },
    })

  }

  choose(elem: any) {
    console.log(elem.files);
    
    for (let index = 0; index < elem.files.length; index++) {
      this.productData.append("Images", elem.files[index])
    }
  }
}
