import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgressosComponent } from './egressos.component';

describe('EgressosComponent', () => {
  let component: EgressosComponent;
  let fixture: ComponentFixture<EgressosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgressosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgressosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
