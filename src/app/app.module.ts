import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component';
import {NoContentComponent} from './no-content/no-content.component';
import {RouterModule} from '@angular/router';
import {EthContractDeployComponent} from './eth-contract-deploy/eth-contract-deploy.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EthTransferComponent} from './eth-transfer/eth-transfer.component';
import {ViewEthContractDeployComponent} from './eth-contract-deploy/view-eth-contract-deploy.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EthContractDeployComponent,
    EthTransferComponent,
    ViewEthContractDeployComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '',      component: AboutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'eth-contract-deploy', component: EthContractDeployComponent },
      { path: 'eth-contract-deploy/:token', component: ViewEthContractDeployComponent },
      { path: 'eth-transfer', component: EthTransferComponent },
      { path: '**',    component: NoContentComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
