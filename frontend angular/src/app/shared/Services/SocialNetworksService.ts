import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISocialNetworks } from '../models/ISocialNetworks';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://your-backend-url.onrender.com/api';

  getSocialNetworks(): Observable<ISocialNetworks[]> {
    return this.http.get<ISocialNetworks[]>(`${this.apiUrl}/social-networks/`);
  }

  getSocialNetworkById(id: number): Observable<ISocialNetworks> {
    return this.http.get<ISocialNetworks>(`${this.apiUrl}/social-networks/${id}/`);
  }

  getSocialNetworksByUser(userId: number): Observable<ISocialNetworks[]> {
    return this.http.get<ISocialNetworks[]>(`${this.apiUrl}/social-networks/?user=${userId}`);
  }

  createSocialNetwork(socialNetwork: ISocialNetworks): Observable<ISocialNetworks> {
    return this.http.post<ISocialNetworks>(`${this.apiUrl}/social-networks/`, socialNetwork);
  }

  updateSocialNetwork(id: number, socialNetwork: ISocialNetworks): Observable<ISocialNetworks> {
    return this.http.put<ISocialNetworks>(`${this.apiUrl}/social-networks/${id}/`, socialNetwork);
  }

  deleteSocialNetwork(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/social-networks/${id}/`);
  }
}