import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FullCalendarModule } from 'ng-fullcalendar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxGalleryModule } from 'ngx-gallery';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './_autenticacao/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_autenticacao/_helpers/error.interceptor';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({

  declarations:
  [
    AppComponent
  ],

  imports:
  [
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRouting,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RichTextEditorAllModule,
    FullCalendarModule,
    NgMultiSelectDropDownModule.forRoot(),
    LeafletModule.forRoot(),
    NgxGalleryModule,
    HttpClientModule,
  ],

  providers:
  [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],

  bootstrap:
  [
    AppComponent
  ]
})

export class AppModule { }
