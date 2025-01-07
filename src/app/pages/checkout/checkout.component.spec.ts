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
  submitted: boolean = false;
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
    this.stripe = await loadStripe('pk_test_yourStripePublicKey');
    this.restaurantId = this.activatedRoute.snapshot.paramMap.get('id');
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
    this.submitted = true;

    if (!this.shippingInfo.fullName || 
        !this.shippingInfo.phoneNumber || 
        !this.shippingInfo.address || 
        !this.shippingInfo.city || 
        !this.shippingInfo.region || 
        !this.shippingInfo.zipCode) {
      alert('Veuillez remplir tous les champs requis avant de procéder au paiement.');
      return;
    }

    localStorage.setItem('shippingInfo', JSON.stringify(this.shippingInfo));

    const order = {
      orderDate: new Date(),
      status: 'PENDING',
      totalAmount: this.total,
      user: { id: localStorage.getItem('userId') },
      meals: this.cartItems,
      shippingInfo: this.shippingInfo
    };

    this.http.post('http://localhost:8080/api/payment/create-checkout-session', { totalAmount: this.total })
      .subscribe((paymentResponse: any) => {
        this.stripe.redirectToCheckout({ sessionId: paymentResponse.sessionId });
      });
  }
}