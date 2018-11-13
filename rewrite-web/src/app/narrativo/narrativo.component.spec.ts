import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrativoComponent } from './narrativo.component';

describe('NarrativoComponent', () => {
  let component: NarrativoComponent;
  let fixture: ComponentFixture<NarrativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
