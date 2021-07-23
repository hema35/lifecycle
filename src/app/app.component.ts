import {
  Component,
  SimpleChanges,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit
} from '@angular/core';
// import { from } from 'rxjs/dist/types';
import { Stock } from './stock';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  title = 'stock-market';

  public stock: Stock;

  onToggleFavorite(stock: Stock) {
    console.log('favorite for stock', stock, 'was triggered');
    this.stock.favorite = !this.stock.favorite;
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    console.log('AppComponent - On Init');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('AppComponent - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('AppComponent - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('AppComponent - Do Check');
  }

  ngOnDestroy(): void {
    console.log('AppComponent - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent - On Changes - ', changes);
  }
}
