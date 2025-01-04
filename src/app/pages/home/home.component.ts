import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

interface Restaurant {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  rating: number;
  imageRestau: String;
  logoRestau: string;
}

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants: Restaurant[] = [];
  filteredRestaurants: Restaurant[] = []; // Liste filtrée des restaurants
  categories: Category[] = [];
  searchQuery: string = ''; // Texte de recherche

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchRestaurants();
    this.fetchCategories();
  }

  // Fonction pour récupérer tous les restaurants
  fetchRestaurants(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token non trouvé');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Restaurant[]>('http://localhost:8080/api/restaurants', { headers })
      .subscribe(
        (data) => {
          this.restaurants = data;
          this.filteredRestaurants = [...this.restaurants]; // Initialisation des restaurants filtrés
        },
        (error) => {
          console.error('Erreur lors de la récupération des restaurants', error);
        }
      );
  }

  fetchCategories(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    this.http.get<Category[]>('http://localhost:8080/api/categories/with-meals', { headers }).subscribe(
      (data) => {
        this.categories = data; // Met uniquement les catégories ayant des meals
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }
  

  // Méthode pour rediriger vers les détails d'un restaurant
  viewRestaurantDetails(id: number): void {
    this.router.navigate(['/restaurant', id]);
  }

  // Méthode pour rediriger vers la page des restaurants par catégorie
  viewCategoryRestaurants(categoryId: number): void {
    this.router.navigate(['/category', categoryId, 'restaurants']); // Redirige vers la page des restaurants
  }

  // Méthode pour filtrer les restaurants par nom
  filterRestaurants(): void {
    const query = this.searchQuery.trim().toLowerCase();
    if (query === '') {
      this.filteredRestaurants = [...this.restaurants];
    } else {
      this.filteredRestaurants = this.restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query)
      );
    }
  }
 
  
}
