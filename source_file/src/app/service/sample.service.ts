import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
      public add(a:number,b:number){
           return a+b;
      }
      public sub(a:number,b:number){
      return a-b;
      }
      public mul(a:number,b:number){
      return a*b;
      }
      public div(a:number,b:number){
      return a/b;
      }

  constructor() { }
}
