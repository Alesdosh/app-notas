import { Component, signal} from '@angular/core';
import { PeticionesHttpService} from '../peticiones-http.service';

@Component({
  selector: 'app-pagina-login',
  imports: [],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.css'
})
export class PaginaLoginComponent {
    nombre = signal("")
    passwordR = signal("")
    emailR = signal("")

    passwordL = signal("")
    emailL = signal("")

    mostradoR = signal(false)


    ActualizarPassword(e: Event, tipo: String){
      const value = (e?.target as HTMLInputElement).value;

      switch(tipo){
        case "sesion": {
          this.passwordL.set(value)
        }
        break;
        case "registro":{
          this.passwordR.set(value)
        }
        break
      }

    }


    ActualizarEmail(e: Event, tipo: String){
      const value = (e?.target as HTMLInputElement).value;

      switch(tipo){
        case "sesion": {
          this.emailL.set(value)
        }
        break;
        case "registro":{
          this.emailR.set(value)
        }
        break
      }

    }


    ActualizarNombre(e: Event){
      const value = (e?.target as HTMLInputElement).value;

      this.nombre.set(value)
    }

    HacerFalso(){
      this.mostradoR.set(false)
    }

    HacerVerdadero(){
      this.mostradoR.set(true)
    } 




}
