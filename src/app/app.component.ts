import { Component } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 0;
  timer() {
    this.counter = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  name = 'BitCoin';

  myName: string = 'Jeniffer Campos de Oliveira';
  RA: string = '0050832021036';

  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.update();
  }
}
