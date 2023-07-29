import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Processor: {},
  Motherboard: {},
  RAM: {},
  PowerSupply: {},
  Storage: {},
  Monitor: {},
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    setProcessor: (state, action) => {
      state.Processor = action.payload;
    },
    setMotherboard: (state, action) => {
      state.Motherboard = action.payload;
    },
    setRAM: (state, action) => {
      state.RAM = action.payload;
    },
    setPowerSupply: (state, action) => {
      state.PowerSupply = action.payload;
    },
    setStorage: (state, action) => {
      state.Storage = action.payload;
    },
    setMonitor: (state, action) => {
      state.Monitor = action.payload;
    },
  },
});
export const {
  setProcessor,
  setMotherboard,
  setRAM,
  setPowerSupply,
  setStorage,
  setMonitor,
} = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
