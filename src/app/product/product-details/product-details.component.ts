import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Apollo } from 'apollo-angular';

import { Product } from '../model/product';
import { GET_PRODUCT_BY_ID} from '../../graphql.operations';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
	product?: Product;
	productsOrder: Product[] = [];
	error: any;
	productId?: number;
	
	constructor(private router: Router, 
				private activatedRoute: ActivatedRoute,
				private apollo: Apollo) {}
	
	ngOnInit(): void {
		const localConsoleData = localStorage.getItem('productsOrder');
		
		if(localConsoleData != null) {
			this.productsOrder = JSON.parse(localConsoleData);
		}
		
		this.activatedRoute.params.subscribe((parameter) => {
			this.productId = parameter['id'];
			console.log("this.productId: " + this.productId);
				
			this.apollo.watchQuery({
				query: GET_PRODUCT_BY_ID,
					
				variables: {
					id: parameter['id']
				}
					
			}).valueChanges.subscribe(({ data, error }: any) => {
				this.product ! = data.product;
				this.error = error;
			});
		});
	}
	
	addToProductOrder(): void {
		this.productsOrder.push(this.product!);
		localStorage.setItem('productsOrder', JSON.stringify(this.productsOrder));
		window.alert("Product added to the order!");
	}
	
	displayOrderPage() {
		this.router.navigate(['/order']);
	}
	
	displayProductsPage() {
		this.router.navigate(['/product']);
	}
}
