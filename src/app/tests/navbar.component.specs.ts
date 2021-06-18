import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Navbar } from '../navbar/navbar.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Navbar],
    }).compileComponents();
  });

  it(`Initialization of array works`, () => {
    const fixture = TestBed.createComponent(Navbar);
    const app = fixture.componentInstance;
    app.firstName = 'Are you threatening me, Master jedi?';
    app.lastName = 'The senate will decide your fate.';
    app.phoneNumber = 'I AM the senate!';
    app.email = ' Not yet.';
    app.address = " It's treason, then...";

    app.onAdd();

    expect((app.firstName = ''));
  });
});
