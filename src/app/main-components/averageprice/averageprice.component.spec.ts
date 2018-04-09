import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragepriceComponent } from './averageprice.component';

describe('AveragepriceComponent', () => {
  let component: AveragepriceComponent;
  let fixture: ComponentFixture<AveragepriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveragepriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
