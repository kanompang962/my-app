import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StateCartService } from 'src/app/services/state-cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = "navbar"
  settings:any;
  navbars:any;
  cart_amount = 0;

  constructor(
    private http: HttpClient,
    private stateCartService: StateCartService,
    ) {}

  ngOnInit() {
   this.fetchSettingsMenu();
   this.fetchNavbarsMenu();
   this.getCartAmount();
  }

  fetchSettingsMenu(){
    this.http.get('assets/data/settings.json').subscribe(data => {
      this.settings = data;
    });
  }
  
  fetchNavbarsMenu(){
    this.http.get('assets/data/navbars.json').subscribe(data => {
      this.navbars = data;
    });
  }

  getCartAmount(){
    this.stateCartService.currentState$.subscribe((state) => {
      this.cart_amount = state;
    });
  }
  

}
