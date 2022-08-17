import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public titulo = 'Professores';
  public professorSelecionado: string = '';

  public professores = [
    { id: 1, nome: 'David', disciplina: 'matemática' },
    { id: 2, nome: 'Lucas', disciplina: 'física'},
    { id: 3, nome: 'Elton', disciplina: 'português'},
    { id: 4, nome: 'Lincoln', disciplina: 'inglês'  },
    { id: 5, nome: 'Matheus', disciplina: 'programação'},

  ];


  professorSelect(professor: any){
    this.professorSelecionado = professor.nome;
  }

  voltar(){
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
