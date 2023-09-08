import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employee: Employee[] = [];
  constructor (private employeeservice:EmployeeService, private route:Router){}
  ngOnInit(): void {
      this.getdata();
  }
  public getdata()
  {
    return this.employeeservice.getEmployees()
    .subscribe((data)=>{
      this.employee =data;
    })
  }
  public update(id:number){
    return this.route.navigate(['updateemp' ,id])
  
  }
  public details(id:number){
    return this.route.navigate(['details' ,id])
  }
  public delete(id:number){
    this.employeeservice.deleteemp(id)
    .subscribe(data=>{
      console.log(data)
      this.getdata();
    })

  }
}
