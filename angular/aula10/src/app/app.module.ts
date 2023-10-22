import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculdoraComponent } from './calculdora/calculdora.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaAlunoComponent } from './media-aluno/media-aluno.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { SeguroAutomobilisticoComponent } from './seguro-automobilistico/seguro-automobilistico.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculdoraComponent,
    MediaAlunoComponent,
    CadastroAlunoComponent,
    SeguroAutomobilisticoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
