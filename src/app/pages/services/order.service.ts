import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Fournit ce service au niveau global
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/api/orders'; // URL de l'API backend pour les commandes

  constructor(private http: HttpClient) {}

  // Méthode pour créer une commande
  createOrder(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }

  // Méthode pour obtenir toutes les commandes
  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Méthode pour obtenir une commande par ID
  getOrderById(orderId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${orderId}`);
  }
}
