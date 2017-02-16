/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActdetailComponent } from './actdetail.component';

describe('ActdetailComponent', () => {
  let component: ActdetailComponent;
  let fixture: ComponentFixture<ActdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
