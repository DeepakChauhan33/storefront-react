import * as actions from '../Action/actionType';

export const initState = {

  isLogin: false,

  products:[],
}



const reducer = (state = initState, action) => {

  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };

      case actions.GET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        }

    default:
      return state;
  }
};

export default reducer;