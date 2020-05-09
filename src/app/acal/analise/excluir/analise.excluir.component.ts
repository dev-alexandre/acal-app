import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Analise } from '../analise.modelo';
import { AnaliseService } from '../analise.service';

@Component({
    selector: 'app-analise-excluir',
    templateUrl: './analise.excluir.component.html',
})

export class AnaliseExcluirComponent implements OnInit, OnDestroy {

  public analise: Analise;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AnaliseService) {
  }

  ngOnInit(): void {
    this.analise = JSON.parse(localStorage.getItem('[analise][excluir]'));
    localStorage.removeItem('[analise][excluir]');

    if (!this.analise) {
      this.voltar();
    }

  }

  ngOnDestroy(): void {
    localStorage.removeItem('[analise][excluir]');
  }

  public excluir(): void {
    this.service
      .deletarPorReferencia(this.analise.referencia)
        .subscribe(
          (response) => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
        (response) => {}
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
