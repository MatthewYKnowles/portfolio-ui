import { TestBed } from '@angular/core/testing';

import { ConnectFourService } from './connect-four.service';

describe('ConnectFourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectFourService]
    });
  });

  it('should be created', () => {
    const service: ConnectFourService = TestBed.inject(ConnectFourService);
    expect(service).toBeTruthy();
  });
});
