import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./feature/pcbuilder/pcbuilderSlice";
export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});
