import { browser, by, element, ElementFinder } from 'protractor';


export class ListPage {
  elementFinder: ElementFinder;

  navigateTo() {
    return browser.get('/projects').then(response => {
      this.elementFinder = element(by.css('app-root router-outlet + ng-component'));
      return response;
    });
  }

  getTitle() {
    return this.elementFinder.element(by.css('.row:first-child .col-8 .mat-display-2')).getText();
  }

  getProjects() {
    return this.elementFinder.all(by.css('.row:last-child .col-xs-12.col-sm-6.col-md-4'));
  }


  doAdd() {
    return this.elementFinder.element(by.css('.row:first-child .col-4 a')).click();
  }

  isOnPageAddProject() {
    return browser.getCurrentUrl().then(url => url.endsWith('/projects/creating'));
  }
}
