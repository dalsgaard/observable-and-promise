import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { GitHubService, User } from './git-hub.service';

describe('GitHubService', () => {
  let httpTestingController: HttpTestingController;
  let service: GitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(GitHubService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('an existing login', () => {
    const data: User = {
      login: 'ole',
      id: 1234,
      name: 'Ole Olsen'
    };

    it('should return a user', () => {
      service.user(data.login).then(user => {
        expect(user.login).toBe(data.login);
      });
      const url = `${service.baseUrl}/${data.login}`;
      const req = httpTestingController.expectOne(url);
      req.flush(data);
    });
  });

  describe('a non-existing login', () => {
    const login = 'donotexist';

    it('should return null', () => {
      service.user(login).then(user => {
        expect(user).toBeNull();
      });

      const url = `${service.baseUrl}/${login}`;
      const req = httpTestingController.expectOne(url);
      req.flush('', { status: 404, statusText: 'Not Found' });
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
