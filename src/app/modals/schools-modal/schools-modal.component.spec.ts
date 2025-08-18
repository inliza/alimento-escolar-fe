import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsModalComponent } from './schools-modal.component';

describe('SchoolsModalComponent', () => {
  let component: SchoolsModalComponent;
  let fixture: ComponentFixture<SchoolsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
