import { Component, OnInit } from '@angular/core';
import { Alunos } from './alunos.module';
import { AlunosService } from '../alunos-service.service'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: Alunos;
  constructor(private alunoService: AlunosService) { }


  async ngOnInit() {
    this.aluno = await this.alunoService.getAluno();
  }

}
