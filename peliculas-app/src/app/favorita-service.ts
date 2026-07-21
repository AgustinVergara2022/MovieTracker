import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorita } from './favorita';
import { environment } from '../environments/environment';


@Injectable({providedIn: 'root'})
export class FavoritaService {
  private urlBase = `${environment.apiUrl}/api/favoritas`;

  private http = inject(HttpClient);

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase);
  }


  agregarPorTitulo(titulo: string): Observable<any> {
  return this.http.post<any>(`${this.urlBase}/agregar`, { titulo });
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`);
  }

 actualizar(favorita: any): Observable<any> {
  return this.http.put<any>(`${this.urlBase}/${favorita.id}`, favorita);
  }

  filtrarPorAnio(anio: number): Observable<Favorita[]> {
  return this.http.get<Favorita[]>(`${this.urlBase}/filtrar?anio=${anio}`);
  }

  ordenarPor(campo: string): Observable<Favorita[]> {
  return this.http.get<Favorita[]>(`${this.urlBase}/ordenadas?por=${campo}`);
  }



}
