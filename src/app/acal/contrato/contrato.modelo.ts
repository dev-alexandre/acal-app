import { Numero } from './numero.modelo';
import { Matricula } from '../matricula/matricula.modelo';
import { Hidrometro } from '../analise/hidrometro/hidrometro.modelo';
import { GrupoConsumo } from '../grupo-consumo/grupo-consumo.modelo';
import { Cliente } from '../cliente/cliente.modelo';
import { AE } from '../base/AE';

export class Contrato extends AE {

  dataCriacao: Date;
  nomeFantasia: string;
  numero: Numero;
  valor: number;
  grupoConsumo: GrupoConsumo;
  cliente: Cliente;
  matricula: Matricula;
  matriculaCorrespondencia: Matricula;
  hidrometro?: Hidrometro;
  contratoConsideradoEleicao: boolean;

}
