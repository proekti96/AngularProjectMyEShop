import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';

import { Product } from '../model/product';
import { GET_PRODUCTS, SORT_BY_NAME, FILTER_BY_SLUG } from '../../graphql.operations';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
	products: Product[] = [];
	error: any;
	selectedTypeSort?: string;
	inputWord?: string = "";
	
	constructor(private router: Router, 
				private apollo: Apollo) {}
	
	ngOnInit(): void {
	
		this.apollo.watchQuery({
			query: GET_PRODUCTS,
			
		}).valueChanges.subscribe(({ data, error }: any) => {
			this.products = data.products.items;
			this.error = error;
		});
    }
	
	sortProductsByName(htmlTypeSort:string): void {
		console.log("htmlTypeSort: " + htmlTypeSort);
		
		this.apollo.watchQuery({
			query: SORT_BY_NAME, 
			
			variables: {
				type: htmlTypeSort,
			}
			
		}).valueChanges.subscribe(({ data, error }: any) => {
			this.products = data.products.items;
			this.error = error;
		});	
	}
	
	filterProductsBySlug(htmlInputWord:string): void {
		console.log("htmlInputWord: " + htmlInputWord);
		
		this.apollo.watchQuery({
			query: FILTER_BY_SLUG, 
			
			variables: {
				word: htmlInputWord,
			}
			
		}).valueChanges.subscribe(({ data, error }: any) => {
			this.products = data.products.items;
			this.error = error;
	    });	
	}
	
	selectTypeSort(event: any): void {
		this.selectedTypeSort = event.target.value;
	}
	
	getValue(event: Event): string {
		return (event.target as HTMLInputElement).value;
	}
}
