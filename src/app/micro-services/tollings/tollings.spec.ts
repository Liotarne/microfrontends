import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tollings } from './tollings';

describe('Tollings', () => {
  let component: Tollings;
  let fixture: ComponentFixture<Tollings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tollings],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tollings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
