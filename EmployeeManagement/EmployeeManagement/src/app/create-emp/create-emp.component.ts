import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent {
  constructor(private empservice:EmployeeService,private route:Router){}
  employee :Employee =new Employee();
  namePattern:any|RegExp='[A-Za-z\-_]+';
  emailPattern:any|RegExp= '[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}';
 
  onSubmit()
  {
  this.empservice.addEmp(this.employee)
  .subscribe((data)=>{
    console.log(data);
    this.route.navigate(['/emplist']);
  })
  }

}
