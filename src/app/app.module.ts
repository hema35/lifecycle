import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockItemComponent } from '../stock/stock-item/stock-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StockItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
