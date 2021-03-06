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
import { Stock } from '../stock';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;
  // public stockStyles;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  // ngOnInit() {
  //   this.stocks = [new Stock('Test Stock Company', 'TSC', 75, 80),
  //   new Stock('Second Stock Company', 'SSC', 10, 20),
  //   new Stock('Last Stock Company', 'LSC', 876, 765)
  // ];
  // let diff = (this.stock.price/this.stock.previousPrice) - 1;
  // let largeChange = Math.abs(diff) > 0.01;
  // this.stockStyles = {
  //   "color" : this.stock.isPositiveChange() ? "green":"red",
  //   "font-size": largeChange ? "1.2em" : "0.4em"

  // };

  onToggleFavorite(event) {
    // console.log ('We are toggling the favorite state for this stock', index, event);
    // this.stock.favorite = !this.stock.favorite;
    this.toggleFavorite.emit(this.stock);
  }
  changeStockPrice() {
    this.stock.price += 5;
  }

  ngOnInit(): void {
    // this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    console.log('Stock Item Component - On Init');
  }

  ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('Stock Item Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
  }

  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes - ', changes);
  }
}
