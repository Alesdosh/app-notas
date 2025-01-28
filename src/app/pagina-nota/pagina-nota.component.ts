import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

// Ruta dinamica

@Component({
  selector: 'app-pagina-nota',
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina-nota.component.html',
  styleUrl: './pagina-nota.component.css'
})
export class PaginaNotaComponent {
  notaId = ""

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => { // funcion para setear el notaId con el id que se dio en otra pagina, esto para hacer peticiones get, post, put
      this.notaId = params['id']
    })
  }

}
