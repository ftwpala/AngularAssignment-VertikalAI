import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './create-contacts.reducer';
import { FormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Navbar } from './navbar/navbar.component';
import { MyCounterComponent } from './my-contact/contact-list.component';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, Navbar],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forRoot({ contacts: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent, MyCounterComponent],
})
export class AppModule {}
