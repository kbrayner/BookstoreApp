import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterCreateUpdateComponent } from './writer-create-update.component';

describe('WriterCreateUpdateComponent', () => {
  let component: WriterCreateUpdateComponent;
  let fixture: ComponentFixture<WriterCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
