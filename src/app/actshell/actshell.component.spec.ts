/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActshellComponent } from './actshell.component';

describe('ActshellComponent', () => {
  let component: ActshellComponent;
  let fixture: ComponentFixture<ActshellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActshellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
