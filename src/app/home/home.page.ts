import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userName: string = ''; // Bind user input

  constructor(private router: Router, private toastController: ToastController) {}

  // Navigate to the dashboard page with the user's name
  async goToDashboard() {
    if (this.userName.trim()) {

      await this.showToast('Your name has been submitted');

      this.router.navigate(['/dashboard'], { queryParams: { name: this.userName } });
    } else {
      alert('Please enter your name.');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }
}
