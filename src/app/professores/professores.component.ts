import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public titulo = 'Professores';

  public professores = [
    { nome: 'David' },
    { nome: 'Lucas' },
    { nome: 'Elton' },
    { nome: 'Lincoln' },
    { nome: 'Matheus' },

  ]


  constructor() { }

  ngOnInit() {
  }

}
