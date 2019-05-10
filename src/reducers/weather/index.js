const FETCH_BEGIN = 'weather/FETCH_BEGIN';
const FETCH_SUCCESS = 'weather/FETCH_SUCCESS';
const FETCH_FAILED = 'weather/FETCH_FAILED';

export const fetchBeginAction = () => {
  return {
    type: FETCH_BEGIN,
  }
};

export const fetchSuccessAction = (items) => {
  return {
    type: FETCH_SUCCESS,
    payload: {
      items,
    }
  }
};

export const fetchFailedAction = (error) => {
  return {
    type: FETCH_FAILED,
    payload: {
      error,
    }
  }
};

const initialState = {
  items: [],
  isLoaded: true,
  error: null,
}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEGIN: {
      const newState = { ...state }
      newState.isLoaded = true;
      newState.error = null;
      return newState;
    };
    case FETCH_SUCCESS: {
      const { payload } = action;
      const newState = { ...state };
      newState.isLoaded = false;
      newState.items = payload.items;
      return newState;
    }
    case FETCH_FAILED: {
      const { payload } = action;
      const newState = { ...state };
      newState.isLoaded = false;
      newState.error = payload.error;
      newState.items = [];
      return newState;
    }
    default: return state;
  }
}