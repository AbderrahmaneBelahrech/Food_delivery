import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is already logged in
    if (localStorage.getItem('token')) {
      // If trying to access login page, redirect to home
      if (route.routeConfig?.path === 'login') {
        this.router.navigate(['/home']);
        return false;  // Prevent navigation to login page
      }
      return true;  // Allow access to other routes
    } else {
      // Allow navigation to login page if no token
      return route.routeConfig?.path === 'login' ? true : this.router.navigate(['/login']);
    }
  }
}
