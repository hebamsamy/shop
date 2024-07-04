//    /home====> home
//    /about=>

import { Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from "./Components/login/login.component";
import { ContactComponent } from "./Components/contact/contact.component";
import { AboutComponent } from "./Components/about/about.component";
import { RegisterComponent } from "./Components/register/register.component";
import { NotFoundComponent } from "./Components/not-found/not-found.component";
import { UserlayoutComponent } from "./Components/userlayout/userlayout.component";
import { AdminlayoutComponent } from "./Components/adminlayout/adminlayout.component";
import { AddProductComponent } from "./Components/add-product/add-product.component";
import { AdminhomeComponent } from "./Components/adminhome/adminhome.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { ProductDetailsComponent } from "./Components/product-details/product-details.component";


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
