import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudoBoxComponent } from './ludo-box.component';

describe('LudoBoxComponent', () => {
  let component: LudoBoxComponent;
  let fixture: ComponentFixture<LudoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LudoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LudoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
