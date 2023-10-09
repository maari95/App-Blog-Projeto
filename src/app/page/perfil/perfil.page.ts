import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/model/perfil.service'; // Importe o seu serviço aqui
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage implements OnInit {
  nomeUsuario: string=''
  bio: string=''
  email: string=''
  novoNome: string='' // Variável para armazenar o novo nome
  novaBio: string='' // Variável para armazenar a nova bio
  novoEmail: string='' // Variável para armazenar o novo email
  editando: boolean = false; // Variável para controlar a edição

  constructor(
    private perfilService: PerfilService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verifique se o usuário está logado
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // O usuário está logado, puxe os dados do usuário para edição
        this.perfilService.getAllUserData(user.uid).subscribe(userData => {
          if (userData) {
            this.nomeUsuario = userData.nome;
            this.bio = userData.bio;
            this.email = userData.email;
          }
        });
      } else {
        // O usuário não está logado, redirecione para a página de login
        this.router.navigateByUrl('/login');
      }
    });
  }

  habilitarEdicao(): void {
    this.editando = true;
    // Inicialize as variáveis de edição com os valores atuais
    this.novoNome = this.nomeUsuario;
    this.novaBio = this.bio;
    this.novoEmail = this.email;
  }

  salvarAlteracoes(): void {
    console.log("Novo Nome:", this.novoNome);
    console.log("Nova Bio:", this.novaBio);
    console.log("Novo Email:", this.novoEmail);
    // Chame o método para editar o perfil com os novos valores
    this.perfilService.editarPerfilUsuario(this.novoNome, this.novaBio, this.novoEmail);
    
    // Atualize os campos com os novos valores
    this.nomeUsuario = this.novoNome;
    this.bio = this.novaBio;
    this.email = this.novoEmail;

    this.editando = false; // Desative o modo de edição
  }
}
