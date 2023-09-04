import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router , private alertController: AlertController) { }
  usuario = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }
  async error() {
    const alert = await this.alertController.create({
      header: 'Error al iniciar sesión',
      message: 'usuario o contraseña incorrectas',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async bien() {
    const alert = await this.alertController.create({
      header: '¡Iniciando Sesion!',
      message: '¡Hola de nuevo!',
      buttons: ['OK'],
    });
    this.router.navigate(['/inicio']);
    await alert.present();
  }
  
  login() {
    if (this.usuario.email === 'test' && this.usuario.password === '1234') {
      this.bien();
    } else {  
      this.error();
    }
  }
  

}
