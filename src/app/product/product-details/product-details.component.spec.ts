import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";

import { Apollo } from 'apollo-angular';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
	let component: ProductDetailsComponent;
	let fixture: ComponentFixture<ProductDetailsComponent>;

	beforeEach(() => {
	
		TestBed.configureTestingModule({
			imports: [ApolloTestingModule, RouterTestingModule],
			declarations: [ProductDetailsComponent],
			providers: [Apollo]
		});		
		fixture = TestBed.createComponent(ProductDetailsComponent);
		component = fixture.componentInstance;	
		fixture.detectChanges();
	});
 
	it('should create', () => {
		expect(component).toBeTruthy();
	}); 
});
