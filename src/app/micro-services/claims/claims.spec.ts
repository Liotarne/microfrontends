import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Claims } from './claims';

describe('Claims', () => {
  let component: Claims;
  let fixture: ComponentFixture<Claims>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Claims],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Claims);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
