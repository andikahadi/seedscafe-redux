import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDineModalOpen: true,
  isOrderModalOpen: false,
  fullMenu: [],
  mode: "dark",
  isTakeAway: false,
  category: "All Day Breakfast",
  dish: null,
  order: [],
  page: 1,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setFullMenu: (state, action) => {
      state.fullMenu = action.payload.fullMenu;
    },
    dineModalOnOpen: (state) => {
      state.isDineModalOpen = true;
    },
    dineModalOnClose: (state) => {
      state.isDineModalOpen = false;
    },
    orderModalOnOpen: (state) => {
      state.isOrderModalOpen = true;
    },
    orderModalOnClose: (state) => {
      state.isOrderModalOpen = false;
    },
    setTakeAway: (state) => {
      state.isTakeAway = true;
    },
    setDineIn: (state, action) => {
      state.isTakeAway = false;
    },
    setCategory: (state, action) => {
      state.category = action.payload.category;
    },
    setDish: (state, action) => {
      state.dish = action.payload.dish;
    },
    setOrder: (state, action) => {
      state.order = action.payload.order;
    },
    onNextPage: (state) => {
      state.page = state.page + 1;
    },
    onBackPage: (state) => {
      if (state.page > 1) {
        state.page = state.page - 1;
      }
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const {
  setFullMenu,
  setMode,
  dineModalOnClose,
  dineModalOnOpen,
  orderModalOnClose,
  orderModalOnOpen,
  setTakeAway,
  setDineIn,
  setCategory,
  setDish,
  setOrder,
  onNextPage,
  onBackPage,
  setPage,
} = authSlice.actions;

export default authSlice.reducer;
