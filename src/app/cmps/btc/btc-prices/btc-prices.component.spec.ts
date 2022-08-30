import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcPricesComponent } from './btc-prices.component';

describe('BtcPricesComponent', () => {
  let component: BtcPricesComponent;
  let fixture: ComponentFixture<BtcPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcPricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtcPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
