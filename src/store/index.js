import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import postsReducer from "./posts/slice";
import { API_ENDPOINTS } from "../services/endpoint";
import { toast } from "sonner";

const syncWithDatabase = (store) => (next) => (action) => {
  const { type, payload } = action;

  next(action);

  if (type === "posts/createPost") {
    const { options } = payload;

    fetch(`${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.POST}`, {
      ...options,

      method: "PUT",
    });
  }

  if (type === "posts/modifyPostById") {
    const { id, options } = payload;

    fetch(`${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.POST}/${id}`, {
      ...options,

      method: "PATCH",
    });
  }

  if (type === "posts/deletePostsById") {
    const { id } = payload;

    fetch(`${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.POST}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`Post ${payload} eliminado correctamente`);
        }
        throw new Error("Error al eliminar el Post");
      })
      .catch((err) => {
        toast.error(`Error deleting post ${id}`);
        /* if (userToRemove) store.dispatch(rollbackUser(userToRemove))
      console.log(err) */
        console.log("error");
      });
  }
};

export const store = configureStore({
  reducer: { users: usersReducer, posts: postsReducer },
  middleware: [],
});
