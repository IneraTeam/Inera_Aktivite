/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActhumbComponent } from './acthumb.component';

describe('ActhumbComponent', () => {
  let component: ActhumbComponent;
  let fixture: ComponentFixture<ActhumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActhumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActhumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
