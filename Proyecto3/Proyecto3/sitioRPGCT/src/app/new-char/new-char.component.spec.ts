import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharComponent } from './new-char.component';

describe('NewCharComponent', () => {
  let component: NewCharComponent;
  let fixture: ComponentFixture<NewCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
