import { Msx1Page } from './app.po';

describe('msx1 App', function() {
  let page: Msx1Page;

  beforeEach(() => {
    page = new Msx1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
