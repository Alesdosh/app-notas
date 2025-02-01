import { Component, signal, OnInit, WritableSignal} from '@angular/core';
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
  }

  ngOnInit(): void {
      this.peticioneshttp.ObtenerListaApi("pagina").then((data) => {
        this.paginas.set(data)
      })
  }

  mostrar(){
    this.paginaInicioService.HacerMostradoVerdadero()
  }

  ocultar(){
    this.paginaInicioService.HacerMostradoFalso()
  }


}
