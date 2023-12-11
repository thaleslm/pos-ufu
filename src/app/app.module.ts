import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoricComponent } from './components/egressos/historic/historic.component';
import { EgressosComponent } from './components/egressos/egressos.component';
import { HeaderComponent } from './components/egressos/header/header.component';

@NgModule({
  declarations: [AppComponent, MainComponent, HistoricComponent, EgressosComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
