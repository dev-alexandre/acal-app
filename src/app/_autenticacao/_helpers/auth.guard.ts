import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacaoService } from '../../_autenticacao/service/autenticacao.service';
import { Funcao } from '../modelo/_index';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private service: AutenticacaoService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.service.currentUserValue;

      if (currentUser) {

        if (route.data.roles && this.isPossuiAutorizacao(route.data.roles, currentUser.funcoes)) {
          this.router.navigate(['/']);
          return false;
        }

        return true;
      }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }

  private isPossuiAutorizacao(autorizacaoRequerida: FuncaoEnum[], credencias: Funcao[]):boolean{

    autorizacaoRequerida.forEach(autorizacao => {
      credencias.forEach(credencial => {
        if (autorizacao === credencial.nome){
          return true;
        }
      });
    });

    return false;
  }

}
