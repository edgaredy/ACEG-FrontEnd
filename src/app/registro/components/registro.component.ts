import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../util.module/services/auth.service';
import { NotificationService } from '../../util.module/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarEmail = false;

  constructor(private auth: AuthService, private notifyService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    console.log('Formulario Posteado');
    console.log(this.usuario);
    console.log(form);

    this.auth.registraUsuario(this.usuario).subscribe(resp => {
      console.log(resp);

      if (this.recordarEmail) {
        localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/home');
    }, (err) => {
      console.log(err.error.message);
      this.notifyService.showError(err.error.message, 'Error');
    });
  }

}
