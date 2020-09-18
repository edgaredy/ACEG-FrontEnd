import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Clase para mostrar pagina de acceso no authorizado
 * a usuarios.
 *
 */

@Component({
  selector: 'app-forbidden-error',
  templateUrl: './forbidden.component.html'
})
export class ForbiddenComponent {

  /**
   * Constructor de la clase
   * @param router
   */
  constructor(private router: Router) {
  }

  /**
   * Metodo para redireccionar al usuario a home
   * cuando no tenga acceso a un contenido
   */
  goToHome() {
    this.router.navigate(['/']);
  }
}
