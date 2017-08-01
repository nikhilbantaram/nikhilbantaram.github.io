import { Nikhilbantaram.Github.IoPage } from './app.po';

describe('nikhilbantaram.github.io App', () => {
  let page: Nikhilbantaram.Github.IoPage;

  beforeEach(() => {
    page = new Nikhilbantaram.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
