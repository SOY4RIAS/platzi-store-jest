import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('should getData', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '1234' }));

    getData('https://google.com').then((res) => {
      expect(res.data).toEqual('1234');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
