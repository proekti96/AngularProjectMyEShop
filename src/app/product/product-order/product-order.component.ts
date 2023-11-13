import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../model/product';

@Component({
	selector: 'app-product-order',
	templateUrl: './product-order.component.html',
	styleUrls: ['./product-order.component.css']
})

export class ProductOrderComponent implements OnInit{
	productsOrder: Product[] = [];
	
	constructor(private router: Router) {}
				
	ngOnInit(): void {
		const localConsoleData = localStorage.getItem('productsOrder');
		
		if(localConsoleData != null) {
			this.productsOrder = JSON.parse(localConsoleData);
		}
    }
	
	removeProductFromOrder(productIdHtml: number): void {
		this.productsOrder = this.productsOrder.filter( product => product.id != productIdHtml);
		localStorage.setItem('productsOrder', JSON.stringify(this.productsOrder));
		window.location.reload();
	}
	
	removeAllProductsFromOrder(): void {
		localStorage.removeItem('productsOrder');
		window.location.reload();
	}
}
