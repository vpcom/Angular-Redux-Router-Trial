
import { Action } from '@ngrx/store';


export interface SecondPageState {
    counter2: number;
  }
  
// TODO: make an enum
export const INCREMENT2 = 'INCREMENT2';
export const DECREMENT2 = 'DECREMENT2';
export const RESET2 = 'RESET2';

export function counter2Reducer(counter2: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT2:
      return counter2 + 1;

    case DECREMENT2:
      return counter2 - 1;

    case RESET2:
      return 0;

    default:
      return counter2;
  }
}
