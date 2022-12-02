import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveElectricityComponent } from './save-electricity.component';

describe('SaveElectricityComponent', () => {
  let component: SaveElectricityComponent;
  let fixture: ComponentFixture<SaveElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveElectricityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
