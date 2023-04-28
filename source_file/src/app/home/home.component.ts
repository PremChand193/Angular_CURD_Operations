import { Component } from '@angular/core';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
   

  /**
   * Strutural Directives
   * 1.ngif
   * 2.ngfor
   * 3.ngswitch
   * */ 
  status:boolean=true;
  sum=0
  sub=0
  constructor(private _service:SampleService){
    this.sum=this._service.add(2,5)
    this.sub=this._service.sub(2,5)
  }
  
}
