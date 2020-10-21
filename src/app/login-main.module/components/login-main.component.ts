import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../registro/models/usuario.model';
import { AuthService } from '../../util.module/services/auth.service';
import { NotificationService } from '../../util.module/services/notification.service';

/**
 * - Descripcion: Clase LoginMainComponent que realiza el inicio 
 * de sesion de un usuario
 * - Numero de Metodos: 3
 *
 * @author - edgar.rangel
 * @version - 1.0
 * @since - 17/09/2020
 */
@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  // usuario de tipo UsuarioModel
  usuario: UsuarioModel;
  // bandera para verificar si se recordo el email del usuario
  recordarEmail = false;

  /**
   * Constructor de la clase
   *
   * @param auth - servicio de autenticacion de usuario
   * @param notifyService - servicio de notificaciones
   * @param router - objeto para navegar a otra URL
   */
  constructor(private auth: AuthService, private notifyService: NotificationService, private router: Router) { }

  /**
   * Metodo inicial de la clase
   *
   * Crea una nueva instancia de tipo UsuarioModel
   * Verifica si se recordo el email del usuario
   * Obtiene el email del usuario del localStorage
   * Cambia bandera recordarEmail a true
   */
  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarEmail = true;
    }
  }

  /**
   * Metodo que se ejecuta al momento de postear el formulario de
   * inicio de sesion de un usuario
   *
   * Valida el formulario
   * Verifica la existencia del usuario y contraseña
   * Muestra notificacion de operacion exitosa/erronea
   * Verifica si el usuario marca la opcion de recordar email
   * Navega hacia la ruta /home
   *
   * @param form - formulario
   */
  onSubmit(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    console.log('Formulario Posteado');
    console.log(this.usuario);
    console.log(form);

    this.auth.login(this.usuario).subscribe(resp => {

      console.log(resp);
      this.notifyService.showSuccess('', 'Operación Exitosa');

      if (this.recordarEmail) {
        localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/home');
    }, (err) => {
      console.log(err.error.message);
      this.notifyService.showError(err.error.message, 'Error de inicio de sesión');
    });
  }

}
