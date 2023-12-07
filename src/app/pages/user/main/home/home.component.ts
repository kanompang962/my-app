import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {}

  title = "home"
  products:any;

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.http.get('assets/data/products.json').subscribe(data => {
      this.products = data;
    });
  }

}
