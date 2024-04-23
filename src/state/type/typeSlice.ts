import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TypeProps = {
  selectedName: "Donuts" | "Burger" | "Smothie" | "PanCake" | "Pizza";
};

const initialState: TypeProps = {
  selectedName: "Donuts",
};

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    changeType: (state, { payload }: PayloadAction<TypeProps>) => {
      state.selectedName = payload.selectedName;
    },
  },
});

export const { changeType } = typeSlice.actions;
export default typeSlice.reducer;
