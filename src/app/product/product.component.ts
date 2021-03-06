import { Component, OnInit } from '@angular/core';

//import { Product } from '../product';
import { Product } from "../models/product";
import { ProductService } from './../services/product.service';

@Component({
  //templateUrl: 'product.component.html',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

	products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		console.log(this.productService.findAll())
		this.products = this.productService.findAll();
	}


}
