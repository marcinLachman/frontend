import { configureStore } from "@reduxjs/toolkit";

import hubsReducer  from "store/features/hubsSlice";
import bookingReducer from "./features/bookingSlice";

export const store = configureStore({
  reducer: {
    hubs: hubsReducer,
    booking: bookingReducer,
  },
});
