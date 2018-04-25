
import { Subject } from 'rxjs/Subject';

export function Destroy() {
  return function (target: any, key: string) {
    target[key] = new Subject();
    const oldNgOnDestroy = target.ngOnDestroy;
    target.ngOnDestroy = () => {
      if (oldNgOnDestroy) {
        oldNgOnDestroy();
      }
      target[key].next(true); // any kind of value
    }
  }
}

/**
 * DestroyWillLeave
 * @returns {(target: any, key: string) => any}
 * @constructor
 */
export function DestroyWL() {
  return function (target: any, key: string) {
    target[key] = new Subject();
    const oldViewWillLeave = target.ionViewWillLeave;
    target.ionViewWillLeave = () => {
      if (oldViewWillLeave) {
        oldViewWillLeave();
      }
      target[key].next(true); // any kind of value
    }
  }
}


/**
 * Unsubscribe an Subscription when ionViewWillLeve being called
 * @returns {(target: any, key: string) => any}
 * @constructor
 */
export function UnsubscribeBeforeLeave() {
  return function (target: any, key: string) {
    const oldViewWillLeave = target.ionViewWillLeave.bind(target);
    const ionViewWillLeave = function() {
      if (typeof oldViewWillLeave === 'function') {
        oldViewWillLeave();
      }
      if(target[key] && typeof target[key] === 'function'){
        target[key].unsubscribe(); // unsubscribe
      }
    }
    target.ionViewWillLeave = ionViewWillLeave.bind(target);
  }
}
