import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stranm1 } from './stranm1';

describe('Stranm1', () => {
  let component: Stranm1;
  let fixture: ComponentFixture<Stranm1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stranm1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stranm1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
