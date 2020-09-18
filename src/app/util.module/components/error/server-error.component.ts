import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Clase para mostrar pagina de acceso no authorizado
 * a usuarios.
 *
 */

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html'
})
export class ServerErrorComponent {
  /**
   * Constructor de la clase
   * @param router - servicio para manejo de rutas
   */
  constructor(private router: Router) {
  }

  /**
   * Metodo para redireccionar al usuario a home
   * cuando suceda un error 500
   */
  goToHome() {
    this.router.navigate(['/']);
  }

}
