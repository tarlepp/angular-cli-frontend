import { FoobarPage } from './app.po';

describe('foobar App', () => {
  let page: FoobarPage;

  beforeEach(() => {
    page = new FoobarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
