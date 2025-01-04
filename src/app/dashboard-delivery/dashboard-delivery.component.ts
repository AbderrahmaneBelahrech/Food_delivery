import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-delivery',
  templateUrl: './dashboard-delivery.component.html',
  styleUrls: ['./dashboard-delivery.component.css']
})
export class DashboardDeliveryComponent implements OnInit {
  deliveries: any[] = []; // Liste des livraisons
  
  private apiUrl = 'http://localhost:8080/api/delivery-persons'; // URL de base de l'API
  

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const deliveryPersonId = localStorage.getItem('DeliveryPersonID');


    if (deliveryPersonId) {
      this.fetchDeliveries();
    } else {
      console.error('Aucun ID livreur trouvé dans localStorage.');
    }
  }
  

  // Méthode pour récupérer les livraisons pour le livreur connecté
  fetchDeliveries(): void {
    const deliveryPersonId = localStorage.getItem('DeliveryPersonID');

    const url = `${this.apiUrl}/${deliveryPersonId}/orders`;
    this.http.get<any[]>(url).subscribe(
      (response) => {
        this.deliveries = response;
        console.log('Livraisons récupérées:', this.deliveries);
      },
      (error) => {
        console.error('Erreur lors de la récupération des livraisons:', error);
      }
    );
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/register-delivery']);
  }

  acceptDelivery(delivery: any) {
    // Logique pour accepter la livraison
    console.log('Livraison acceptée:', delivery);
    // Vous pouvez changer l'état de la livraison ou appeler une API pour la mettre à jour
  }

  rejectDelivery(delivery: any) {
    // Logique pour refuser la livraison
    console.log('Livraison refusée:', delivery);
    // Vous pouvez changer l'état de la livraison ou appeler une API pour la mettre à jour
  }
  
}
