import { Component, signal, OnInit, WritableSignal, effect} from '@angular/core';
import { PeticionesHttpService } from '../../peticiones-http.service';
import { PaginaInicioService } from '../pagina-inicio.service';

interface Pagina {
  id: number,
  nombre: string,
  text: string,
  paginaPadre: number,
  paginasHijos: number[],
  createdAt: string,
  updatedAt: string
}


@Component({
  selector: 'app-lateral',
  imports: [],
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.css'
})
export class LateralComponent implements OnInit {

  mostrado$: WritableSignal<boolean>
  paginas = signal<Pagina[]>([])

  constructor(private peticioneshttp: PeticionesHttpService, private paginaInicioService: PaginaInicioService){
    this.mostrado$ = this.paginaInicioService.mostrado;


    effect(() => { // effect para cada que cambie contador se ejecute ngoninit
      console.log(this.paginaInicioService.contador())
      this.ObtenerApi()
    })

  }

  ngOnInit(): void {
      this.ObtenerApi()
  }

  mostrar(){
    this.paginaInicioService.HacerMostradoVerdadero()
  }

  ocultar(){
    this.paginaInicioService.HacerMostradoFalso()
  }

  ObtenerApi(){
    this.peticioneshttp.ObtenerListaApi("pagina").then((data) => {
      this.paginas.set(data)
    })
  }
  


}
