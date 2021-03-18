import * as action from './actionTypes';
import axios from 'axios';
export const loginInit = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(initialize());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCV0FcQMyUkYfVjSQxJ6HEm_u3NHK6zRns';
    if (isSignUp) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCV0FcQMyUkYfVjSQxJ6HEm_u3NHK6zRns';
    }
    axios
      .post(url, data)
      .then((response) => {
        localStorage.setItem('localId', response.data.localId);
        localStorage.setItem('idToken', response.data.idToken);
        localStorage.setItem('expiresIn', response.data.expiresIn);
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.response.data.error.message);

        dispatch(loginFailed(error.response.data.error.message));
      });
  };
};

export const loginSuccess = (data) => {
  const localId = localStorage.getItem('localId');
  const idToken = localStorage.getItem('idToken');
  const expiresIn = localStorage.getItem('expiresIn');
  return {
    type: action.LOGIN_SUCCESS,
    localId: localId,
    idToken: idToken,
    expiresIn: expiresIn,
  };
};
export const loginFailed = (error) => {
  return {
    type: action.LOGIN_FAILED,
    error,
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logoutChecker());
  };
};
export const logoutChecker = () => {
  return {
    type: action.LOGOUT_CHECKER,
  };
};
export const initialize = () => {
  return {
    type: action.INITIALIZE,
  };
};

export const addUserInit = (email, name, status, role) => {
  return (dispatch) => {
    const url =
      'https://medspeacialized-default-rtdb.firebaseio.com/users.json';
    const data = {
      email,
      name,
      status,
      role,
    };
    axios
      .post(url, data)
      .then((response) => {
        dispatch(fetchData());
      })
      .catch((error) => {
        dispatch(addUserFailed(error));
      });
  };
};

export const addUserSuccess = (payload) => {
  return {
    type: action.ADD_USER_SUCCESS,
    payload,
  };
};
export const addUserFailed = (error) => {
  return {
    type: action.ADD_USER_FAILED,
    error,
  };
};
export const updateUserInit = (email, name, status, role, id) => {
  return (dispatch) => {
    const data = {
      email,
      name,
      status,
      role,
    };
    axios
      .patch(
        `https://medspeacialized-default-rtdb.firebaseio.com/users/${id}.json`,
        data
      )
      .then((response) => {
        dispatch(fetchData());
      });
  };
};
export const fetchData = () => {
  return (dispatch) => {
    axios
      .get('https://medspeacialized-default-rtdb.firebaseio.com/users.json')
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const fetchDataSuccess = (payload) => {
  return {
    type: action.FETCH_DATA_SUCCESS,
    payload,
  };
};

export const fetchDataFailed = (error) => {
  return {
    type: action.FETCH_DATA_FAILED,
    error,
  };
};

export const deleteData = (id) => {
  return (dispatch) => {
    axios
      .delete(
        `https://medspeacialized-default-rtdb.firebaseio.com/users/${id}.json`
      )
      .then((response) => {
        dispatch(fetchData());
      });
  };
};
