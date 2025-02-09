import { Injectable, signal} from '@angular/core';

// poner aqui todas las funciones y signals que se utilizaran dentro de pagina-inicio

@Injectable({
  providedIn: 'root'
})
export class PaginaInicioService {
    mostrado = signal(false); 
    contador = signal(0)
  
  constructor() { }

  HacerMostradoVerdadero(){ 
    this.mostrado.set(true)
  }

  HacerMostradoFalso(){
    this.mostrado.set(false)
  }

  ActualizarContador(){
    this.contador.update(valor => valor + 1)
  }


}
