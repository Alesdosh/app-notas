import { Component, signal, OnInit, WritableSignal} from '@angular/core';
import { PeticionesHttpService } from '../../peticiones-http.service';
import { PaginaInicioService } from '../pagina-inicio.service';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-lateral',
  imports: [ModalComponent],
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.css'
})
export class LateralComponent implements OnInit {

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
