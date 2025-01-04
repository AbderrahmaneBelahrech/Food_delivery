import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginResponse {
  deliveryPersonId: number;
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-register-delivery',
  templateUrl: './register-delivery.component.html',
  styleUrls: ['./register-delivery.component.css'],
})


export class RegisterDeliveryComponent {
  
  name: string = '';
  email: string = '';
  phone: string = '';
  city: string = '';
  vehicleType: string = '';  // Type de véhicule
  password: string = '';  // Mot de passe
  showPopup: boolean = false;  // Pour afficher le popup après l'inscription
  loginEmail: string = '';
  loginPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Fonction d'inscription
  registerDelivery(event: Event): void {
    event.preventDefault();

    // Corps de la requête pour l'inscription
    const body = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      city: this.city,
      vehicleType: this.vehicleType,  // Envoi du type de véhicule
      password: this.password  // Envoi du mot de passe
    };

    // Envoi de la requête POST pour créer le livreur
    this.http.post('http://localhost:8080/api/delivery-persons', body).subscribe(
      (response) => {
        console.log('Livreur inscrit avec succès', response);

        // Réinitialisation des champs après inscription
        this.name = '';
        this.email = '';
        this.phone = '';
        this.city = '';
        this.vehicleType = '';
        this.password = ''; // Réinitialiser le mot de passe

        // Affichage du popup
        this.showPopup = true;
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }

  // Fonction de connexion
  loginDelivery(event: Event): void {
    event.preventDefault();

    // Corps de la requête pour la connexion
    const body = {
      email: this.loginEmail,
      password: this.loginPassword,
    };

    // Envoi de la requête pour se connecter
    this.http.post<LoginResponse>('http://localhost:8080/api/delivery-persons/login', body).subscribe(
      (response) => {
        console.log('Connexion réussie', response);
        localStorage.setItem('DeliveryPersonID', response.deliveryPersonId.toString());
        this.router.navigate(['/dashboard-delivery']);  // Redirige vers le tableau de bord après la connexion réussie
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
      }
    );
  }

  // Fonction pour fermer le popup après inscription
  closePopup(): void {
    this.showPopup = false;
  }
}
