import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatersComponent } from './raters.component';

describe('RatersComponent', () => {
  let component: RatersComponent;
  let fixture: ComponentFixture<RatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
