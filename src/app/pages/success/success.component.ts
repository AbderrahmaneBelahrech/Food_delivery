import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const pendingOrder = localStorage.getItem('pendingOrder');
    if (pendingOrder) {
      const order = JSON.parse(pendingOrder);
  
      order.status = 'PAID';
  
      // Assurez-vous que shippingInfo est bien présent dans la commande
      if (order.shippingInfo) {
        console.log('Shipping Info:', order.shippingInfo);  // Vous devriez voir les données ici
      } else {
        console.log('Shipping info is undefined');
      }
  
      this.http.post('http://localhost:8080/api/orders', order)
        .subscribe((response: any) => {
          console.log('Order saved with status PAID:', response);
          
          // On vide le localStorage
          
          localStorage.removeItem('cartItems');
    
          setTimeout(() => {
            this.router.navigate(['/track-order']);
          }, 5000);
        }, (error) => {
          console.error('Error saving order:', error);
        });
    }
  }
  
  
}
