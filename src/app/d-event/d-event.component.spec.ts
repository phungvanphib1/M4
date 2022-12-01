/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DEventComponent } from './d-event.component';

describe('DEventComponent', () => {
  let component: DEventComponent;
  let fixture: ComponentFixture<DEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
