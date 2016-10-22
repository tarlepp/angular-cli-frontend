import { Angular2FrontendPage } from './app.po';

describe('angular2-frontend App', function() {
  let page: Angular2FrontendPage;

  beforeEach(() => {
    page = new Angular2FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
