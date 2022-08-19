import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup | any;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno | undefined;
  public textSimple: string = '';

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 3222321},
    { id: 2, nome:'Paula', sobrenome: 'Isabela', telefone: 322244},
    { id: 3, nome:'Laura', sobrenome: 'Antonia', telefone: 322255 }
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = undefined;
  }


}
