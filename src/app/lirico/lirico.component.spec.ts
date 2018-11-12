import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiricoComponent } from './lirico.component';

describe('LiricoComponent', () => {
  let component: LiricoComponent;
  let fixture: ComponentFixture<LiricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
