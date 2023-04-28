import { HttpClient } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { IPost } from './post-model';
import { HttpService } from 'src/app/service/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  posts=[] as IPost[];
  subcripition!: Subscription;
  constructor(private _http:HttpService){
  }
  ngOnDestroy(): void {
    if (this.subcripition) {
      this.subcripition.unsubscribe();
    }
  }
ngOnInit(): void {
  this.loadPosts()
}
  public loadPosts() {
    this.subcripition=this._http.getData("https://jsonplaceholder.typicode.com/posts").subscribe({
        next:data=>{
          this.posts=data as IPost[];
        },
        error:reason=>{
          console.log(reason);
        },
        complete:()=>{
          console.log("complete");
        }
        
      })
      
  }
}
