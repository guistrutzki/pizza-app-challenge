export enum PizzaTypes {
  SET_PIZZA_SIZE = 'SET_PIZZA_SIZE',
}

export interface PizzaState {
  size: string;
  crust: string;
  totalValue: number;
}
