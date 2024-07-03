//    /home====> home
//    /about=>

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserlayoutComponent } from "./userlayout/userlayout.component";
import { AdminlayoutComponent } from "./adminlayout/adminlayout.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";


export let appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    {
        path: "", component: UserlayoutComponent, children: [
            { path: "home", component: HomeComponent },
            { path: "about", component: AboutComponent },
            { path: "contact", component: ContactComponent },
            { path: "product/:id", component: ProductDetailsComponent }
        ]
    },
    {
        path: "admin", component: AdminlayoutComponent, children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: 'home', component: AdminhomeComponent },
            { path: 'add', component: AddProductComponent },
            { path: 'list', component: ProductListComponent },
        ]
    },
    { path: "**", component: NotFoundComponent }
]
