import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-traking-order',
  templateUrl: './traking-order.component.html',
  styleUrls: ['./traking-order.component.css']
})
export class TrakingOrderComponent implements OnInit {
  currentStep: number = 1; 
  progressWidth: string = '33%';
  latitude: number | null = null;
  longitude: number | null = null;
  mapUrl: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.startProgress();
    this.loadRestaurantLocation(); // Charger la position du restaurant
  }

  startProgress(): void {
    const stepIntervals = [10000, 20000];
    let currentInterval = 0;

    const interval = setInterval(() => {
      this.currentStep++;
      if (this.currentStep === 2) {
        this.progressWidth = '66%';
      } else if (this.currentStep === 3) {
        this.progressWidth = '100%';
        clearInterval(interval);
      }
    }, stepIntervals[currentInterval++]);
  }

  loadRestaurantLocation(): void {
    const restaurantLocation = localStorage.getItem('restaurantLocation');
    console.log(localStorage.getItem('restaurantLocation'));

    if (restaurantLocation) {
      const { latitude, longitude } = JSON.parse(restaurantLocation);
      this.latitude = latitude;
      this.longitude = longitude;

      // Construire l'URL de la carte Google Maps
      this.mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

      // Assainir l'URL avant de l'utiliser dans l'iframe
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl) as string;
    } else {
      console.error('Aucune position de restaurant trouvée dans le localStorage');
    }
  }
}