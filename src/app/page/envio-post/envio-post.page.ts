import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-envio-post',
  templateUrl: './envio-post.page.html',
  styleUrls: ['./envio-post.page.scss'],
})
export class EnvioPostPage implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar os valores dos campos do formulário
    const title = (document.querySelector('#title') as HTMLInputElement).value;
    const text = (document.querySelector('#text') as HTMLInputElement).value;
    const fileInput = (document.querySelector('#file') as HTMLInputElement);

    // Verifique se um arquivo foi selecionado
    if (fileInput.files) {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('text', text);

      // Envie os dados para o servidor
      this.http.post('URL_DO_SEU_BACKEND', formData)
        .subscribe((response) => {
          console.log('Dados enviados com sucesso', response);
        });
    } else {
      console.error('Nenhuma imagem selecionada.');
    }
  }
}
