import * as actions from '../Action/actionType';

export const initState = {

  isLogin: false,
}



const reducer = (state = initState, action) => {

  switch (action.type) {
    case actions.LOGIN:
      console.log("called reducer");
      return {
        ...state,
        isLogin: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;