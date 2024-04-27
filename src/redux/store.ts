import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./features/todoSlice";
import { baseApi } from "./api/Api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todos: todoReducers,
  },
  middleware: (getDefalutMiddlewares) =>
    getDefalutMiddlewares().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
