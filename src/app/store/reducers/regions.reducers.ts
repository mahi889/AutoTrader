import { Action, createReducer, on } from '@ngrx/store';
import { Region } from '../../../API';
import * as RegionsActions from '../actions/regions.actions';

export interface RegionsState {
  regions: Region[] | undefined;
}

export const initialState: RegionsState = { regions: undefined };

export const regionsReducer = createReducer<RegionsState>(
  initialState,
  on(RegionsActions.loadRegionsAction, (state) => {
    return {
      ...state,
      regions: undefined,
    };
  }),
  on(RegionsActions.loadRegionsSuccessAction, (state, { payload: { regions } }) => {
    return {
      ...state,
      regions,
    };
  })
);

export function RegionsReducer(state: RegionsState | undefined, action: Action): RegionsState {
  return regionsReducer(state, action);
}

export const getRegions = (state: RegionsState) => state.regions;