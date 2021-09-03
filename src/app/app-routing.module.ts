import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainComponent } from './components/blockchain/blockchain.component';

const routes: Routes = [
  {path : 'blockchain', component : BlockchainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
