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

/**
 * Reducer to get and set a page number into a reactive storage built with a
 * library called `ng-rx store`. You can add other reducers to save data into a singleton in-memory storage between different pages.
 * Its extremely powerful, so I suggest to check the official documentation on Github of `ng-rx store`.
 */

import { Action } from '@ngrx/store';

export const GET_PAGE = 'GET_PAGE';
export const SET_PAGE = 'SET_PAGE';

export function pageNum(state = 0, action: Action) {
  switch (action.type) {
    case GET_PAGE:
      return state;
    case SET_PAGE:
      state = action.payload;
      return state;
    default:
      return state;
  }
}