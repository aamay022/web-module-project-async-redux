import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, DISPLAY_BEERS } from '../actions/actions';

const initialState = {
    beers: [],
    isFetching: false,
    error: '',
    displayBeers: false
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_START):
        return({
          ...state,
          beers: [],
          isFetching:true,
          error:''
        });
      case(FETCH_SUCCESS):
        return({
          ...state,
          beers: action.payload,
          isFetching: false,
          error: ''
        });
      case(FETCH_ERROR):
        return({
          ...state,
          beers:[],
          isFetching: false,
          error: action.payload
        })
        case(DISPLAY_BEERS):
        return({
            ...state,
            displayBeers: !state.displayBeers
        })
      default:
        return state;
    }
  };