import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

type AddItemsProps = {
  name: string;
  type: "Donuts" | "Burger" | "Smothie" | "PanCake" | "Pizza";
  amount: Double;
  count: number;
};

interface itemState {
  addItem: AddItemsProps[];
}

const initialState: itemState = {
  addItem: [],
};

const itemsSlice = createSlice({
  name: "addItems",
  initialState,
  reducers: {
    addItemIfNotExist: (state, { payload }: PayloadAction<AddItemsProps>) => {
      const exist = state.addItem.filter(
        (e) => e.name === payload.name && e.type == payload.type
      );
      if (!exist.length)
        state.addItem.push({
          name: payload.name,
          type: payload.type,
          amount: payload.amount,
          count: payload.count,
        });
    },
    deleteItem: (state, { payload }: PayloadAction<AddItemsProps>) => {
      state.addItem = state.addItem.filter(
        (e) => !(e.type === payload.type && e.name === payload.name)
      );
    },
    increment: (state, { payload }: PayloadAction<AddItemsProps>) => {
      state.addItem.find((e) => {
        if (e.name === payload.name && e.type == payload.type) e.count += 1;
      });
    },
    decrement: (state, { payload }: PayloadAction<AddItemsProps>) => {
      state.addItem.find((e) => {
        if (e.name === payload.name && e.type == payload.type)
          if (e.count > 1) e.count -= 1;
      });
    },
  },
});

export const { addItemIfNotExist, deleteItem, increment, decrement } = itemsSlice.actions;
export default itemsSlice.reducer;
