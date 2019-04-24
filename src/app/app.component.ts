import { GitHubService } from './git-hub.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { DateTimeService } from './date-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('login') login: ElementRef<HTMLInputElement>;
  title = 'observable-and-promise';

  constructor(
    private dateTime: DateTimeService,
    private gitHub: GitHubService
  ) {}

  async now() {
    try {
      const now = await this.dateTime.now();
      console.log(now.time);
    } catch (err) {
      console.log(err);
    }
  }

  async gitHubUser() {
    const login = this.login.nativeElement.value;
    try {
      const user = await this.gitHub.user(login);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }
}
