import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-menus',
  templateUrl: './list-menus.component.html',
  styleUrls: ['./list-menus.component.css']
})
export class ListMenusComponent implements OnInit {
  foodName!:any;
  price!:any;
  foodType!:any;
  foodStyle!:any;
  value!:any;
  values!:any;
  foodImages!:any;
  

  constructor(private http:HttpClient, private toastr:ToastrService) { }

  ngOnInit(): void {
 
    this.getAllMenu();
  }
  getAllMenu(){
    
    const url="http://localhost:1234/MenuList/list";
     fetch(url).then(res=>res.json()).then(res=>{
      this.values=res;
     console.log(this.values);
      });
      this.toastr.success("Keep updating");
  }
 

}
