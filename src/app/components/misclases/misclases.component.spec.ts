import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisclasesComponent } from './misclases.component';

describe('MisclasesComponent', () => {
  let component: MisclasesComponent;
  let fixture: ComponentFixture<MisclasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisclasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
