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
    const lastShippingInfo = localStorage.getItem('lastShippingInfo');

    // Ajouter les informations de la dernière livraison simulée depuis localStorage
    if (lastShippingInfo) {
      const shippingInfo = JSON.parse(lastShippingInfo);
      this.deliveries.push({
        order: { id: 'Simulé' }, // ID fictif pour identifier la commande simulée
        shippingInfo: shippingInfo,
        currentLocation: 'Non défini',
        estimatedDeliveryTime: 'Non défini',
        trackingId: 'Non défini'
      });
      console.log('Dernière livraison récupérée depuis localStorage:', shippingInfo);

      // Optionnel : nettoyer localStorage après récupération
      
    }

    // Récupérer les livraisons réelles assignées au livreur connecté
    if (deliveryPersonId) {
      this.fetchDeliveries(deliveryPersonId);
    } else {
      console.error('Aucun ID livreur trouvé dans localStorage.');
    }
  }

  // Méthode pour récupérer les livraisons assignées au livreur
  fetchDeliveries(deliveryPersonId: string): void {
    const url = `${this.apiUrl}/${deliveryPersonId}/orders`;
    this.http.get<any[]>(url).subscribe(
      (response) => {
        this.deliveries.push(...response); // Ajouter les livraisons récupérées à la liste existante
        console.log('Livraisons récupérées:', this.deliveries);
      },
      (error) => {
        console.error('Erreur lors de la récupération des livraisons:', error);
      }
    );
  }

  // Déconnexion et redirection vers la page de connexion
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/register-delivery']);
  }

  // Accepter une livraison
  acceptDelivery(delivery: any): void {
    console.log('Livraison acceptée:', delivery);
    // Logique pour mettre à jour l'état de la livraison dans le backend si nécessaire
  }

  // Refuser une livraison
  rejectDelivery(delivery: any): void {
    console.log('Livraison refusée:', delivery);
    // Logique pour mettre à jour l'état de la livraison dans le backend si nécessaire
  }
}
