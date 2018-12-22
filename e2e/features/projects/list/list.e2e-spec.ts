import { ListPage } from './list.po';


describe('List of project', () => {
  let page: ListPage;


  beforeEach(() => {
    page = new ListPage();
    page.navigateTo()
  });

  it('should display the page title', () => {
    expect(page.getTitle()).toEqual('Projets');
  });

  it('should display 5 items', () => {
    // expect(page.getProjects()).toEqual(5);
  });

  it('should navigate to `Ajouter un nouveau projet` page', () => {
    page.doAdd();
    expect(page.isOnPageAddProject()).toEqual(true);
  });
});
