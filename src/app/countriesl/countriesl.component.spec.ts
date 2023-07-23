import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieslComponent } from './countriesl.component';

describe('CountrieslComponent', () => {
  let component: CountrieslComponent;
  let fixture: ComponentFixture<CountrieslComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrieslComponent]
    });
    fixture = TestBed.createComponent(CountrieslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
