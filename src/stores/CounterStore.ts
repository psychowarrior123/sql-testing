import { createContext } from 'react';

import { action, computed, makeObservable, observable } from 'mobx';

class CounterStore {
  counter = 0;

  constructor() {
    makeObservable(this, {
      computedCounter: computed,
      counter: observable,
      increase: action,
    });
  }

  get computedCounter(): number {
    return this.counter * 2;
  }

  increase = (): void => {
    this.counter++;
  };
}

export const CounterStoreContext = createContext(new CounterStore());
