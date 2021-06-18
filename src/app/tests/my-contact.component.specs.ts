import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyCounterComponent } from '../my-contact/contact-list.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MyCounterComponent],
    }).compileComponents();
  });

  it(`Initialization of array works`, () => {
    const fixture = TestBed.createComponent(MyCounterComponent);
    const app = fixture.componentInstance;
    expect(Array.isArray(app.contacts$) && app.contacts$.length);
  });
});
