import { Matricula } from '../matricula/matricula.modelo';
import { Hidrometro } from '../analise/hidrometro/hidrometro.modelo';
import { GrupoConsumo } from '../grupo-consumo/grupo-consumo.modelo';
import { Cliente } from '../cliente/cliente.modelo';

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
