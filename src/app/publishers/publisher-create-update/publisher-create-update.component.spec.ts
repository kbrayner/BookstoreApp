import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherCreateUpdateComponent } from './publisher-create-update.component';

describe('PublisherCreateUpdateComponent', () => {
  let component: PublisherCreateUpdateComponent;
  let fixture: ComponentFixture<PublisherCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
