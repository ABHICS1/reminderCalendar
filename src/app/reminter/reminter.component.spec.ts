import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminterComponent } from './reminter.component';

describe('ReminterComponent', () => {
  let component: ReminterComponent;
  let fixture: ComponentFixture<ReminterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
