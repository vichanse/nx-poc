import { async, TestBed } from '@angular/core/testing';
import { EditInputModule } from './edit-input.module';

describe('EditInputModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EditInputModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EditInputModule).toBeDefined();
  });
});
