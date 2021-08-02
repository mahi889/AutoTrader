import { createAction, props } from '@ngrx/store';

export const SET_CURRENT_AUTHENTICATED_USER = '[AUTH] SET_CURRENT_AUTHENTICATED_USER';

export const setCurrentAuthenticatedUserAction = createAction(
  SET_CURRENT_AUTHENTICATED_USER,
  props<{ payload: { currentAuthenticatedUser: any | undefined } }>()
);

export const SET_REDIRECT_URL = '[AUTH] SET_REDIRECT_URL';

export const setRedirectUrlAction = createAction(
  SET_REDIRECT_URL,
  props<{ payload: { redirectUrl: string | undefined } }>()
);
