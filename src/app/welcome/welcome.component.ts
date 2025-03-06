import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class WelcomeComponent implements OnInit {
  showReferral = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  selectUserType(type: string) {
    this.showReferral = true;
  }

  selectReferral(source: string) {
    this.router.navigate(['/register'], { queryParams: { referralSource: source } });
  }
  }
