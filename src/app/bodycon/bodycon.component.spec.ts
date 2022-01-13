import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyconComponent } from './bodycon.component';

describe('BodyconComponent', () => {
  let component: BodyconComponent;
  let fixture: ComponentFixture<BodyconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
