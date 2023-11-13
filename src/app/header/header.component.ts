import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent {
	
	constructor(private router: Router) {} 

	displayHomePage() {
		this.router.navigate(['/home']);
	}
	
	displayProductsPage() {
		this.router.navigate(['/product']);
	}
	
	displayOrderPage() {
		this.router.navigate(['/order']);
	}
}
