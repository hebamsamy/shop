import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NavComponent } from "./Components/nav/nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./Components/about/about.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ContactComponent } from "./Components/contact/contact.component";
import { ProductCardComponent } from "./Components/product-card/product-card.component";
import { RateComponent } from "./Components/rate/rate.component";
import { StoreService } from "./Services/store.service";
import { MoneyPipe } from "./Pipes/money.pipe";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { appRoutes } from "./app.routes";
import { NotFoundComponent } from "./Components/not-found/not-found.component";
import { UserlayoutComponent } from "./Components/userlayout/userlayout.component";
import { AdminhomeComponent } from "./Components/adminhome/adminhome.component";
import { AdminlayoutComponent } from "./Components/adminlayout/adminlayout.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { AddProductComponent } from "./Components/add-product/add-product.component";
import { ProductDetailsComponent } from "./Components/product-details/product-details.component";
import { CartComponent } from "./Components/cart/cart.component";
import { EditProductComponent } from "./Components/edit-product/edit-product.component";

//router

@NgModule({
    //children Component
    declarations: [
        AppComponent, 
        NavComponent, 
        AboutComponent, 
        FooterComponent,
        ContactComponent,
        NotFoundComponent,
        ProductCardComponent,
        RateComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UserlayoutComponent,
        ProductDetailsComponent,
        CartComponent,
        //admin
        AdminhomeComponent,
        AdminlayoutComponent,
        ProductListComponent,
        AddProductComponent,
        EditProductComponent,
        MoneyPipe
    ],

    // every module i need/use in project 
    imports: [
        BrowserModule, 
        FormsModule, 
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,
    ],

    // exports:[ContactComponent]

    // services => DI
    providers:[
        // StoreService
        provideHttpClient()
    ],

    bootstrap:[AppComponent]

})

export class ShopModule {

}