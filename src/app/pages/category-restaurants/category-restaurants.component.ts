// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router'; // Importez Router
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// interface Restaurant {
// // discount: any;
// category: any;
//   id: number;
//   name: string;
//   address: string;
//   phoneNumber: string;
//   rating: number;
//   logoRestau: string;
// }

// @Component({
//   selector: 'app-category-restaurants',
//   templateUrl: './category-restaurants.component.html',
//   styleUrls: ['./category-restaurants.component.css']
// })
// export class CategoryRestaurantsComponent implements OnInit {
//   restaurants: Restaurant[] = [];
//   noRestaurantsFound: boolean = false; // Nouvelle variable pour gérer le message d'absence de restaurants

//   constructor(
//     private route: ActivatedRoute,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     const categoryId = this.route.snapshot.paramMap.get('id'); // Récupère l'ID de la catégorie depuis l'URL
//     if (categoryId) {
//       this.fetchRestaurantsByCategory(+categoryId);
//     }
//   }

//   fetchRestaurantsByCategory(categoryId: number): void {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });

//     this.http.get<Restaurant[]>(`http://localhost:8080/api/categories/${categoryId}/restaurants`, { headers })
//       .subscribe(
//         (data) => {
//           this.restaurants = data;
//           this.noRestaurantsFound = this.restaurants.length === 0; // Si aucun restaurant, affiche le message
//         },
//         (error) => {
//           console.error('Erreur lors de la récupération des restaurants', error);
//           this.noRestaurantsFound = true; // Affiche le message en cas d'erreur
//         }
//       );

//   }
//    // Méthode pour rediriger vers les détails d'un restaurant
//    viewRestaurantDetails(id: number): void {
//     this.router.navigate(['/restaurant', id]); // Navigation correcte
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importez Router
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Restaurant {
  category: any;
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  rating: number;
  logoRestau: string;
}

@Component({
  selector: 'app-category-restaurants',
  templateUrl: './category-restaurants.component.html',
  styleUrls: ['./category-restaurants.component.css']
})
export class CategoryRestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];
  noRestaurantsFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router // Injectez Router ici
  ) {}

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id'); // Récupère l'ID de la catégorie depuis l'URL
    if (categoryId) {
      this.fetchRestaurantsByCategory(+categoryId);
    }
  }

  fetchRestaurantsByCategory(categoryId: number): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Restaurant[]>(`http://localhost:8080/api/categories/${categoryId}/restaurants`, { headers })
      .subscribe(
        (data) => {
          this.restaurants = data;
          this.noRestaurantsFound = this.restaurants.length === 0;
        },
        (error) => {
          console.error('Erreur lors de la récupération des restaurants', error);
          this.noRestaurantsFound = true;
        }
      );
  }

  // Méthode pour rediriger vers les détails d'un restaurant
  viewRestaurantDetails(id: number): void {
    this.router.navigate(['/restaurant', id]); // Navigation correcte
  }
}
