import { FramwebProjectPage } from './app.po';

describe('framweb-project App', () => {
  let page: FramwebProjectPage;

  beforeEach(() => {
    page = new FramwebProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
