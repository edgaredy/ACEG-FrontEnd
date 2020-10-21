import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from '../../util.module/services/auth.service';
import { NotificationService } from '../../util.module/services/notification.service';
import { RegistroService } from '../services/registro.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * - Descripcion: Clase RegistroComponent que realizo el registro de un
 * nuevo usuario
 * - Numero de Metodos: 3
 *
 * @author - edgar.rangel
 * @version - 1.0
 * @since - 17/09/2020
 */
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // usuario de tipo UsuarioModel
  usuario: UsuarioModel;

  recordarEmail = false;
  dataCarniceria = [];
  idCarnicerias = [];
  dataEstado = [];
  dataMunicipios: any = [];

  // bandera para verificar si se recordo el email del usuario
  bandera = false;

  /**
   * Constructor de la clase
   *
   * @param auth - servicio de autenticacion de usuario
   * @param notifyService - servicio de notificaciones
   * @param router - objeto para navegar a otra URL
   */
  constructor(private auth: AuthService, private notifyService: NotificationService,
              private router: Router, private registroService: RegistroService) { }

  /**
   * Metodo inicial de la clase
   *
   * Crea una nueva instancia de tipo UsuarioModel
   * Inicializa variables del select
   * Obtiene la lista de carniceria
   * Obtiene la lista de estados
   * Obtiene la lista de municipios
   */
  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    this.usuario.role = null;
    this.usuario.genero = null;
    this.usuario.idCarniceria = null;
    this.usuario.idEstado = null;
    this.usuario.idMunicipio = null;
    this.getEstados();
  }

  /**
   * Metodo que se ejecuta al momento de postear el formulario de
   * registro de un nuevo usuario
   *
   * Valida el formulario
   * Registra al usuario
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

    this.auth.registraUsuario(this.usuario).subscribe(resp => {

      console.log(resp);
      this.notifyService.showSuccess('Se registro al usuario correctamente', 'Operación Exitosa');

      if (this.recordarEmail) {
        localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/home');
    }, (err) => {
      console.log(err.error.errors[0].message);
      this.notifyService.showError(err.error.errors[0].message, 'Error de registro');
    });
  }

  getCarnicerias(): void {

    let response: any = [];
    this.dataCarniceria = [];
    this.idCarnicerias = [];

    this.registroService.getCarnicerias(this.usuario.idEstado).subscribe(res => {
      response = res;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < response.content.length; i++) {
        // console.log(response);
        this.dataCarniceria.push(response.content[i].idCarniceria + ' || ' + response.content[i].nombre
          + ' || ' + this.obtenerNombreEstado(response.content[i].idEstado) + ' || ' + response.content[i].municipio + ' || '
          + response.content[i].direccion + ' || ' + response.content[i].cp);
        this.idCarnicerias.push(response.content[i].idCarniceria);
      }
    }, (err) => {
      response = err;
      console.log(response.error.message);
      this.notifyService.showError(response.error.message, 'Error Obteniendo Datos');
    }
    );
  }

  validarGetCarnicerias(): void {
    if (this.usuario.role === 'ROLE_CARNICERO') {
      this.getCarnicerias();
    }
  }

  obtenerNombreEstado(idEstado: number): string {

    let nombreEstado: string;

    switch (idEstado) {
      case 1:
        // console.log('Aguascalientes');
        nombreEstado = 'Aguascalientes';
        break;
      case 2:
        // console.log('Baja California');
        nombreEstado = 'Baja California';
        break;
      case 3:
        // console.log('Baja California Sur');
        nombreEstado = 'Baja California Sur';
        break;
      case 4:
        // console.log('Campeche');
        nombreEstado = 'Campeche';
        break;
      case 5:
        // console.log('Chiapas');
        nombreEstado = 'Chiapas';
        break;
      case 6:
        // console.log('Chihuahua');
        nombreEstado = 'Chihuahua';
        break;
      case 7:
        // console.log('Ciudad de Mexico ');
        nombreEstado = 'Ciudad de Mexico ';
        break;
      case 8:
        // console.log('Coahuila');
        nombreEstado = 'Coahuila';
        break;
      case 9:
        // console.log('Colima');
        nombreEstado = 'Colima';
        break;
      case 10:
        // console.log('Durango');
        nombreEstado = 'Durango';
        break;
      case 11:
        // console.log('Guanajuato');
        nombreEstado = 'Guanajuato';
        break;
      case 12:
        // console.log('Guerrero');
        nombreEstado = 'Guerrero';
        break;
      case 13:
        // console.log('Hidalgo');
        nombreEstado = 'Hidalgo';
        break;
      case 14:
        // console.log('Jalisco');
        nombreEstado = 'Jalisco';
        break;
      case 15:
        // console.log('Mexico');
        nombreEstado = 'Mexico';
        break;
      case 16:
        // console.log('Michoacan');
        nombreEstado = 'Michoacan';
        break;
      case 17:
        // console.log('Morelos');
        nombreEstado = 'Morelos';
        break;
      case 18:
        // console.log('Nayarit');
        nombreEstado = 'Nayarit';
        break;
      case 19:
        // console.log('Nuevo Leon');
        nombreEstado = 'Nuevo Leon';
        break;
      case 20:
        // console.log('Oaxaca');
        nombreEstado = 'Oaxaca';
        break;
      case 21:
        // console.log('Puebla');
        nombreEstado = 'Puebla';
        break;
      case 22:
        // console.log('Queretaro');
        nombreEstado = 'Queretaro';
        break;
      case 23:
        // console.log('Quintana Roo');
        nombreEstado = 'Quintana Roo';
        break;
      case 24:
        // console.log('San Luis Potosi');
        nombreEstado = 'San Luis Potosi';
        break;
      case 25:
        // console.log('Sinaloa');
        nombreEstado = 'Sinaloa';
        break;
      case 26:
        // console.log('Sonora');
        nombreEstado = 'Sonora';
        break;
      case 27:
        // console.log('Tabasco');
        nombreEstado = 'Tabasco';
        break;
      case 28:
        // console.log('Tamaulipas');
        nombreEstado = 'Tamaulipas';
        break;
      case 29:
        // console.log('Tlaxcala');
        nombreEstado = 'Tlaxcala';
        break;
      case 30:
        // console.log('Veracruz');
        nombreEstado = 'Veracruz';
        break;
      case 31:
        // console.log('Yucatan');
        nombreEstado = 'Yucatan';
        break;
      case 32:
        // console.log('Zacatecas');
        nombreEstado = 'Zacatecas';
        break;
      default:
        // console.log('No se encontro el id del estado');
        nombreEstado = 'null';
        break;
    }

    return nombreEstado;
  }

  getEstados(): void {

    let response: any = [];

    this.registroService.getEstados().subscribe(res => {
      response = res;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < response.content.length; i++) {
        // console.log(this.datosEstado.content[i]);
        this.dataEstado.push(response.content[i].estado);
      }
    }, (err) => {
      response = err;
      console.log(response.error.message);
      this.notifyService.showError(response.error.message, 'Error Obteniendo Datos');
    }
    );
  }

  getMunicipios(): void {

    let response: any = [];
    this.dataMunicipios = [];

    this.registroService.getMunicipios(this.usuario.idEstado).subscribe(res => {
      response = res;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < response.content.length; i++) {
        // console.log(response.content[i].municipio);
        this.dataMunicipios.push(response.content[i].municipio);
      }
    }, (err) => {
      response = err;
      console.log(response.error.message);
      this.notifyService.showError(response.error.message, 'Error Obteniendo Datos');
    }
    );
  }

}
