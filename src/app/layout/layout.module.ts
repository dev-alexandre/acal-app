import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AutenticacaoModule } from '../_autenticacao/autenticacao.module';
import { TableComponent } from '@app/biblioteca/table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:
  [
    CommonModule,
    NgbModule,
    RouterModule,
    AutenticacaoModule,
    FormsModule,
  ],

  declarations:
  [
    HeaderComponent,
    SidebarComponent,
    PageLoaderComponent,
    TableComponent,
  ],

  exports:
  [
    HeaderComponent,
    SidebarComponent,
    PageLoaderComponent,
    TableComponent
  ]

})

export class LayoutModule { }
