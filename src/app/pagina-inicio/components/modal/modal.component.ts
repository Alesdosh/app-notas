import { Component, signal, WritableSignal} from '@angular/core';
import { PeticionesHttpService } from '../../../peticiones-http.service';
import { PaginaInicioService } from '../../pagina-inicio.service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  tituloPagina = signal("") 
    mostrado$: WritableSignal<boolean>
  

  constructor(private peticionesHttp: PeticionesHttpService, private paginaInicioService: PaginaInicioService){
    this.mostrado$ = this.paginaInicioService.mostrado;

  }

  CrearPagina(){ // post a la api de paginas con el titulo de la pagina
    if(this.tituloPagina() == ""){
      alert("Debes ingresar un titulo")
    } else {
      const data = {
        nombre: this.tituloPagina()
      }

      this.peticionesHttp.CrearEntidad("pagina", data)
      this.paginaInicioService.ActualizarContador();
    }

    this.ocultar()
  }

  EscucharValorTitulo(e: Event){  // meter al modal
    const value = (e?.target as HTMLInputElement).value;
    this.tituloPagina.set(value)
  }
  

  mostrar(){
    this.paginaInicioService.HacerMostradoVerdadero()
  }

  ocultar(){
    this.paginaInicioService.HacerMostradoFalso()
  }



}
