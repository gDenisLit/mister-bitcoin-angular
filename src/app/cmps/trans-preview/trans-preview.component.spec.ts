import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransPreviewComponent } from './trans-preview.component';

describe('TransPreviewComponent', () => {
  let component: TransPreviewComponent;
  let fixture: ComponentFixture<TransPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
