import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private urlBase = `${environment.apiUrl}/api/peliculas`;

  private http = inject(HttpClient);

  buscarPorTitulo(titulo: string): Observable<any> {
    return this.http.get<any>(
      `${this.urlBase}/buscar?titulo=${titulo}`
    );
  }

  buscarPorId(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.urlBase}/detalle/${id}`
    );
  }
}