import { Component, signal} from '@angular/core';
import { PeticionesHttpService} from '../peticiones-http.service';
import { Router } from '@angular/router';

interface Usuario {
  username: string,
  password: string
}

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
    nombreL = signal("")
    emailL = signal("")

    mostradoR = signal(false)

    constructor(private peticionesHttp: PeticionesHttpService, private router: Router){}



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


    ActualizarNombre(e: Event, tipo: String){
      const value = (e?.target as HTMLInputElement).value;

      switch(tipo){
        case "sesion": {
          this.nombreL.set(value)
        }
        break;
        case "registro": {
          this.nombre.set(value)
        }
        break;
      }


    }

    HacerFalso(){
      this.mostradoR.set(false)
    }

    HacerVerdadero(){
      this.mostradoR.set(true)
    } 

    

   async EnviarRegistro(){

      const data = {
        username: this.nombre(),
        password: this.passwordR()
      }

      this.peticionesHttp.CrearEntidad("usuarios", data)

      alert("usuario creado")
    }

    async EnviarLogIn(){

      this.peticionesHttp.ObtenerListaApi("usuarios").then((data: Usuario[]) => { // si coinciden los datos, entonces redirigir al usuario
        const usuario = data.find(item => 
          item.username == this.nombreL() && item.password == this.passwordL()
        )

        if(usuario){
          // redirigir
          this.router.navigate(['/inicio'])

        } else {
          alert("Usuario o Contraseña incorrectos")
        }

      })

    }



}
