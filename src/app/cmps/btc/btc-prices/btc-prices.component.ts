import { Component, Input} from '@angular/core'
import { BtcPrices } from 'src/app/models/btc-prices.model'

@Component({
  selector: 'btc-prices',
  templateUrl: './btc-prices.component.html',
  styleUrls: ['./btc-prices.component.scss']
})
export class BtcPricesComponent {

  @Input() priceData!: BtcPrices[]
  
}
