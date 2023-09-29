import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public faqGroups = [
    {
      title: 'Fundamentos',
      items: [
        {
          question: 'Como altero minha senha?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          expanded: false, 
        },
        {
          question: 'Como me inscrevo?',
          answer: 'Resposta para a pergunta 2.',
          expanded: false,
        },
        {
          question: 'Posso remover uma postagem?',
          answer: 'Resposta para a pergunta 3',
          expanded:false,
        },
        {
          question:'Qual é o prazo de entrega das mercadorias?',
          answer: 'Resposta para pergunta 4.',
          expanded:false,
        },
       
      ],
      
    },
    {
      title: 'Móvel',
      items: [
        {
          question: 'Como funciona a sincronização?',
          answer: 'Resposta para a pergunta 1.',
          expanded: false,
        },
        {
          question: 'Como faço upload de arquivos do meu tablet ou telefone?',
          answer: 'Resposta para a pergunta 2.',
          expanded: false,
        },

        {
          question: 'Como funciona as avaliações?',
          answer:'Resposta para a pergunta 3.',
          expanded:false},

          {
            question: 'Como faço para  vincular um arquivo a uma pasta?',
            answer :'Resposta para a pergunta 4.',
            expanded:false},
          
        
        
      ],
    },


   {
    title: 'Privacidade',
    items: [
      {
        question: "Posso especificar minha própria chave privada?",
        answer:"Resposta para a pergunta.",
        expanded:false},

        {question:'Quais dados são coletados pelo app?',
        answer:'Resposta para a pergunta.' ,
        expanded : false},

        {
          question :"Quem pode ver os seus dados pessoais? ",
          answer:"Resposta para a pergunta.",
          expanded : false},
          
          {
            question:'O que é um token ? ',
            answer:'Resposta para a pergunta' ,
            expanded : false},
          
    ],
   },


  {
    title: 'Conta',
    items: [
      {
        question: 'Como excluo minha senha?',
        answer:'Resposta para a pergunta. 1',
        expanded:false},

        {
          question: 'Como alterar o meu nome de usuário?',
          answer:'Resposta para a pergunta .2',
          expanded:false,
        },
        {
          question: 'Como mudar minhas configurações da conta?',
          answer:'Resposta para a pergunta .3',
          expanded:false
        },
        {
          question: 'Como desativar minha conta?',
          answer:'Resposta para a pergunta.',
          expanded:false
        }
    ],
   
  }
  
  ];
  
  
 

  toggleAnswer(item: { expanded: boolean; }) {
    item.expanded = !item.expanded;
  }
  constructor() { }

  ngOnInit() {
  }

}
