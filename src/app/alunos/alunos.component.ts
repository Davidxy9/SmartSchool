import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 3222321},
    { id: 2, nome:'Paula', sobrenome: 'Isabela', telefone: 322244},
    { id: 3, nome:'Laura', sobrenome: 'Antonia', telefone: 322255 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
