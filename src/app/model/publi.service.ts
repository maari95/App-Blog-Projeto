import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PubliService {

  postagem: any = [];
  news: any;
  formData: any;
  imageUrl: string | ArrayBuffer | null = null;

  constructor() { }

  ngOnInit() {
  }
  salvarDadosLocalStorage() {
    // Converter os arrays para strings JSON
    const postagemString = JSON.stringify(this.postagem);
    const newsString = JSON.stringify(this.news);

    // Salvar no localStorage
    localStorage.setItem('postagem', postagemString);
    localStorage.setItem('news', newsString);
  }
  submitForm(formData: any) {
    // Add the URL of the image to the formData
    formData.img = this.imageUrl;

    // Add formData to the postagem array
    this.postagem.push({
      title: formData.title,
      autor: formData.autor,
      img: formData.img,
      text: formData.text,
    });
    // Armazene o array atualizado no localStorage
    localStorage.setItem('postagem', JSON.stringify(this.postagem));
  
    // Limpe o formulário após a adição
    this.formData = {};
  }
  
}
