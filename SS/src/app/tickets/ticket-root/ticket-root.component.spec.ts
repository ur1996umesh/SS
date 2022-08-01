import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRootComponent } from './ticket-root.component';

describe('TicketRootComponent', () => {
  let component: TicketRootComponent;
  let fixture: ComponentFixture<TicketRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
