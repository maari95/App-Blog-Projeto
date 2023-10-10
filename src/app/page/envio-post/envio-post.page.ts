import { Component, OnInit } from '@angular/core';
import { PubliService } from 'src/app/model/publi.service';

@Component({
  selector: 'app-envio-post',
  templateUrl: './envio-post.page.html',
  styleUrls: ['./envio-post.page.scss'],
})
export class EnvioPostPage implements OnInit {
  postagem: any;
  news: any;
  formData: any;
  imageUrl: string | ArrayBuffer | null = null;
  imagem: any;

  constructor(private publi: PubliService) {
    this.formData = {
      title: '', // Initialize formData with empty values
      text: '',
      img: '', // Initialize img property
    };
  }

  ngOnInit(): void {}

  extrairURL(event: any) {
    const arquivoSelecionado = event.target.files[0];

    if (arquivoSelecionado) {
      const leitor = new FileReader();

      leitor.onload = (e: any) => {
        this.imageUrl = e.target.result;
        this.formData.img = this.imageUrl;
      };

      leitor.readAsDataURL(arquivoSelecionado);
    }
  }

  enviar() {
    // Call submitForm() method from PubliService and pass formData
    this.publi.submitForm(this.formData);
  }

  salvar() {}
}
