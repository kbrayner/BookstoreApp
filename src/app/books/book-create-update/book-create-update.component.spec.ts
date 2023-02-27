import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreateUpdateComponent } from './book-create-update.component';

describe('BookCreateUpdateComponent', () => {
  let component: BookCreateUpdateComponent;
  let fixture: ComponentFixture<BookCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
