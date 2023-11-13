import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apollo } from 'apollo-angular';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
	let component: ProductListComponent;
	let fixture: ComponentFixture<ProductListComponent>;

	beforeEach(() => {
	
		TestBed.configureTestingModule({
			imports: [ApolloTestingModule],
			declarations: [ProductListComponent],
			providers: [Apollo],
		});	
		fixture = TestBed.createComponent(ProductListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
    });

    it('should create', () => {
		expect(component).toBeTruthy();
    }); 
});
