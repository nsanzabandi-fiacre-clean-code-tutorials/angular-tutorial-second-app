import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEditionComponent } from './device-edition.component';

describe('DeviceEditionComponent', () => {
  let component: DeviceEditionComponent;
  let fixture: ComponentFixture<DeviceEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
