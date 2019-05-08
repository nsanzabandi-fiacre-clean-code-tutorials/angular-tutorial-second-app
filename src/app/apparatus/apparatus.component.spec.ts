import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusComponent } from './apparatus.component';

describe('ApparatusComponent', () => {
  let component: ApparatusComponent;
  let fixture: ComponentFixture<ApparatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
