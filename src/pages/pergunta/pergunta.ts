import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RespostaPage } from '../resposta/resposta';
import { Bandeira } from '../../modelos/Bandeira';

/**
 * Generated class for the PerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
})
export class PerguntaPage {
  private nome: string;
  private bandeiras: Array<Bandeira>;
  private score: number;
  private current: number;
  private limit: number;
  private resposta: string;
  private respostas: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = navParams.get('nome');
    this.bandeiras = [
      new Bandeira('/assets/imgs/bandeiras/argentina.jpg', 'argentina' ),
      new Bandeira('/assets/imgs/bandeiras/brasil.jpg', 'brasil' ),
      new Bandeira('/assets/imgs/bandeiras/canada.jpg', 'canada' ),
      new Bandeira('/assets/imgs/bandeiras/eua.jpg', 'eua' )
    ];

    this.limit = this.bandeiras.length;
    this.current = 0;
    this.resposta = '';
    this.respostas = [];
    this.score = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaPage');
  }

  public proxima(): void {
    if (this.resposta !== '' ) {
      this.respostas.push(this.resposta);
      this.score += this.acerto();
      
      if (this.current == ( this.limit - 1 ) ) {
        this.navCtrl.push(RespostaPage, {
          nome: this.nome,
          pontuacao: this.score
        });
      } else {
        this.current++;
      }
      
    }
  }

  public acerto(): number {
    const bandeira = this.bandeiras[this.current];
    if (bandeira.nome == this.resposta)  {
      return 1;
    }

    return 0;
  }
}
