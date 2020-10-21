import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private commonUrl = 'http://localhost:8080/registro/';
  private urlNombreCarnicerias = this.commonUrl + 'get-carnicerias';
  private urlEstados = this.commonUrl + 'get-estados';
  private urlMunicipios = this.commonUrl + 'get-municipios';

  constructor(private http: HttpClient) { }

  getCarnicerias(idEstado: number): Observable<object> {
    return this.http.get(`${this.urlNombreCarnicerias}/${idEstado}`);
  }

  getEstados(): Observable<object> {
    return this.http.get(this.urlEstados);
  }

  getMunicipios(idEstado: number): Observable<object> {
    return this.http.get(`${this.urlMunicipios}/${idEstado}`);
  }
}
