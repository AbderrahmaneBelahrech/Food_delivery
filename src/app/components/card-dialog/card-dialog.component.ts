// import { Component, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// @Component({
//   selector: 'app-card-dialog',
//   templateUrl: './card-dialog.component.html',
//   styleUrl: './card-dialog.component.css'
// })
// export class CardDialogComponent {
//   quantity: number = 1;
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private dialogRef: MatDialogRef<CardDialogComponent>
//   ) {}
//   closeDialog(): void {
//     this.dialogRef.close();
//   }
  
//   increaseQuantity(): void {
//     this.quantity++;
//   }

//   decreaseQuantity(): void {
//     if (this.quantity > 1) {
//       this.quantity--;
//     }
//   }

//   totalPrice(): number {
//     return this.quantity * this.data.price;
//   }
// }
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent {
  quantity: number = 1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CardDialogComponent>
  ) {}

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  totalPrice(): number {
    return this.quantity * this.data.price;
  }

  closeDialog(): void {
    this.dialogRef.close({ meal: this.data, quantity: this.quantity }); // Retourne le produit et la quantité
  }
}
