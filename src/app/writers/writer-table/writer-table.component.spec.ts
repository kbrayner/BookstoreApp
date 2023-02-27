import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterTableComponent } from './writer-table.component';

describe('WriterTableComponent', () => {
  let component: WriterTableComponent;
  let fixture: ComponentFixture<WriterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
