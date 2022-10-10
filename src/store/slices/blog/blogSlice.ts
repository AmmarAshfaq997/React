import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
import { PostItem } from "../../../types";

const blogAdapter = createEntityAdapter();

const initialState = blogAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPostsById: builder.query({
      query: (id) => `/users/${id}/posts`,
      transformResponse: (responseData: PostItem[]) => {
        const loadedPosts = responseData;
        return blogAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result: any, error, arg) => [
        { type: "Blog", id: "LIST" },
        ...result.ids.map((id: any) => ({ type: "Blog", id })),
      ],
    }),
    updatePost: builder.mutation({
      query: (initialState) => ({
        url: `/posts/${initialState.id}`,
        method: "PUT",
        body: {
          ...initialState,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Blog", id: arg.id }],
    }),
  }),
});

export const { useGetPostsByIdQuery, useUpdatePostMutation } = extendedApiSlice;
