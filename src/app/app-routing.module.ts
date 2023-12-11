import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HistoricComponent } from './components/egressos/historic/historic.component';
import { EgressosComponent } from './components/egressos/egressos.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'egressos',
    component: EgressosComponent,
    children: [{ path: 'historic', component: HistoricComponent }
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
