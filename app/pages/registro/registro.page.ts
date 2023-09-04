import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombre: '',
    email: '',
    password: '',
  };

  constructor(private alertController: AlertController, private router: Router) { }
  ngOnInit() {
    
  }

  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: '¡Gracias!',
      message: '¡Sus datos han sido enviados!',
      buttons: ['OK'],
    });
    this.router.navigate(['/inicio']);
    await alert.present();
  }

  Enviar() {
    this.mostrarMensaje();
    this.usuario.nombre = '';
    this.usuario.email = '';
    this.usuario.password = '';
  }
 

}
