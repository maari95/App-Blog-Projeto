import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'authenticated'; 
  private readonly SECRET_KEY = ' '; 

  constructor() {
    
    const encryptedValue = localStorage.getItem(this.AUTH_KEY);
    if (encryptedValue) {
      const decryptedValue = this.decrypt(encryptedValue);
      this.autenticado = decryptedValue === 'true';
    }
  }

  private autenticado = false;

  login() {
    this.autenticado = true;
    const encryptedValue = this.encrypt('true');
    localStorage.setItem(this.AUTH_KEY, encryptedValue); 
  }

  sair() {
    this.autenticado = false;
    const encryptedValue = this.encrypt('false');
    localStorage.setItem(this.AUTH_KEY, encryptedValue); 
  }

  getAuth() {
    return this.autenticado;
  }

  private encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.SECRET_KEY).toString();
  }

  private decrypt(encryptedValue: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, this.SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
