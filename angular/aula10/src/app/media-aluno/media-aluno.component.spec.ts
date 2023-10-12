import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAlunoComponent } from './media-aluno.component';

describe('MediaAlunoComponent', () => {
  let component: MediaAlunoComponent;
  let fixture: ComponentFixture<MediaAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaAlunoComponent]
    });
    fixture = TestBed.createComponent(MediaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
