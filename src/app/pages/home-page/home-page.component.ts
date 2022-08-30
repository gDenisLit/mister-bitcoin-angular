import { Component, OnInit } from '@angular/core'
import { ChartConfiguration, ChartOptions } from 'chart.js'
import { Subscription } from 'rxjs'
import { BtcPrices } from 'src/app/models/btc-prices.model'
import { Transfer } from 'src/app/models/trasfer.model'
import { User } from 'src/app/models/user-model'
import { BtcService } from 'src/app/services/bitcoin/btc.service'
import { ChartOptionsService } from 'src/app/services/chart/chart-options.service'
import { UserService } from 'src/app/services/user/user-service.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public userService: UserService,
    public btcService: BtcService,
    public chartService: ChartOptionsService
  ) { }

  loggedInUser!: User
  subscription!: Subscription
  lastMoves!: Transfer[]
  chartData!: ChartConfiguration<'line'>['data']
  chartOptions!: ChartOptions<'line'>
  priceData!: BtcPrices[]

  ngOnInit(): void {
    this.userService.getLoggedinUser()
    this.subscription = this.userService.loggedInUser$.subscribe(loggedInUser => {
      this.loggedInUser = loggedInUser
    })
    this.lastMoves = this.loggedInUser.moves.slice(0, 3)
    this.btcService.getOhlcData().subscribe(res => {
      this.chartData = this.btcService.prepChartData(res)
    })
    this.chartOptions = this.chartService.btcDailyOptions()
    this.btcService.getPriceData().subscribe(res => {
      this.priceData = this.btcService.prepPriceData(res)
    })
  }

  OnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
