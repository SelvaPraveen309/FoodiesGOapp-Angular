import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
name!:String;
email!:String;
password!:String;
number!:String;

  constructor( private http:HttpClient ,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
register(){
  const userObj={
  "name":this.name,
  "email":this.email,
  "password":this.password,
  "number":this.number
  };
  console.log(userObj);
 
  const url="http://localhost:1234/Registerinsert/save";

  this.http.post(url,userObj,{responseType:'json'}).subscribe((res)=>{
    console.log("success");
  },(err)=>{
    console.log("records not found");
    
  });
this.toastr.success("hi");
}
}
