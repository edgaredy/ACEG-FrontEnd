import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/**
 * - Descripcion: Clase NotificationService que contiene diversos metodos
 * a consumir para mostrar notificaciones al usuario
 * - Numero de Metodos: 5
 *
 * @author - edgar.rangel
 * @version - 1.0
 * @since - 17/09/2020
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  /**
   * Constructor de la clase
   *
   * @param toastr - servicio de notificaciones
   */
  constructor(private toastr: ToastrService) { }

  /**
   * Muestra una notificacion exitosa
   *
   * @param message - mensaje que sera mostrado
   * @param title - titulo de la notifiacion
   */
  showSuccess(message?: string, title?: string): void {
    this.toastr.success(message, title);
  }

  /**
   * Muestra una notificacion de error
   *
   * @param message - mensaje que sera mostrado
   * @param title - titulo de la notifiacion
   */
  showError(message?: string, title?: string): void {
    this.toastr.error(message, title);
  }

  /**
   * Muestra una notificacion informativa
   *
   * @param message - mensaje que sera mostrado
   * @param title - titulo de la notifiacion
   */
  showInfo(message?: string, title?: string): void {
    this.toastr.info(message, title);
  }

  /**
   * Muestra una notificacion de cuidado
   *
   * @param message - mensaje que sera mostrado
   * @param title - titulo de la notifiacion
   */
  showWarning(message?: string, title?: string): void {
    this.toastr.warning(message, title);
  }

}
