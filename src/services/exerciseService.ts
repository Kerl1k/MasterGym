import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const exerciseApi = createApi({
  reducerPath: "Exercise",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/exercise",
  }),
  tagTypes: ["Exercise"],
  endpoints: (build) => ({
    exerciseAdd: build.mutation<any, any>({
      query: (exercise): any => ({
        method: "POST",
        body: exercise,
      }),
      invalidatesTags: ["Exercise"],
    }),
    exerciseFetchAll: build.query<any, any>({
      query: (): any => ({
        method: "POST",
      }),
      providesTags: ["Exercise"],
    }),
  }),
});
