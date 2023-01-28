import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodonavbarComponent } from './todonavbar.component';

describe('TodonavbarComponent', () => {
  let component: TodonavbarComponent;
  let fixture: ComponentFixture<TodonavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodonavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodonavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
