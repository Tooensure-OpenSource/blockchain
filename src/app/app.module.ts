import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataStorageService } from './shared/data-storage.service';
import { BlockComponent } from './components/block/block.component';
import { BlockListComponent } from './components/block/block-list/block-list.component';
import { BlockItemComponent } from './components/block/block-list/block-item/block-item.component';
import { BlockService } from './components/block/block.service';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { MiningComponent } from './pages/mining/mining.component';
import { EcoinComponent } from './components/ecoin/ecoin.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    BlockListComponent,
    BlockItemComponent,
    BlockchainComponent,
    MiningComponent,
    EcoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BlockService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
