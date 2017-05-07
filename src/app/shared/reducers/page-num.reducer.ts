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

import { Action } from '@ngrx/store';

export const GET_PAGE = 'GET_PAGE';
export const SET_PAGE = 'SET_PAGE';

export const pageNum = (state = 0, action: Action) => {
  switch (action.type) {
    case GET_PAGE:
      return state;
    case SET_PAGE:
      state = action.payload;
      return state;
    default:
      return state;
  }
};