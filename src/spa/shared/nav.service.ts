import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

@Injectable()
export class NavService {
  constructor(public app: App) {
    if (!app) {
      throw 'This service must used inside App';
    }
  }
  getRootNav(id?: string) {
    const navs = (<any>this.app).getRootNavs();
    const activeNavs = (<any>this.app).getActiveNavs(id);
    if (navs && Array.isArray(navs) && navs.length > 0) {
      return navs[0];
    } else if (activeNavs && Array.isArray(activeNavs) && activeNavs.length > 0) {
      let nav = activeNavs[0];
      while (nav.parent) {
        nav = nav.parent;
      }
      return nav;
    }
    return null;
  }
}