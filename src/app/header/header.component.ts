import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string = '';
  email: string = '';
  phoneNumber: string = '';
  address: string = '';
  menuVisible = false;
  editProfileModalVisible = false;

  constructor(private http: HttpClient, private router: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    
      this.loadUserProfile();
    
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  openEditProfileModal() {
    this.editProfileModalVisible = true;
  }

  closeEditProfileModal() {
    this.editProfileModalVisible = false;
  }

  loadUserProfile() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      this.http.get<any>(`http://localhost:8080/api/users/${userId}`, { headers }).subscribe(
        user => {
          this.userName = user.username;
          this.email = user.email;
          this.phoneNumber = user.phoneNumber;
          this.address = user.address;

          this.cdRef.detectChanges();
        },
        error => {
          console.error('Erreur lors de la récupération du profil : ', error);
        }
      );
    }
  }

  // Gérer le changement de l'image de profil


  onSubmit() {
    const userId = localStorage.getItem('userId');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
  
    if (userId) {
      const updatedUser = {
        username: this.userName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
  
      this.http.put<any>(`http://localhost:8080/api/users/${userId}`, updatedUser, { headers }).subscribe(
        response => {
          console.log('Profil mis à jour', response);
  
          // Afficher une alerte de succès
          alert('Profil mis à jour avec succès !');

          this.loadUserProfile();
          
          this.closeEditProfileModal();
        },
        error => {
          console.error('Erreur lors de la mise à jour', error);
  
          // Afficher une alerte d'erreur
          alert('Erreur lors de la mise à jour du profil.');
        }
      );
    }
  }
  

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
