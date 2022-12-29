import { EngineListComponent } from './engine-list/engine-list.component';
import { NewEngineComponent } from './new-engine/new-engine.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'engine-list', pathMatch: 'full' },
  { path: 'new-engine', component: NewEngineComponent },
  { path: 'engine-list', component: EngineListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
