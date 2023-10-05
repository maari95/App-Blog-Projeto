import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/model/perfil.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nomeSelecionado: any = {};
  dadosUser: any = [];
  validarCampo: boolean = false;
  novoNome: string = ''; 
  novaBio: string = ''; 

  

  constructor(private service: PerfilService) { }
   
  
  ngOnInit(): void {
    this.getNome();
  }
  
  getNome(): void {

    const userId = localStorage.getItem('userID'); 

    if (userId !== null) {
      this.service.getNome().subscribe(
        (dadosUser) => {
          if (dadosUser) {
            // Dados do usuário obtidos com sucesso, você pode fazer o que for necessário com eles aqui
            this.dadosUser = dadosUser;

          } else {
            console.log(dadosUser);
            console.error('Dados do usuário não encontrados no Firebase.');
          }
        },
        (error) => {
          console.error('Erro ao obter dados do usuário:', error);
        }
      );
    } else {
      console.error('ID de usuário não encontrado no localStorage.');
    }
  }
  
  selecionarNome(nome: any): void {
    console.log('Nome Selecionado', nome);

    this.nomeSelecionado = nome;
    this.validarCampo = false;
  }


  atualizarNome(novoNome: string, novaBio: string): void{ 
    const userId = localStorage.getItem('userID'); 

      if(userId){
        this.service.updateNome(userId, novoNome, novaBio).subscribe(() => {
          console.log('Dados alterados com sucesso');      
        },
        (error) => {
          console.log("Erro ao alterar dados", error);         
        }
      );
    } else {
      console.error('ID de usuário não encontrado no localStorage');
    }
  }

  verificarId(): void {
    if (this.nomeSelecionado.id) {
       this.atualizarNome(this.novaBio, this.novoNome);
    } else {
      console.log('Não foi possivel atualizar os dados');
    }
    this.nomeSelecionado = {};
  }

}
