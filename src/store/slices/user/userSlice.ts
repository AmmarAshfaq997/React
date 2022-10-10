import { createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../../api/apiSlice";
import { User } from "../../../types";
const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      transformResponse: (responseData: User[]) => {
        return userAdapter.addOne(initialState, responseData);
      },
      providesTags: (result, error, arg) => {
        return [{ type: "User", id: arg.id }];
      },
    }),
  }),
});

export const { useGetUserByIdQuery } = extendedApiSlice;
