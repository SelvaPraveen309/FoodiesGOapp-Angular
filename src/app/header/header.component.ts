import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
foodName!:any;
price!:any;
foodType  !:any;
foodStyle!:any;
foodImages!:any;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

   search!:any;
   foodDetail!:any;
   searchFood(){
     const food= this.search;
     window.location.href="view-foods/"+food;

    //  const url="http://localhost:1234/DishesByLetter/food_name?food_name="+this.search;
    //  this.http.get(url,{responseType:'json'}).subscribe((res)=>{
    //    this.foodDetail=res;
    //    console.log(res);
       
      
    // },(err)=>{
    //   this.toastr.error("food is not available");
      
    // });
  
  }
  }
  
   


