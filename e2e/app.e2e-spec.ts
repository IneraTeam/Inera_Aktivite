import { IneraAktivitePage } from './app.po';

describe('inera-aktivite App', function() {
  let page: IneraAktivitePage;

  beforeEach(() => {
    page = new IneraAktivitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
