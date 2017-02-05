import { AngularCliFrontendPage } from './app.po';

describe('angular-cli-frontend App', function() {
  let page: AngularCliFrontendPage;

  beforeEach(() => {
    page = new AngularCliFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
