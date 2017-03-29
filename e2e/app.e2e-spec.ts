import { AngularReduxObservablePage } from './app.po';

describe('angular-redux-observable App', () => {
  let page: AngularReduxObservablePage;

  beforeEach(() => {
    page = new AngularReduxObservablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
