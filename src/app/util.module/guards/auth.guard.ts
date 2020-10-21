import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * - Descripcion: Clase AuthGuard que permite el acceso de usuarios
 * - Numero de Metodos: 3
 *
 * @author - edgar.rangel
 * @version - 1.0
 * @since - 17/09/2020
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   * Constructor de la clase
   *
   * @param auth - servicio de autenticacion de usuario
   * @param router - objeto para navegar a otra URL
   */
  constructor(private auth: AuthService, private router: Router) {
  }

  /**
   * Metodo que valida que un usuario este autenticado
   *
   * Valida el token del usuario y que no este expirado
   */
  canActivate(): boolean {

    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
