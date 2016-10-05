import { PingPongPage } from './app.po';

describe('ping-pong App', function() {
  let page: PingPongPage;

  beforeEach(() => {
    page = new PingPongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
