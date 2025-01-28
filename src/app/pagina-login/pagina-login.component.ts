import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-login',
  imports: [],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.css'
})
export class PaginaLoginComponent {
  numero: number = 0;
  nombre: string = ""

    sumar(){
      this.numero = this.numero + 1
    }

    restar(){
      this.numero = this.numero - 1
    }

    actualizarNombre(event: Event){ // funciona como un onChange 
      const inputNombre = event.target as HTMLInputElement
      this.nombre = inputNombre.value
    }

    mostrarAlerta(){
      alert(this.nombre)
    }
}
