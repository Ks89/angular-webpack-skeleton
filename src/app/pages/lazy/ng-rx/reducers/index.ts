import { Action, ActionReducer, ActionReducerFactory, combineReducers, compose, createFeatureSelector } from '@ngrx/store';
import * as fromPageNum from './page-num.reducer';

export interface PageNumState {
  pageNum: fromPageNum.State;
}

export const reducers = {
  pageNum: fromPageNum.reducer
};

export const selectPageNumState = createFeatureSelector<PageNumState>('pageNum');

// console.log all actions
export function logger(reducer: ActionReducer<PageNumState>) {
  return function(state: PageNumState, action: any) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose the root meta-reducer.
 * To add more meta-reducers, provide a custom reducer factory.
 */
export const developmentReducerFactory: ActionReducerFactory<PageNumState, Action> = compose(logger, combineReducers);