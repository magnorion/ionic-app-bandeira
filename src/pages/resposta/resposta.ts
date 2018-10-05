import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerguntaPage } from '../pergunta/pergunta';

/**
 * Generated class for the RespostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resposta',
  templateUrl: 'resposta.html',
})
export class RespostaPage {

  private score: number;
  private nome: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = this.navParams.get('pontuacao');
    this.nome = this.navParams.get('nome');
  }

  public iniciarJogo(): void {
    this.navCtrl.push(PerguntaPage, { nome: this.nome });
  }

}
