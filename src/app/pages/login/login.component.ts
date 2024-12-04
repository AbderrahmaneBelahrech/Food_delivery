import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    // Check if the token is already in localStorage
    if (localStorage.getItem('token')) {
      // If token exists, navigate to the home page directly
      this.router.navigate(['/login']);
    }
  }
  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:8080/api/users/login', bodyData).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.userId);
        this.snackBar.open('User Logged Successfully', 'Close', {
          verticalPosition :'top',
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed', error);
        this.snackBar.open('Registration Failed. Please try again.', 'Close', {
          verticalPosition :'top',
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}