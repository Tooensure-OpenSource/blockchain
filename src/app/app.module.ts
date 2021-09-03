import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockItemComponent } from './components/blockchain/block/block-list/block-item/block-item.component';
import { BlockListComponent } from './components/blockchain/block/block-list/block-list.component';
import { BlockComponent } from './components/blockchain/block/block.component';
import { BlockchainItemComponent } from './components/blockchain/blockchain-list/blockchain-item/blockchain-item.component';
import { BlockchainListComponent } from './components/blockchain/blockchain-list/blockchain-list.component';
import { BlockchainComponent } from './components/blockchain/blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    BlockchainListComponent,
    BlockchainItemComponent,
    BlockComponent,
    BlockListComponent,
    BlockItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
