import { Component, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LateralComponent } from '../pagina-inicio/lateral/lateral.component';
import { PeticionesHttpService } from '../peticiones-http.service';
import { PaginaInicioService } from '../pagina-inicio/pagina-inicio.service';
import { ModalComponent } from '../pagina-inicio/components/modal/modal.component';

// Ruta dinamica

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
  selector: 'app-pagina-nota',
  imports: [CommonModule, RouterModule, LateralComponent, ModalComponent],
  templateUrl: './pagina-nota.component.html',
  styleUrl: './pagina-nota.component.css'
})
export class PaginaNotaComponent {
  notaId = ""
  infoNota = signal<Pagina | null>(null)
  mostrado$: WritableSignal<boolean>
  texto = signal("")
  

  constructor(private route: ActivatedRoute, private peticionesHttpService: PeticionesHttpService, private paginaInicioService: PaginaInicioService){
    this.mostrado$ = this.paginaInicioService.mostrado;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { // funcion para setear el notaId con el id que se dio en otra pagina, esto para hacer peticiones get, post, put
      this.notaId = params['id']
    })

    this.ObtenerPaginaCompleta()
  }

  ObtenerPaginaCompleta(){
    this.peticionesHttpService.ObtenerDatosCompletos("pagina", this.notaId).then((data) => {
      this.infoNota.set(data)
    })
  }

  actualizarTexto(event: Event){ // funciona como un onChange 
    const inputNombre = event.target as HTMLInputElement
    this.texto.set(inputNombre.value)
  }

}
