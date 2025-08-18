import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducesComponent } from './conduces.component';

describe('ConducesComponent', () => {
  let component: ConducesComponent;
  let fixture: ComponentFixture<ConducesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConducesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConducesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
