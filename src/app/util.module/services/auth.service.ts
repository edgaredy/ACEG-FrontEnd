import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../../registro/models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlRegistrarUsuario = 'http://localhost:8080/aceg/api/registro';
  private urlLogin = 'http://localhost:8080/aceg/api/login';
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  public login(usuario: UsuarioModel): Observable<object> {

    const authData = {
      email: usuario.email,
      password: usuario.password,
    };

    return this.http.post(this.urlLogin, authData)
      .pipe(
        map(
          resp => {
            this.guardarToken(resp['accessToken']);
            return resp;
          }));
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  public registraUsuario(usuario: UsuarioModel): Observable<object> {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      role: usuario.role
    };

    return this.http.post(this.urlRegistrarUsuario, authData);
  }

  private guardarToken(accessToken: string): void {

    this.userToken = accessToken;
    localStorage.setItem('token', accessToken);

    const hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expiracion', hoy.getTime().toString());

  }

  private leerToken(): string {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  public isAuthenticated(): boolean {

    if (this.userToken.length < 2) {
      return false;
    }

    const expToken = Number(localStorage.getItem('expiracion'));
    const expiracion = new Date();
    expiracion.setTime(expToken);

    if (expiracion > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
