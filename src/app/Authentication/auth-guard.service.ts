import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isloggedIn()) {
    
      return true;
    }else{
      return false; 
    }
  }


   isloggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn')) {
      status = true;
    } else {
      this.router.navigate(['/app/signin'])
      status = false;
    }
    return status;
  }

}
