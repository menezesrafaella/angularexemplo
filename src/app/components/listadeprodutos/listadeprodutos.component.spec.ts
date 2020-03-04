import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeprodutosComponent } from './listadeprodutos.component';

describe('ListadeprodutosComponent', () => {
  let component: ListadeprodutosComponent;
  let fixture: ComponentFixture<ListadeprodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadeprodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
