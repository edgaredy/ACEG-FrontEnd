import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../registro/models/usuario.model';
import { AuthService } from '../../util.module/services/auth.service';
import { NotificationService } from '../../util.module/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  usuario: UsuarioModel;
  recordarEmail = false;

  constructor(private auth: AuthService, private notifyService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarEmail = true;
    }
  }

  onSubmit(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    console.log('Formulario Posteado');
    console.log(this.usuario);
    console.log(form);

    this.auth.login(this.usuario).subscribe(resp => {
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
