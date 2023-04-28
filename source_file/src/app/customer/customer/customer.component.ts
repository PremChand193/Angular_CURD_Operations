import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SampleService } from 'src/app/service/sample.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[SampleService]
})
export class CustomerComponent implements OnInit {
  customer={} as ICustomer;
  customers=[] as ICustomer[];
  isEdit=false;
  check:boolean=false;
   submmited=false;

  custFormGroup!: FormGroup;
     add=0;
     mul=0;
  constructor(private _formBulder:FormBuilder,private _service:SampleService){
     this.add=this._service.add(10,4);
     this.mul=this._service.mul(2,5);
  }
  ngOnInit(): void {
   this.custFormGroup=this._formBulder.group({
         custId:[null,Validators.required],
         custName:[null,Validators.required],
         custAmmount:[null,Validators.required],
         custAddress:[null],
         isChecked:[]
   })
   this.customers=[{custId:101,custName:"prem",custAmmount:12000,custAddress:"kphb",isChecked:false},
   {custId:102,custName:"charan",custAmmount:14000,custAddress:"miyapur",isChecked:false},
   {custId:103,custName:"joey",custAmmount:11000,isChecked:false},
   {custId:104,custName:"chandler",custAmmount:16000,custAddress:"kondapur",isChecked:false},
   {custId:105,custName:"ross",custAmmount:13000,isChecked:false}]
  }
 public addCustomer(f:FormGroup){
   this.submmited=true;
   if(this.custFormGroup.invalid){
    return;
   }
   
   if(this.isEdit){
    let c = this.customers.find(obj => obj.custId == this.custFormGroup.value.custId) as ICustomer;
      c.custId=this.custFormGroup.value.custId;
      c.custName = this.custFormGroup.value.custName;
      c.custAmmount = this.custFormGroup.value.custAmmount;
      c.custAddress = this.custFormGroup.value.custAddress;
      this.isEdit = false;
  }
  else{
      this.customers.push(this.custFormGroup.value);
  }
   this.custFormGroup.reset();
   this.submmited=false;
 }
 public editCust(c:ICustomer){
  this.isEdit=true;
  this.custFormGroup.patchValue(c);
 }
 public delectCust(cust:ICustomer){
  let i=this.customers.indexOf(cust)
  this.customers.splice(i,1)
 }
 public checkOrUncheck(cust:ICustomer){
  let count=this.customers.filter(obj=>obj.isChecked==true).length;
  if(count==this.customers.length){
    this.check=true;
  }
  else{
    this.check=false;
  }
 }
 public checkAll(){
  if(this.check){
    this.customers.map(obj=>obj.isChecked=true);
  }
  else{
    this.customers.map(obj=>obj.isChecked=false);
  }
 }
}
