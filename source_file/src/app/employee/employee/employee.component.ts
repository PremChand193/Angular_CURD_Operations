import { Component } from '@angular/core';
import { IEmployee } from '../employee-model';
import { NgForm } from '@angular/forms';
import { SampleService } from 'src/app/service/sample.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent {
  employee={} as IEmployee;
  employees=[] as IEmployee[];
  isEdit=false;
  check=false;
  tabValue:number=0;
  mul=0;
  div=0
  constructor(private _service:SampleService){
    this.mul=this._service.mul(2,5);
    this.div=this._service.div(10,5);
   this.employees=[ {empId:101,empName:'prem',empSalary:25000,empAddress:'kphb',isChecked:false},
   {empId:102,empName:'chandler',empSalary:35000,isChecked:false},
   {empId:103,empName:'joey',empSalary:45000,empAddress:'tpg',isChecked:false},
   {empId:104,empName:'charan',empSalary:65000,empAddress:'rvp',isChecked:false},
   {empId:105,empName:'merla',empSalary:55000,isChecked:false}
  ]};
  public selector(no:number){
    this.tabValue=no;
  }
  
  public addEmployee(f:NgForm){
    if(this.isEdit){
      let emp=this.employees.find((obj)=>obj.empId==this.employee.empId) as IEmployee;
      emp.empId=this.employee.empId;
      emp.empName=this.employee.empName;
      emp.empSalary=this.employee.empSalary;
      emp.empAddress=this.employee.empAddress;
    }else{
      this.employees.push(this.employee);
    }
    this.isEdit=false;
    this.employee={} as IEmployee;
    f.resetForm();

  }
  public deleteEmployee(emp:IEmployee){
    if(confirm("Do you want to delete?")){
      let i=this.employees.indexOf(emp)
      this.employees.splice(i,1)
    }
        
  }
  public editEmp(emp:IEmployee){
    this.isEdit=true;
    this.employee=Object.assign({},emp);
  }
  
  public checkOrUncheckAll(){
    if(this.check){
      this.employees.map(e=>e.isChecked=true);
     }
     else{
      this.employees.map(e=>e.isChecked=false);
     }
  }
  public checkOrUncheck(){
   let count=this.employees.filter(e=>e.isChecked==true).length;
   if(count==this.employees.length){
    this.check=true;
   }
   else{
    this.check=false;
   }
   
  }
}
