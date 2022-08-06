import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixSampleComponent } from './matrix-sample.component';

describe('MatrixSampleComponent', () => {
  let component: MatrixSampleComponent;
  let fixture: ComponentFixture<MatrixSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
