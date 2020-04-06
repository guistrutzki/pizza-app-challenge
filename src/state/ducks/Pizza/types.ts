export enum PizzaTypes {
  SET_PIZZA_SIZE = 'SET_PIZZA_SIZE',
}

export interface PizzaState {
  size: number;
  crust: number;
  totalValue: number;
}
