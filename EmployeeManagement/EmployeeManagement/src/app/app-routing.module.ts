import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { DetailsEmpComponent } from './details-emp/details-emp.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { ViewRouteComponent } from './view-route/view-route.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emplist', component: EmplistComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'addemp', component: CreateEmpComponent, pathMatch: 'full' },
  { path: 'updateemp/:id', component: UpdateEmpComponent },
  { path: 'details/:id', component: DetailsEmpComponent },
  { path: 'addroute', component: AddRouteComponent },
  { path: 'viewroute', component: ViewRouteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
