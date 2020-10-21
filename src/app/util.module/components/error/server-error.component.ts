import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * - Descripcion: Clase ServerErrorComponent para mostrar pagina de acceso
 * no authorizado a usuarios.
 * - Numero de Metodos: 2
 *
 * @author - edgar.rangel
 * @version - 1.0
 * @since - 17/09/2020
 */
@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html'
})
export class ServerErrorComponent {

  /**
   * Constructor de la clase
   * @param router - objeto para navegar a otra URL
   */
  constructor(private router: Router) {
  }

  /**
   * Metodo para redireccionar al usuario a home
   * cuando suceda un error 500
   */
  goToHome(): void {
    this.router.navigate(['/home']);
  }

}
