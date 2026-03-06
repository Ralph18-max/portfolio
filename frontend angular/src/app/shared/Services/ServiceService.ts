import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IService} from '../models/IService';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://your-backend-url.onrender.com/api';

  getServices(): Observable<IService[]> {
    return this.http.get<IService[]>(`${this.apiUrl}/services/`);
  }

  getServicesByUser(userId: number): Observable<IService[]> {
    return this.http.get<IService[]>(`${this.apiUrl}/services/?user=${userId}`);
  }
}
