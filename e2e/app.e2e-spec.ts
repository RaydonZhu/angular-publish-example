import { AngularPublishExamplePage } from './app.po';

describe('angular-publish-example App', function() {
  let page: AngularPublishExamplePage;

  beforeEach(() => {
    page = new AngularPublishExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
