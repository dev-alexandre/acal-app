import { GrupoConsumo } from '@app/pacotes/modelo/grupo-consumo.modelo';
import { Cliente } from '@app/pacotes/modelo/cliente.modelo';
import { Matricula } from '../matricula/matricula.modelo';
import { Hidrometro } from '../analise/hidrometro/hidrometro.modelo';

export class Contrato {

  dataCriacao: Date;
  nomeFantasia: string;
  numero: string;
  valor: number;
  grupoConsumo: GrupoConsumo;
  cliente: Cliente;
  matricula: Matricula;
  matriculaCorrespondencia: Matricula;
  hidrometro?: Hidrometro;
  contratoConsideradoEleicao: boolean;

}
