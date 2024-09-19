import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router :Router,private toastr : ToastrService){

  }

  ngOnInit(): void {
    
  }


  logout(){
    localStorage.clear()
    this.router.navigate(['/app/signin'])
    this.toastr.success('Logout Successfully')
  }
}
