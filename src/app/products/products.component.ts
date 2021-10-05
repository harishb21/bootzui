import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Array<Product>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getData(): void {
    let url: string = "http://localhost:8080/products";
    this.http.get<Array<Product>>(url).subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });


  }
}
