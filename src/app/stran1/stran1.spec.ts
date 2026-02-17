import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stran1 } from './stran1';

describe('Stran1', () => {
  let component: Stran1;
  let fixture: ComponentFixture<Stran1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stran1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stran1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
