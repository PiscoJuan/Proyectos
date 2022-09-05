import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharComponent } from './list-char.component';

describe('ListCharComponent', () => {
  let component: ListCharComponent;
  let fixture: ComponentFixture<ListCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
