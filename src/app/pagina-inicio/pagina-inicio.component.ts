import { Component, OnInit, WritableSignal} from '@angular/core';
import { LateralComponent } from './lateral/lateral.component';
import { PeticionesHttpService } from '../peticiones-http.service';
import { PaginaInicioService } from './pagina-inicio.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-pagina-inicio',
  imports: [LateralComponent, ModalComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent implements OnInit {
  

   mostrado$: WritableSignal<boolean>
  
    constructor(private peticioneshttp: PeticionesHttpService, private paginaInicioService: PaginaInicioService){
      this.mostrado$ = this.paginaInicioService.mostrado;
    }
  
    ngOnInit(): void {
      
    }
  
    mostrar(){
      this.paginaInicioService.HacerMostradoVerdadero()
    }
  
    ocultar(){
      this.paginaInicioService.HacerMostradoFalso()
    }

}
