import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DateTimeService } from './date-time.service';

describe('DateTimeService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: DateTimeService = TestBed.get(DateTimeService);

    expect(service).toBeTruthy();
  });
});
