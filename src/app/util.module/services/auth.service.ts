import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../../registro/models/usuario.model';

/**
 * - Descripcion: Clase AuthService que contiene diversos metodos
 * a consumir para autenticar a un usuario
 * - Numero de Metodos: 7
 *
 * @author - edgar.rangel
 * @version - 1.0
 * @since - 17/09/2020
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL de registro de un nuevo usuario
  private urlRegistrarUsuario = 'http://localhost:8080/registro/registrar-usuario';

  // URL de logueo de un usuario
  private urlLogin = 'http://localhost:8080/login/login-usuario';

  // token del usuario
  userToken: string;

  /**
   * Constructor de la clase
   * Obtiene el token del usuario
   *
   * @param http - objeto HTTP para peticiones
   */
  constructor(private http: HttpClient) {
    this.leerToken();
  }

  /**
   * Metodo que loguea a un usuario
   *
   * @param usuario - objeto con las propiedas para loguear al usuario
   */
  login(usuario: UsuarioModel): Observable<object> {

    // datos necesario para iniciar sesion
    const authData = {
      email: usuario.email,
      password: usuario.password,
    };

    return this.http.post(this.urlLogin, authData)
      .pipe(
        map(
          resp => {
            // si el email y el password son correctos guardo el token del usuario
            this.guardarToken(resp['accessToken']);
            return resp;
          }));
  }

  /**
   * Cierra sesion de un usuario (logout)
   * Elimina el token del localStorage
   */
  logout(): void {
    localStorage.removeItem('token');
  }

  /**
   * Registra a un nuevo usuario
   *
   * @param usuario - objeto con las propiedas para registrar al usuario
   */
  registraUsuario(usuario: UsuarioModel): Observable<object> {

    let authData;

    if (usuario.role === 'ROLE_CARNICERO') {
      authData = {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        genero: usuario.genero,
        email: usuario.email,
        password: usuario.password,
        telefono: usuario.telefono,
        direccion: usuario.direccion,
        cp: usuario.cp,
        sueldoMensual: usuario.sueldoMensual,
        idCarniceria: usuario.idCarniceria,
        idEstado: usuario.idEstado,
        idMunicipio: usuario.idMunicipio,
        role: usuario.role
      };
    } else if (usuario.role === 'ROLE_CLIENTE') {
      authData = {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        genero: usuario.genero,
        email: usuario.email,
        password: usuario.password,
        telefono: usuario.telefono,
        direccion: usuario.direccion,
        cp: usuario.cp,
        idEstado: usuario.idEstado,
        idMunicipio: usuario.idMunicipio,
        role: usuario.role
      };
    } else if (usuario.role === 'ROLE_PROVEEDOR') {
      authData = {
        nombreEmpresa: usuario.nombreEmpresa,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        genero: usuario.genero,
        email: usuario.email,
        password: usuario.password,
        telefono: usuario.telefono,
        direccion: usuario.direccion,
        cp: usuario.cp,
        idEstado: usuario.idEstado,
        idMunicipio: usuario.idMunicipio,
        role: usuario.role
      };
    }

    return this.http.post(this.urlRegistrarUsuario, authData);
  }

  /**
   * Guarda el token del usuario del localStorage
   * Establece la expiracion del token (1 hora)
   *
   * @param accessToken - token de acceso del usuario
   */
  private guardarToken(accessToken: string): void {

    this.userToken = accessToken;
    localStorage.setItem('token', accessToken);

    const hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expiracion', hoy.getTime().toString());

  }

  /**
   * Obtiene el token del usuario del localStorage
   */
  private leerToken(): string {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  /**
   * Valida el token del usuario
   * Verifica que el token no este expirado
   */
  isAuthenticated(): boolean {

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
