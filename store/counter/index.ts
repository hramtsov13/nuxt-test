import actions from './actions';
import getters from './getters';
import state from './state';

import { defineStore } from 'pinia';

const useCounterStore = defineStore({
  id: 'counter',
  state,
  actions,
  getters,
});

export default useCounterStore;
