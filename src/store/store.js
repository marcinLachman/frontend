import { configureStore } from "@reduxjs/toolkit";

import hubsReducer  from "store/features/hubsSlice";

export const store = configureStore({
  reducer: {
    hubs: hubsReducer,
  },
});
