import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatGuard implements CanActivate {
  constructor(readonly auth: AuthService, readonly router: Router) {}
  canActivate() {
    if (!this.auth.currentUser) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
  
}
