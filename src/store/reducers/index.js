import * as actionType from '../actions/actionTypes';
const initialState = {
  isLoading: false,
  localId: null,
  idToken: null,
  expiresIn: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        localId: action.localId,
        idToken: action.idToken,
        expiresIn: action.expiresIn,
        error: null,
      };
    case actionType.LOGOUT_CHECKER:
      return {
        ...state,
        isLoading: false,
        localId: null,
        idToken: null,
        expiresIn: null,
      };
    case actionType.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionType.INITIALIZE:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
export default reducer;
