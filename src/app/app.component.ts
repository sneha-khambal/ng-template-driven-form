import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
 import { UserData } from 'src/assets/userData.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'my-app';
 submited = false;
 today: number = Date.now();
 formdata:any;
 users :UserData[]=[
  

 ]

 onSubmit(formvalue:UserData){
 this.submited = true;
 this.formdata = formvalue
 if(formvalue.email=== "" && formvalue.name===""){
   alert("fill the form");
   this.submited = false
 }
 else{
  this.users.push(this.formdata)
 
 }
 

    
 
 
 }
 edit(index:number){
   this.submited = false;
//    console.log( this.users[index].name )  
// console.log( this.users[index].email)
// this.users[index] = this.formdata
  
 }
}

 
