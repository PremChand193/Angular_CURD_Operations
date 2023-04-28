import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _service:HttpClient) {

    
   }
   public getData(url:string){
    return this._service.get(url);
   }
   public postData(url:string,obj:any){
    return this._service.post(url,obj);
   }
}
