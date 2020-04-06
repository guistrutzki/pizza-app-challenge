import { Reducer } from 'redux';
import { PizzaState, PizzaTypes } from './types';

const INITIAL_STATE: PizzaState = {
  crust: 1,
  size: 0,
  totalValue: 0,
};

const reducer: Reducer<PizzaState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PizzaTypes.SET_PIZZA_SIZE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reducer;
