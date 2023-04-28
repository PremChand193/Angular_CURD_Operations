import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _service:HttpService){
  }
  public loginForm(){
     
  }
}
