import { Injectable } from '@angular/core';
import { Alunos } from './alunos/alunos.module'
@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }


  aluno: Alunos = {
    nome: "Luiz Gustavo",
    idade: 24,
    RA: 118118409
  }

  async getAluno() {
    return await this.aluno;
  }
}
