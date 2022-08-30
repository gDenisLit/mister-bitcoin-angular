import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ChartConfiguration } from 'chart.js'
import { BtcPrices } from 'src/app/models/btc-prices.model'

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/bitcoin/'

@Injectable({
  providedIn: 'root'
})
export class BtcService {

  constructor(private http: HttpClient) { }

  public getOhlcData() {
    const queryStr = 'market_chart?vs_currency=USD&days=700&interval=daily'
    return this.http.get(BASE_URL + queryStr)
  }

  public getPriceData() {
    return this.http.get(BASE_URL)
  }

  public prepChartData(data: any): ChartConfiguration<'line'>['data'] {
    const prices = data.prices.map((p: any) => p[1])
    const labels = data.prices.map((p: any) => {
      return _getShortData(p[0])
    })
    const datasets = [{
      data: prices,
      borderColor: ['#fff'],
      borderWidth: 1,
      lineTension: 0,
    }]
    return { labels: labels, datasets: datasets, }
  }

  public prepPriceData(data: any): BtcPrices[] {
    const market = data.market_data
    const priceData = [
      { title: 'Price', val: market.current_price.usd, },
      { title: 'Price Change', val: market.price_change_24h },
      { title: '24H High', val: market.high_24h.usd, },
      { title: '24H Low', val: market.low_24h.usd, },
    ]
    return priceData
  }
}

function _getShortData(timeStamp: number): string {
  const date = new Date(timeStamp)
  const year = date.getFullYear() - 2000
  const options: object = { month: 'short' }
  const month = new Intl.DateTimeFormat('en-US', options).format(date)
  return `${month}/${year}`
}
