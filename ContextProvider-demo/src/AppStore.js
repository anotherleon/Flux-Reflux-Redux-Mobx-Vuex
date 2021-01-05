export const initialState = {
  theme: 'light',
};

const sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t));

export const reducer = (state, payload) => {
  switch (payload.type) {
    case 'changeTheme':
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

const changeTheme = async (dispatch, {theme}) => {
  await sleep(1000 * 1);

  dispatch({type: 'changeTheme', theme});
};

const appStore = {
  changeTheme,
};

export default appStore;
