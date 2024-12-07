import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userName: string = ''; // Store username
  url: string = ''; // Store YouTube URL

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Get the username from query parameters
    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'] || 'Guest';
    });
  }

  // Play Song Function
  playSong() {
    const audio = new Audio('/assets/audio.mp3'); // Replace with your song path
    audio.play();
  }

  // Redirect to YouTube URL
  redirectToURL() {
    if (this.url.trim()) {
      window.open(this.url, '_blank');
    } else {
      alert('Please enter a valid URL.');
    }
  }

  // Show Surprise Function
  showSurprise() {
    this.router.navigate(['/login'], { queryParams: { name: this.userName } });
  }
}

