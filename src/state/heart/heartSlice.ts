import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type heartProps = {
  name: string;
  type: string;
  hearted: boolean;
};

interface heartStte {
  heart: heartProps[];
}

const initialState: heartStte = {
  heart: [],
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    deleteOrAddObject: (state, { payload }: PayloadAction<heartProps>) => {
      const exist = state.heart.filter(
        (e) => e.name === payload.name && e.type == payload.type
      );
      if (exist.length > 0) {
        state.heart = state.heart.filter(
          (e) => !(e.name === payload.name && e.type == payload.type)
        );
      } else state.heart.push(payload);
    },
  },
});

export const { deleteOrAddObject } = heartSlice.actions;
export default heartSlice.reducer;
