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

//router

@NgModule({
    //children Component
    declarations: [
        AppComponent, 
        NavComponent, 
        AboutComponent, 
        FooterComponent,
        ContactComponent,
        ProductCardComponent,
        RateComponent,
        MoneyPipe
    ],

    // every module i need/use in project 
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule],

    // exports:[ContactComponent]

    // services => DI
    providers:[
        // StoreService
    ],

    bootstrap:[AppComponent]

})

export class ShopModule {

}