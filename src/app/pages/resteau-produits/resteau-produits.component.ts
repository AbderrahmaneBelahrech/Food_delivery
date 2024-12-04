import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CardDialogComponent } from '../../components/card-dialog/card-dialog.component';

@Component({
  selector: 'app-resteau-produits',
  templateUrl: './resteau-produits.component.html',
  styleUrls: ['./resteau-produits.component.css'],
})
export class ResteauProduitsComponent implements OnInit {
  restaurant: any = {};
  meals: any[] = [];
  filteredMeals: any[] = [];
  cartItems: any[] = [];
  searchQuery: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchRestaurantDetails(id);
    this.loadCartFromLocalStorage();
  }

  fetchRestaurantDetails(id: number): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get<any>(`http://localhost:8080/api/restaurants/${id}`, { headers })
      .subscribe(
        (data) => {
          this.restaurant = data;
          this.meals = data.meals;
          this.filteredMeals = [...this.meals];
        },
        (error) => {
          console.error(
            'Erreur lors de la récupération des détails du restaurant',
            error
          );
        }
      );
  }

  filterMealsByName(): void {
    const query = this.searchQuery.trim().toLowerCase();
    this.filteredMeals = query
      ? this.meals.filter((meal) =>
          meal.name.toLowerCase().includes(query)
        )
      : [...this.meals];
  }

  openDialog(meal: any): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      width: '65vw',
      maxWidth: 'none',
      data: meal,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addToCart(result.meal, result.quantity);
      }
    });
  }

  addToCart(meal: any, quantity: number): void {
    const existingItem = this.cartItems.find((item) => item.id === meal.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ ...meal, quantity });
    }
    this.saveCartToLocalStorage();
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.saveCartToLocalStorage();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.saveCartToLocalStorage();
    }
  }

  deleteItem(itemId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    this.saveCartToLocalStorage();
  }

  calculateTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  saveCartToLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  loadCartFromLocalStorage(): void {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  // Redirect to checkout
  navigateToCheckout(): void {
    const restaurantId = this.restaurant.id; // Assume the restaurant has an `id`
    this.router.navigate([`/restaurant/${restaurantId}/checkout`]);
  }
}
