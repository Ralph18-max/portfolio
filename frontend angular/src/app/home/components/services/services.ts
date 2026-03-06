import {Component, OnInit, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceService} from '../../../shared/Services/ServiceService';
import {IService} from '../../../shared/models/IService';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements OnInit {
  private readonly serviceService = inject(ServiceService);

  services = signal<IService[]>([]);
  isLoading = signal(false);
  loadError = signal<string | null>(null);

  private readonly fallbackServices: IService[] = [
    {
      id: 0,
      user: 1,
      nom: 'Frontend Development',
      detail: 'Développement d’interfaces modernes et responsives en Angular, HTML, CSS et TypeScript.',
      type_service: 'frontend',
      outils: 'Angular, HTML, CSS, TypeScript'
    },
    {
      id: 0,
      user: 1,
      nom: 'API & Backend',
      detail: 'Conception et consommation d’API REST avec Django, gestion des données et intégration.',
      type_service: 'backend',
      outils: 'Django, REST API, SQLite'
    },
    {
      id: 0,
      user: 1,
      nom: 'Automation & Scripting',
      detail: 'Scripts Python pour automatiser des tâches et manipuler des données.',
      type_service: 'automation',
      outils: 'Python'
    }
  ];

  ngOnInit(): void {
    this.isLoading.set(true);
    this.serviceService.getServicesByUser(1).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.services.set(data);
        } else {
          this.services.set(this.fallbackServices);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.services.set(this.fallbackServices);
        this.loadError.set(null);
        this.isLoading.set(false);
      }
    });
  }
}
