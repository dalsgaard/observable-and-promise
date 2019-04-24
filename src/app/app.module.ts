import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter.reducer';
import { AppComponent } from './app.component';
import { DateTimeService } from './date-time.service';
import { GitHubService } from './git-hub.service';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [DateTimeService, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
