import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsondataComponent } from './jsondata.component';

describe('JsondataComponent', () => {
  let component: JsondataComponent;
  let fixture: ComponentFixture<JsondataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsondataComponent]
    });
    fixture = TestBed.createComponent(JsondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
