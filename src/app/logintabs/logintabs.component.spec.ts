import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintabsComponent } from './logintabs.component';

describe('LogintabsComponent', () => {
  let component: LogintabsComponent;
  let fixture: ComponentFixture<LogintabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
