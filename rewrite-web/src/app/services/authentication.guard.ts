import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UsuarioService} from "./usuario.service";
import {Observable} from "rxjs";
import {promise} from "selenium-webdriver";
import map = promise.map;
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate{

  constructor(private authenticationService: AuthenticationService, private router: Router) {}
  logged: boolean;

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('token')) {
      console.log('ISLOGGED')
      return true;
    } else {
      console.log('ISNOT')
      this.router.navigate(['/Login'], {queryParams: {returnUrl: state.url} });
      return false;
    }
  }

}
