import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * - Descripcion: Clase ForbiddenComponent para mostrar pagina de acceso
 * no authorizado a usuarios.
 * - Numero de Metodos: 2
 *
 * @author - edgar.rangel
 * @version - 1.0
 * @since - 17/09/2020
 */
@Component({
  selector: 'app-forbidden-error',
  templateUrl: './forbidden.component.html'
})
export class ForbiddenComponent {

  /**
   * Constructor de la clase
   *
   * @param router -  objeto para navegar a otra URL
   */
  constructor(private router: Router) {
  }

  /**
   * Metodo para redireccionar al usuario a home
   * cuando no tenga acceso a un contenido
   */
  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
