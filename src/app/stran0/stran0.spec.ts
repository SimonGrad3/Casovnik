import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stran0 } from './stran0';

describe('Stran0', () => {
  let component: Stran0;
  let fixture: ComponentFixture<Stran0>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stran0]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stran0);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
