import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroAutomobilisticoComponent } from './seguro-automobilistico.component';

describe('SeguroAutomobilisticoComponent', () => {
  let component: SeguroAutomobilisticoComponent;
  let fixture: ComponentFixture<SeguroAutomobilisticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguroAutomobilisticoComponent]
    });
    fixture = TestBed.createComponent(SeguroAutomobilisticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
