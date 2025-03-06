import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterComponent implements OnInit {
  currentStep: number = 1;
  totalSteps: number = 7;
  userType: string = '';
  email: string = '';
  password: string = '';
  username: string = '';
  dateOfBirth: string = '';
  gender: string = '';
  invitePeople: boolean = false;
  selectedLanguage: string = '';
  selectedMasjid: string = '';
  sect: string = '';
  mobileNumber: string = '';
  pincode: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userType = params['userType'];
    });
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted with data:', {
      email: this.email,
      username: this.username,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      language: this.selectedLanguage,
      mobileNumber: this.mobileNumber,
      pincode: this.pincode
    });
  }
}