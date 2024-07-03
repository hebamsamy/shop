import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { RateComponent } from "./rate/rate.component";
import { StoreService } from "./Services/store.service";
import { MoneyPipe } from "./Pipes/money.pipe";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { appRoutes } from "./app.routes";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserlayoutComponent } from "./userlayout/userlayout.component";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { AdminlayoutComponent } from "./adminlayout/adminlayout.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

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
        //admin
        AdminhomeComponent,
        AdminlayoutComponent,
        ProductListComponent,
        AddProductComponent,
        MoneyPipe
    ],

    // every module i need/use in project 
    imports: [
        BrowserModule, 
        FormsModule, 
        RouterModule.forRoot(appRoutes)
    ],

    // exports:[ContactComponent]

    // services => DI
    providers:[
        // StoreService
    ],

    bootstrap:[AppComponent]

})

export class ShopModule {

}