import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { UserNavComponent } from './shared/components/user-nav/user-nav.component';
import { CardComponent } from './shared/components/card/card.component';
import { PackageCardComponent } from './shared/components/packageCard/package-card.component';
import { AppChatGroupCardComponent  } from './shared/components/chat-group/chat-group.component';
import { ReviewCardComponent } from  './shared/components/review-card/review-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserNavComponent,
    CardComponent,
    PackageCardComponent,
    AppChatGroupCardComponent,
    ReviewCardComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
