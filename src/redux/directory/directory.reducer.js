// import DirectoryActionTypes from "./directory.types";
import SECTIONS_DATA from "./sections.data";
const INITIAL_STATE = {
  sections: SECTIONS_DATA,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case DirectoryActionTypes.SHOW_SECTIONS:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export default directoryReducer;
