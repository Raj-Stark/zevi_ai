import { dataArray } from "../utils/generateFakeProducts";

export const AppReducer = (state, action) => {
  if (action.type === "SHOW_MODAL_AND_FETCH_DATA") {
    const allData = dataArray(30);

    return { ...state, isModalOpen: action.payload , allProducts:allData};
  }

  return state;
};
