import { Component, signal} from '@angular/core';
import { PeticionesHttpService } from '../../peticiones-http.service';

@Component({
  selector: 'app-lateral',
  imports: [],
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.css'
})
export class LateralComponent {
  mostrado = signal(false); // meter al service
  tituloPagina = signal("") // meter al modal
  
  constructor(private peticioneshttp: PeticionesHttpService){}

  HacerMostradoVerdadero(){ // meter al service
    this.mostrado.set(true)
  }

  HacerMostradoFalso(){ // meter al service
    this.mostrado.set(false)
  }

  CrearPagina(){ // post a la api de paginas con el titulo de la pagina // meter al modal
    if(this.tituloPagina() == ""){
      alert("Debes ingresar un titulo")
    } else {
      const data = {
        nombre: this.tituloPagina()
      }

      this.peticioneshttp.CrearEntidad("pagina", data)
      // llamada a la funcion que hace fetch a la api
    }
  }

  EscucharValorTitulo(e: Event){  // meter al modal
    const value = (e?.target as HTMLInputElement).value;
    this.tituloPagina.set(value)
  }


}
