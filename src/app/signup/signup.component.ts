import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  hide: boolean = true;
  constructor(private router: Router,private fb: FormBuilder,private toastr:ToastrService) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      useremail:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  signUp() {
    if (this.signUpForm.valid) {
      localStorage.setItem('UserDetails', JSON.stringify(this.signUpForm.value));
      this.toastr.success("Successfully Signed up")
      // Assume valid login, navigate to product listing
      this.router.navigate(['/app/signin']);
    }else{
      this.signUpForm.markAllAsTouched()
    }
  }
  


  routerNavigate() {
    this.router.navigate(['/app/signin'])
  }


 


}
