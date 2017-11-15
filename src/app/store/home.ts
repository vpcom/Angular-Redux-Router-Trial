import {Action} from '@ngrx/store';


export interface HomeState {
  counter: number;
}
  

// TODO: make an enum
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


export function counterReducer(counter: number = 0, action: Action) {
    switch (action.type) {
      case INCREMENT:
        return counter + 1;
  
      case DECREMENT:
        return counter - 1;
  
      case RESET:
        return 0;
  
      default:
        return counter;
    }
  }