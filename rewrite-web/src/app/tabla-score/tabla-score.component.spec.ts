import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaScoreComponent } from './tabla-score.component';

describe('TablaScoreComponent', () => {
  let component: TablaScoreComponent;
  let fixture: ComponentFixture<TablaScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
