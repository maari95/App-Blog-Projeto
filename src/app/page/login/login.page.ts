import { Component, OnInit } from '@angular/core';
// import { LoginService } from 'src/app/model/login.service';
import { Router } from '@angular/router';
// import { TokenService } from 'src/app/model/token.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
 email: string='';
 senha: string='';
 mensagem: string='';

 constructor(private autenticar: AngularFireAuth, private router: Router, private authService:AuthService){}

 async login(){
  try{
    const userCredential = await this.autenticar.signInWithEmailAndPassword(
      this.email,
      this.senha
    );
    if (userCredential.user){
      this.authService.login();
      this.router.navigateByUrl('/home');
    }
  }catch(error){
    console.error('Erro ao fazer login', error);
    this.mensagem='Erro ao fazer login';
  }
 }
}
