import { Component } from '@angular/core';

@Component({
  selector: 'app-media-aluno',
  templateUrl: './media-aluno.component.html',
  styleUrls: ['./media-aluno.component.css']
})
export class MediaAlunoComponent {
  AC1 : number = 0;
  AC2 : number = 0;
  AF  : number = 0;
  AG  : number = 0;
  media : number = 0;

  calcularMedia(){
    this.media = (this.AC1 + this.AC2 + this.AF + this.AG)/4;
  }
}
