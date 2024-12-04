import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  shippingInfo: any = {}; // Pour les informations de livraison

  // Variables pour les champs de livraison (vous pouvez les lier aux inputs du formulaire)
  fullName: string = '';
  phoneNumber: string = '';
  address: string = '';
  city: string = '';
  region: string = '';
  zipCode: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calculateTotal();
  }

  // Charger les items du panier depuis localStorage
  loadCartItems(): void {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  // Calculer le total des prix
  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Action "Pay Now"
  payNow(): void {
    const token = localStorage.getItem('token'); // Récupérer le token depuis le localStorage

    // Vérifier que le token est disponible
    if (!token) {
      console.error('Token not found in localStorage!');
      alert('You need to log in to complete the payment.');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ajouter le token au header Authorization
      'Content-Type': 'application/json'  // Définir le type de contenu (optionnel)
    });

    // Vérification des informations de livraison
    if (!this.shippingInfo.fullName || !this.shippingInfo.phoneNumber || !this.shippingInfo.address || !this.shippingInfo.city || !this.shippingInfo.region || !this.shippingInfo.zipCode) {
      alert('Please fill in all the shipping information.');
      return;
    }

    // Format des données pour correspondre à ce que le backend attend
    const orderData = {
      items: this.cartItems.map(item => ({
        mealId: item.id,  // Assurez-vous que chaque élément a un 'id' correspondant
        quantity: item.quantity
      })),
      total: this.total,
      shippingInfo: {
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
        address: this.address,
        city: this.city,
        region: this.region,
        zipCode: this.zipCode
      }
    };

    // Faire la requête HTTP POST
    this.http.post('http://localhost:8080/api/orders/create-order-with-delivery', orderData, { headers })
      .subscribe(
        (response) => {
          console.log('Order created successfully:', response);
          alert('Order created and delivery assigned!');
        },
        (error) => {
          console.error('Error creating order:', error);
          alert('Failed to create the order. Please try again.');
        }
      );
  }
}
