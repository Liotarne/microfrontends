import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Navigation } from './navigation';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Navigation],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
