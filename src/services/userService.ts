import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/user",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchRegistration: build.mutation<any, any>({
      query: (user): any => ({
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    fetchLogin: build.mutation<any, any>({
      query: (user): any => ({
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
