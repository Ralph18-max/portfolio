import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PointContactService} from '../../../shared/Services/PointContactService';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly pointContactService = inject(PointContactService);
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal<string | null>(null);

  form = signal({
    nom_complet: '',
    email: '',
    objet: '',
    message: ''
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.isSubmitting()) {
      return;
    }
    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(null);

    const payload = {
      user: 1,
      nom_complet: this.form().nom_complet,
      objet: this.form().objet,
      message: this.form().message,
      email: this.form().email
    };

    this.pointContactService.createPointContact(payload).subscribe({
      next: (response) => {
        console.log('Contact form submitted successfully:', response);
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.form.set({
          nom_complet: '',
          email: '',
          objet: '',
          message: ''
        });
      },
      error: (error) => {
        console.error('Contact form error:', error);
        this.isSubmitting.set(false);
        this.submitError.set('An error occurred while sending your message. Please try again.');
      }
    });
  }
}
