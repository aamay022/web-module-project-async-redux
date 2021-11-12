import axios from 'axios';

export const getBeer = ()=> {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get('https://api.punkapi.com/v2/beers')
          .then(resp=> {
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchError(err));
        });
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (beer)=> {
    return({type: FETCH_SUCCESS, payload:beer});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}

export const DISPLAY_BEERS = 'DISPLAY_BEERS'

export const displayBeers = () => {
    return({type: DISPLAY_BEERS})
}

