import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado: Aluno | undefined;

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 3222321},
    { id: 2, nome:'Paula', sobrenome: 'Isabela', telefone: 322244},
    { id: 3, nome:'Laura', sobrenome: 'Antonia', telefone: 322255 }
  ];

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
  }

  voltar(){
    this.alunoSelecionado = undefined;
  }

  constructor() {}

  ngOnInit() {
  }

}
