import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  profilePicture: string = "";
  address: string = "";
  phoneNumber: string = "";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  save() {
    let bodyData = {
      "username": this.username,
      "email": this.email,
      "password": this.password,
      "profilePicture": this.profilePicture,
      "address": this.address,
      "phoneNumber": this.phoneNumber
    };
    this.http.post("http://localhost:8080/api/users/signup", bodyData, { responseType: 'text' }).subscribe(
      (resultData: any) => {
        this.snackBar.open('User Registered Successfully', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        this.snackBar.open('Registration Failed. Please try again.', 'Close', {
          verticalPosition :'top',
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}