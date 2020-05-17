import { ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';


@Component({
    selector: 'app-home-dashboard',
    templateUrl: './home.dashboard.component.html',
})

export class HomeDashboardComponent implements OnInit, OnDestroy {

  public distribuicaoContratos: any;
  public distribuicaoClientes: any;
  public distribuicaoBoleto: any;
  public distribuicaoOutros: any;

  constructor(
    public router: Router,
    public toast: ToastrService,
    public service: HomeService,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initContratos();
    this.initClientes();
    this.initBoleto();
    this.initOutros();
  }

  ngOnDestroy(): void {
  }

  public initContratos(): void {
    this.service.getDistribuicaoContratos().subscribe(
      (distribuicao: any) => {
        this.distribuicaoContratos = distribuicao;
      },
      (error) => {
        this.toast.show(error);
      }
    );
  }

  public initClientes(): void {

    this.service.getDistribuicaoCliente().subscribe(
      (distribuicao: any) => {
        this.distribuicaoClientes = distribuicao;
      },
      (error) => {
        this.toast.show(error);
      }
    );
  }

  public initBoleto(): void {
    this.service.getDistribuicaoBoleto().subscribe(
      (distribuicao: any) => {
        this.distribuicaoBoleto = distribuicao;
      },
      (error) => {
        this.toast.show(error);
      }
    );

  }

  public initOutros(): void {
    this.service.getDistribuicaoOutros().subscribe(
      (distribuicao: any) => {
        this.distribuicaoOutros = distribuicao;
      },
      (error) => {
        this.toast.show(error);
      }
    );

  }

}

