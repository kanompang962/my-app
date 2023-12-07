import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = "navbar"
 
  menu_list = [
    {icon:'', title:'Home'},
    {icon:'', title:'About'},
    {icon:'', title:'Education'},
    {icon:'', title:'Me'},
  ]

  settings:any;
  navbars:any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.fetchSettingsMenu();
   this.fetchNavbarsMenu();
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
  

}
