import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationControlComponentComponent } from './simulation-control-component.component';

describe('SimulationControlComponentComponent', () => {
  let component: SimulationControlComponentComponent;
  let fixture: ComponentFixture<SimulationControlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationControlComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimulationControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
