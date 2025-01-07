import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  vehicleType: string = '';
  password: string = '';
  showPopup: boolean = false;
  popupMessage: string = '';
  popupColor: string = '';
  loginEmail: string = '';
  loginPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode de sélection du véhicule
  selectVehicle(type: string): void {
    this.vehicleType = type;
  }

  // Méthode d'inscription du livreur
  registerDelivery(event: Event): void {
    event.preventDefault();

    // Vérification des champs vides
    if (!this.name || !this.email || !this.phone || !this.city || !this.vehicleType || !this.password) {
      this.showPopup = true;
      this.popupMessage = 'Remplissez tous les champs';
      this.popupColor = 'red';  // Rouge pour les erreurs
      return;
    }

    const body = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      city: this.city,
      vehicleType: this.vehicleType,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/delivery-persons', body).subscribe(
      (response) => {
        console.log('Livreur inscrit avec succès', response);
        this.resetForm();
        this.showPopup = true;
        this.popupMessage = 'Compte créé avec succès ! Faites maintenant le login.';
        this.popupColor = 'green';  // Vert pour succès
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
        alert('Une erreur est survenue lors de l\'inscription.');
      }
    );
  }
  

  // Méthode de connexion
  loginDelivery(event: Event): void {
    event.preventDefault();
  
    const body = {
      email: this.loginEmail,
      password: this.loginPassword,
    };
    interface LoginResponse {
      deliveryPersonId: number;
      [key: string]: any;
    }
    
  
    this.http.post<LoginResponse>('http://localhost:8080/api/delivery-persons/login', body).subscribe(
      (response) => {
        if ('deliveryPersonId' in response) {
          console.log('Connexion réussie', response);
          localStorage.setItem('DeliveryPersonID', response.deliveryPersonId.toString());
          this.router.navigate(['/dashboard-delivery']);
        } else {
          console.error('Propriété deliveryPersonId manquante dans la réponse');
          alert('Erreur lors de la connexion.');
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
        alert('Identifiants incorrects. Veuillez réessayer.');
      }
    );
  }
  

  // Réinitialisation des champs du formulaire après inscription
  resetForm(): void {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.city = '';
    this.vehicleType = '';
    this.password = '';
  }

  // Fermeture du pop-up après inscription
  closePopup(): void {
    this.showPopup = false;
  }

  // Méthode utilitaire pour savoir si un véhicule est sélectionné
  isVehicleSelected(type: string): boolean {
    return this.vehicleType === type;
  }
}