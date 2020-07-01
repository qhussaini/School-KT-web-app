import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuptabsComponent } from './signuptabs.component';

describe('SignuptabsComponent', () => {
  let component: SignuptabsComponent;
  let fixture: ComponentFixture<SignuptabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuptabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuptabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
