import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { DetailsEmpComponent } from './details-emp/details-emp.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { ViewRouteComponent } from './view-route/view-route.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    HomeComponent,
    CreateEmpComponent,
    UpdateEmpComponent,
    DetailsEmpComponent,
    AddRouteComponent,
    ViewRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
