/*
 * Copyright 2015-2017 Stefano Cappa

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromPageNum from './page-num';

export interface PageNumState {
  pageNum: fromPageNum.State;
}

export interface State extends fromRoot.State {
  auth: PageNumState;
}

export const reducers = {
  pageNum: fromPageNum.reducer
};


export const selectPageNumState = createFeatureSelector<PageNumState>('pageNum');

export const selectPageNumValState = createSelector(
  selectPageNumState,
  (state: PageNumState) => state.pageNum
);

export const getPageNum = createSelector(
  selectPageNumValState,
  fromPageNum.getPageNum
);
