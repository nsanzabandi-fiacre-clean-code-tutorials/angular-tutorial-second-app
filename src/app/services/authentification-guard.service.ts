import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./authentification.service"

@Injectable()
export class AuthentificationGuardService implements CanActivate {

  constructor(private authentificationService: AuthentificationService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authentificationService.isAuthentified) {
      return true;
    } else {
      this.router.navigate(['/authentification']);
    }
  }
}
