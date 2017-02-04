/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuardedComponent } from './guarded.component';

describe('GuardedComponent', () => {
  let component: GuardedComponent;
  let fixture: ComponentFixture<GuardedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
