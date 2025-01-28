import { Component, OnInit} from '@angular/core';
import { LateralComponent } from './lateral/lateral.component';
import { GlobalContextService } from '../global-context.service';

@Component({
  selector: 'app-pagina-inicio',
  imports: [LateralComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent implements OnInit {
  

  // codigo para tener un estado global
  contraseña: string | null = "";

  constructor(private globalContext: GlobalContextService){}

  ngOnInit(): void {
      this.globalContext.contraseña$.subscribe((contraseña) => {
        this.contraseña = contraseña
      })
  }

}
