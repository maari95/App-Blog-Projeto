import { Component, OnInit } from '@angular/core';
// import { LoginService } from 'src/app/model/login.service';
import { Router } from '@angular/router';
// import { TokenService } from 'src/app/model/token.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/model/auth.service';
import { CadastroService } from 'src/app/model/cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
 email: string='';
 senha: string='';
 mensagem: string='';

 constructor(private autenticar: AngularFireAuth, private router: Router, private authService:AuthService,
  private cadastro: CadastroService){}

//  METODO DE LOGIN 
 async login(){
  try{
    const userCredential = await this.autenticar.signInWithEmailAndPassword(
      this.email,
      this.senha
    );
    if (userCredential.user){
      this.authService.login();
      /* console.log(userCredential.user.uid); */
      localStorage.setItem('id',userCredential.user.uid);
      this.router.navigateByUrl('/home');
    }
  }catch(error){
    console.error('Erro ao fazer login', error);
    this.mensagem='Erro ao fazer login';
  }
 }

//  METODO PARA DESLOGAR
 async logout(){
  try{
    this.autenticar.signOut();
    this.cadastro.logout();
    
    this.router.navigateByUrl('/login');
  }catch(error){
    console.error('Erro ao fazer logout', error);
  }
 }
}
