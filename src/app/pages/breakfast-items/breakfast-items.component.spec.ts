import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastItemsComponent } from './breakfast-items.component';

describe('BreakfastItemsComponent', () => {
  let component: BreakfastItemsComponent;
  let fixture: ComponentFixture<BreakfastItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakfastItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakfastItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
