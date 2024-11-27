import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormDialogComponent } from './task-form-dialog.component';

describe('TaskFormDialogComponent', () => {
  let component: TaskFormDialogComponent;
  let fixture: ComponentFixture<TaskFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormDialogComponent]
    });
    fixture = TestBed.createComponent(TaskFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
