import { Component } from '@angular/core';
import { NavController, AlertController, Alert } from 'ionic-angular';
import { PerguntaPage } from '../pergunta/pergunta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nome: string;

  constructor(
    public navCtrl: NavController,
    private alert: AlertController) { 
      this.nome = '';
    }

  public iniciarJogo(): void {
    if (this.nome !== '') {
      this.navCtrl.push(PerguntaPage, { nome: this.nome });
    } else {
      this.alert.create({
        title: 'Aviso',
        subTitle: 'Por favor, informe o nome!',
        buttons: ['OK']
      }).present();
    }
  }

}
