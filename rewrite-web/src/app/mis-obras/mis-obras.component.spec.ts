import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisObrasComponent } from './mis-obras.component';

describe('MisObrasComponent', () => {
  let component: MisObrasComponent;
  let fixture: ComponentFixture<MisObrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisObrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
