import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IExperience } from '../models/IExperience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://your-backend-url.onrender.com/api';

  getExperiences(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>(`${this.apiUrl}/experiences/`);
  }

  getExperienceById(id: number): Observable<IExperience> {
    return this.http.get<IExperience>(`${this.apiUrl}/experiences/${id}/`);
  }

  getExperiencesByUser(userId: number): Observable<IExperience[]> {
    return this.http.get<IExperience[]>(`${this.apiUrl}/experiences/?user=${userId}`);
  }

  createExperience(experience: IExperience): Observable<IExperience> {
    return this.http.post<IExperience>(`${this.apiUrl}/experiences/`, experience);
  }

  updateExperience(id: number, experience: IExperience): Observable<IExperience> {
    return this.http.put<IExperience>(`${this.apiUrl}/experiences/${id}/`, experience);
  }

  deleteExperience(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/experiences/${id}/`);
  }
}