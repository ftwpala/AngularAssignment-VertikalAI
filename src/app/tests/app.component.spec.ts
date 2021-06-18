import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { MyCounterComponent } from '../my-contact/contact-list.component';
import { Navbar } from '../navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MyCounterComponent, Navbar],
    }).compileComponents();
  });

  it('should add a new contact', () => {
    const contacts = TestBed.createComponent(MyCounterComponent);
    const navbar = TestBed.createComponent(Navbar);
    const navbarApp = navbar.componentInstance;

    navbarApp.firstName = 'Are you threatening me, Master jedi?';
    navbarApp.lastName = 'The senate will decide your fate.';
    navbarApp.phoneNumber = 'I AM the senate!';
    navbarApp.email = ' Not yet.';
    navbarApp.address = " It's treason, then...";
    navbarApp.onAdd();
    contacts.detectChanges();
    const compiled = contacts.nativeElement;
    expect(compiled.querySelector('mat-panel-title').textContent).toContain(
      'Are you threatening me, Master jedi?'
    );
  });
});
