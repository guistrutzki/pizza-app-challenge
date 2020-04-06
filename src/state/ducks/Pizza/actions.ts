import { PizzaTypes } from './types';

interface PizzaSizeInterface {
  crust: string;
  size: string;
  totalValue: number;
}

interface SetPizzaSizeReturn {
  type: string;
  payload: PizzaSizeInterface;
}

const setPizzaSize = (payload: PizzaSizeInterface): SetPizzaSizeReturn => ({
  type: PizzaTypes.SET_PIZZA_SIZE,
  payload,
});

const PizzaActions = { setPizzaSize };

export default PizzaActions;
