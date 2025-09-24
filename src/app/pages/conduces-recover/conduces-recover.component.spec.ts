import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducesRecoverComponent } from './conduces-recover.component';

describe('ConducesRecoverComponent', () => {
  let component: ConducesRecoverComponent;
  let fixture: ComponentFixture<ConducesRecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConducesRecoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConducesRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
