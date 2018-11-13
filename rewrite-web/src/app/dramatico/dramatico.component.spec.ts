import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaticoComponent } from './dramatico.component';

describe('DramaticoComponent', () => {
  let component: DramaticoComponent;
  let fixture: ComponentFixture<DramaticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
