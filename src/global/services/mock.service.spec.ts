import { MockedService } from './mock.service';

describe('MockedService', () => {
  let service: MockedService;

  beforeEach(() => {
    service = new MockedService();
  });

  it('#getLists return mocked data as observable', (done: DoneFn) => {
    service.getLists().subscribe((value) => {
      expect(value).toEqual([
        {
          id: 1,
          items: [],
          date: new Date(2024, 8),
          sum: 300,
        },
      ]);
      done();
    });
  });
});
