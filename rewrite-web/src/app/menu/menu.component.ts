import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthenticationGuard} from "../services/authentication.guard";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
  isLogged: boolean;

  constructor(private authenticationService: AuthenticationService) { }

  verify() {
    if (sessionStorage.getItem('token')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  ngOnChanges() {
    this.verify();
  }

  ngOnInit() {
   this.verify();
  }

}
