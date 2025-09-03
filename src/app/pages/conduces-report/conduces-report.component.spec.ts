import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducesReportComponent } from './conduces-report.component';

describe('ConducesReportComponent', () => {
  let component: ConducesReportComponent;
  let fixture: ComponentFixture<ConducesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConducesReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConducesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
