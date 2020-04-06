import { PizzaTypes, ToppingInterface } from './types';

interface PizzaSizeInterface {
  crust: number | null;
  size: number;
  totalValue: number;
}

interface SetPizzaSizeReturn {
  type: string;
  payload: PizzaSizeInterface;
}

interface PizzaToppingsInterface {
  totalValue: number;
  selectedToppings: [] | ToppingInterface[];
}

interface SetPizzaToppingsReturn {
  type: string;
  payload: PizzaToppingsInterface;
}

const setPizzaSize = (payload: PizzaSizeInterface): SetPizzaSizeReturn => ({
  type: PizzaTypes.SET_PIZZA_SIZE,
  payload,
});

const setPizzaToppings = (
  payload: PizzaToppingsInterface,
): SetPizzaToppingsReturn => ({
  type: PizzaTypes.SET_PIZZA_TOPPINGS,
  payload,
});

const PizzaActions = { setPizzaSize, setPizzaToppings };

export default PizzaActions;
