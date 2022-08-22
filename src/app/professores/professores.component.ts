import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public professorForm: FormGroup | any;
  public titulo = 'Professores';
  public professorSelecionado: Professor | undefined;

  public professores = [
    { id: 1, nome: 'David', disciplina: 'matemática' },
    { id: 2, nome: 'Lucas', disciplina: 'física'},
    { id: 3, nome: 'Elton', disciplina: 'português'},
    { id: 4, nome: 'Lincoln', disciplina: 'inglês'  },
    { id: 5, nome: 'Matheus', disciplina: 'programação'},

  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required],
    })
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }


  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);

  }

  voltar(){
    this.professorSelecionado = undefined;
  }



}
