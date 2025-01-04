import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  loadUserProfile(): void {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

      this.http.get<any>(`http://localhost:8080/api/users/${userId}`, { headers }).subscribe(
        user => {
          this.email = user.email;
          this.phoneNumber = user.phoneNumber;
          this.address = user.address;
        },
        error => {
          console.error('Failed to load profile:', error);
        }
      );
    }
  }

  onSubmit(): void {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    if (userId && token) {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      const updatedUser = { email: this.email, phoneNumber: this.phoneNumber, address: this.address };

      this.http.put<any>(`http://localhost:8080/api/users/${userId}`, updatedUser, { headers }).subscribe(
        response => {
          console.log('Profile updated:', response);
          localStorage.setItem('token', response.token); // Update token
          alert('Profile updated successfully!');
          this.editProfileModalVisible = false;
        },
        error => {
          console.error('Failed to update profile:', error);
          alert('Failed to update profile.');
        }
      );
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }


}
