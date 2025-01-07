import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  // shippingInfo: any = {};
  shippingInfo = {
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    region: '',
    zipCode: ''
  };
  stripe: any;
  restaurantId: string | null = null;
  

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.loadCartItems();
    this.calculateTotal();

    // Initialize Stripe.js with your public key
    this.stripe = await loadStripe('pk_test_51P6JdE09YXY9riuTtwoel6ypg4GYkBee1CpkdmAt4ADvjDdSoNy7xTw6B5mth84BBYVFt0opwN5L3Rxrxp8EI1Ub00565bikyU');
    this.restaurantId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Restaurant ID:', this.restaurantId);
  
  }

  loadCartItems(): void {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  handleCheckout(): void {
    console.log('Checkout button clicked');
  
    // Stocker shippingInfo séparément
    localStorage.setItem('shippingInfo', JSON.stringify(this.shippingInfo));
  
    const order = {
      orderDate: new Date(),
      status: 'PENDING',
      totalAmount: this.total,
      user: { id: localStorage.getItem('userId') },
      meals: this.cartItems,
      shippingInfo: this.shippingInfo, // Vous pouvez laisser ceci ici pour l'instant
    };
  
    if (this.restaurantId) {
      localStorage.setItem('restaurantId', this.restaurantId);
    }
  
    localStorage.setItem('pendingOrder', JSON.stringify(order));
  
    this.http.post('http://localhost:8080/api/payment/create-checkout-session', { totalAmount: this.total })
      .subscribe((paymentResponse: any) => {
        console.log('Stripe Checkout session created:', paymentResponse);
  
        this.stripe.redirectToCheckout({ sessionId: paymentResponse.sessionId })
          .then((result: any) => {
            if (result.error) {
              console.error('Error redirecting to Stripe Checkout:', result.error.message);
            }
          });
      }, (error) => {
        console.error('Error creating payment session:', error);
      });
  }
  
}