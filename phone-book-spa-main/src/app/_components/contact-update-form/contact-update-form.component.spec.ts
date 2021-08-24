import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUpdateFormComponent } from './contact-update-form.component';

describe('ContactUpdateFormComponent', () => {
  let component: ContactUpdateFormComponent;
  let fixture: ComponentFixture<ContactUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
