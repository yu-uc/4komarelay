export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isLogin: true,
      uid: userState.uid,
    },
  };
};
export const SERCH = "SERCH";
export const serchInAction = (userState) => {
    return {
      type: "SERCH",
      payload: {
        count: userState.count,
        genre: userState.genre,
    
      },
    };
  };

