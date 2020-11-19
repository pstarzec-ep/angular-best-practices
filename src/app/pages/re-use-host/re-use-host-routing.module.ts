import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReUseHostComponent } from 'src/app/pages/re-use-host/re-use-host.component';


const routes: Routes = [
  { path: '', component: ReUseHostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReUseHostRoutingModule {}
