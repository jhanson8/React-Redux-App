import axios from 'axios';

export const fetchBrewery = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_BREWERY_START' });
    axios
      .get('https://api.punkapi.com/v2/beers/random')
      .then(res => {
        console.log(res.data);
        //res.data ==> activity
        dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data });
      })
      .catch(err => console.log(err));
  };
};
