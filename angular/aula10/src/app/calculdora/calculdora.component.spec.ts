import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculdoraComponent } from './calculdora.component';

describe('CalculdoraComponent', () => {
  let component: CalculdoraComponent;
  let fixture: ComponentFixture<CalculdoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculdoraComponent]
    });
    fixture = TestBed.createComponent(CalculdoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
