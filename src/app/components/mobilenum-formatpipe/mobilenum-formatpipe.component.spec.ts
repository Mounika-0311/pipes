import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilenumFormatpipeComponent } from './mobilenum-formatpipe.component';

describe('MobilenumFormatpipeComponent', () => {
  let component: MobilenumFormatpipeComponent;
  let fixture: ComponentFixture<MobilenumFormatpipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilenumFormatpipeComponent]
    });
    fixture = TestBed.createComponent(MobilenumFormatpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
