import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroTrash,
  heroCheck,
  heroPencilSquare,
} from '@ng-icons/heroicons/outline';
import { ionSaveOutline } from '@ng-icons/ionicons';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({
      heroTrash,
      heroCheck,
      heroPencilSquare,
      ionSaveOutline,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
