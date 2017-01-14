import { AktvPage } from './app.po';

describe('aktv App', function() {
  let page: AktvPage;

  beforeEach(() => {
    page = new AktvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
