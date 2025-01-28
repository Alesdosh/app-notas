import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Estado global

@Injectable({
  providedIn: 'root'
})
export class GlobalContextService {

  private contraseñaState = new BehaviorSubject<string | null>(null);
  contraseña$ = this.contraseñaState.asObservable();


  setContraseña(contraseña: string | null){
    this.contraseñaState.next(contraseña)
  }


}
