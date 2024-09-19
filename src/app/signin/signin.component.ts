import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide: boolean = true;
  signInForm!: FormGroup;

  constructor (private router: Router,private fb: FormBuilder,private toastr:ToastrService){
    this.signInForm = this.fb.group({
      useremail:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    });
  }


  ngOnInit(): void {
    this.router.navigate(['/app/products']);
  }



  
  routerNavigate(){
    this.router.navigate(['/app/signup'])
  }


  signin(){ 
    if(this.signInForm.valid){

      let Getlocaldata :any;
      Getlocaldata= localStorage.getItem('UserDetails');
      
      Getlocaldata=JSON.parse(Getlocaldata)
      console.log(Getlocaldata)
      if(Getlocaldata){
        if(this.signInForm.value.useremail ==Getlocaldata.useremail &&this.signInForm.value.password == Getlocaldata.password ){
          this.toastr.success("Sign in Successfully");
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/app/products']);
       }else {
         this.toastr.error("Username/Password incorrectly")
       }
      }else{
        this.toastr.info("No User Found SignUp First")
      }
    

      

    }else{
      this.signInForm.markAllAsTouched()
    }

  }
  




}
