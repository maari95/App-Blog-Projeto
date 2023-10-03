import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/model/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nomeSelecionado: any = {}
  nomes: any = []
  validarCampo: boolean = false;
  novoNome: string = ''; 
  novaBio: string = ''; 


  constructor(private service: PerfilService) { }

  ngOnInit(): void {
    this.getNomes();
  }
  getNomes(): void {

    this.service.getNome().subscribe((nomes) => {
      this.nomes = nomes;
    });
  }

  selecionarNome(nome: any): void {
    console.log('Nome Selecionado', nome);

    this.nomeSelecionado = nome;
    this.validarCampo = false;
  }


  atualizarNome(novoNome: string, novaBio: string, ) {
    const userId = ''; 
    this.service.setUserId(userId); 

    
    this.service.updateNome(userId, novoNome, novaBio,);
  }

  verificarId(): void {
    if (this.nomeSelecionado.id) {
      const novoNome = '';
      const novaBio = '';
      this.atualizarNome(novaBio, novoNome);
    } else {
      console.log('Não foi possivel atualizar os dados');
    }
    this.nomeSelecionado = {};
  }

}
