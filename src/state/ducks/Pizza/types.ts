import { ImageSourcePropType } from 'react-native';

export interface ToppingInterface {
  name: string;
  image: ImageSourcePropType;
}

export enum PizzaTypes {
  SET_PIZZA_SIZE = 'SET_PIZZA_SIZE',
  SET_PIZZA_TOPPINGS = 'SET_PIZZA_TOPPINGS',
}

export interface PizzaState {
  size: number;
  crust: number;
  totalValue: number;
  selectedToppings: [] | ToppingInterface[];
}
