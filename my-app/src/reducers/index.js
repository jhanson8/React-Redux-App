const initialState = {
  isLoading: false,
  brewery: null,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_BREWERY_START':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        brewery: action.payload
      };
    default:
      return state;
  }
};
