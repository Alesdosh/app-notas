import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNotaComponent } from './pagina-nota.component';

describe('PaginaNotaComponent', () => {
  let component: PaginaNotaComponent;
  let fixture: ComponentFixture<PaginaNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
