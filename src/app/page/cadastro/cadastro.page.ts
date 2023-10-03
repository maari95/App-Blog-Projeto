import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/model/cadastro.service';
import { Router } from '@angular/router';
import { ToastController, ActionSheetController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  

  // nome:string='';
  email: string = '';
  senha: string = '';
  mensagem: string = '';
  // bio: string='';

  constructor(private service: CadastroService, private router: Router, private toastController: ToastController, private ActionSheetCtrl: ActionSheetController,private firedata: AngularFireDatabase ) { }

  ngOnInit() {
  }


  async registrar() {
    if (this.email && this.senha) {
      try {
        const result = await this.service.cadastrar(this.email, this.senha);
  
        console.log('Usuário Cadastrado');
        this.mostrarToast('Cadastro realizado com sucesso');
        this.router.navigate(['/login']);
      } catch (error) {
        console.error('Erro ao cadastrar usuário', error);
        this.mostrarToast('Erro ao cadastrar usuário');
      }
    } else {
      this.mostrarToast('Preencha todos os campos');
    }
  }
  

  async mostrarToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  // salvarNomeUsuario(){
  //   if(this.nome.trim() !== ''){
  //     localStorage.setItem('user', this.nome);
  //   }
  // }

}
