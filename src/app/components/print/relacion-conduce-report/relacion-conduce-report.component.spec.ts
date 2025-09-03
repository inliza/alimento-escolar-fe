import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionConduceReportComponent } from './relacion-conduce-report.component';

describe('RelacionConduceReportComponent', () => {
  let component: RelacionConduceReportComponent;
  let fixture: ComponentFixture<RelacionConduceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelacionConduceReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionConduceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
