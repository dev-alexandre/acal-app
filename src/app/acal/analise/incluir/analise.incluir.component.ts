import { MesService } from './../../../pacotes/servico/mes.service';
import { ParametroService } from './../../../pacotes/servico/parametro.service';
import { Component, OnInit } from '@angular/core';
import { Parametro, Analise, Referencia, Mes, Coleta } from '@app/pacotes/modelo/_index';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AnaliseService } from '@app/pacotes/servico/_index';

@Component({
    selector: 'app-analise-incluir',
    templateUrl: './analise.incluir.component.html',
})

export class AnaliseIncluirComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;
  public analise: Analise;

  public meses: Mes [];
  public parametros: Parametro [];
  public anos: string[];

  public coletasArray: Coleta[];
  public items: FormArray;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AnaliseService,
    public parametroService: ParametroService,
    private fb: FormBuilder,
    public mesService: MesService
    ) {

  }

  ngOnInit(): void {
    this.analise = new Analise();
    this.analise.referencia.ano = (new Date()).getFullYear().toString();
    this.analise.referencia.mes = this.mesService.getAtual();
    this.iniciarListas();
    this.formulario();
  }

  public formulario() {
    this.form = new FormGroup(
      {
        referencia: this.fb.group({
          mes: [this.analise.referencia.mes, Validators.required],
          ano: [this.analise.referencia.ano, Validators.required]
        }),

        coletas: this.fb.array([]),

      }
    );
    this.buildColetas();
  }

  public iniciarListas(): void {
    this.meses = this.mesService.listar();

    this.anos = [];
    for (let x = -5; x <= 5 ; x++) {
      this.anos.push( ((new Date()).getFullYear() + x).toString());
    }
  }


  public onSubmit(): void {

    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    this.service.salvar(
      this.form.value)
      .subscribe(
        () => {
          this.voltar();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private buildColetas() {

    this.coletasArray = [];
    this.parametroService.listarTodos()
      .subscribe(
        (parametros: Parametro[]) => {
          this.parametros = parametros;

          this.parametros.forEach(p => {
            this.coletasArray.push(new Coleta(p, '10', '10', '10'));
            this.buildColeta(new Coleta(p, '10', '10', '10'));
            }
          );
      }
    );
  }

  private buildColeta(coleta: Coleta) {
    this.items = this.form.get('coletas') as FormArray;

    this.items.push(
      this.fb.group({

        parametro: this.fb.group({
          nome: coleta.parametro.nome
        }),

        exigido: [coleta.analisado, Validators.required],
        analisado: [coleta.analisado, Validators.required],
        conforme:  [coleta.exigido, Validators.required],
      })
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  get coletas(): FormArray {
    return this.form.get('coletas') as FormArray;
  }

  public getValidity(i: number){
    return (<FormArray>this.form.get('coletas')).controls[i];
  }

}
