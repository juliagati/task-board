import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicktListComponent } from './tickt-list.component';

describe('TicktListComponent', () => {
  let component: TicktListComponent;
  let fixture: ComponentFixture<TicktListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicktListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicktListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
