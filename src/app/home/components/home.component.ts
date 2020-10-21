import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../util.module/services/auth.service';
import { NotificationService } from 'src/app/util.module/services/notification.service';

/**
 * - Descripcion: Clase HomeComponent que muestra la pantalla /home
 * de la aplicacion
 * - Numero de Metodos: 3
 *
 * @author - edgar.rangel
 * @version - 1.0
 * @since - 17/09/2020
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Constructor de la clase
   *
   * @param auth - servicio de autenticacion de usuario
   * @param router - objeto para navegar a otra URL
   * @param notifyService - servicio de notificaciones
   */
  constructor(private auth: AuthService, private router: Router, private notifyService: NotificationService) { }

  /**
   * Metodo inicial de la clase
   */
  ngOnInit(): void {
  }

  /**
   * Metodo para salir de la aplicacion
   *
   * Cierra la sesion del usuario y elimina el token
   * Redirecciona al login
   * Muestra notificacion
   */
  salir(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
    this.notifyService.showSuccess('', 'Operación Exitosa');
  }

}
