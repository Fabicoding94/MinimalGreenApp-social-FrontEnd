import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDietComponent } from './save-diet.component';

describe('SaveDietComponent', () => {
  let component: SaveDietComponent;
  let fixture: ComponentFixture<SaveDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
