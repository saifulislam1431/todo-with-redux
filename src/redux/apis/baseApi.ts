import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const todoApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => `/api/v1/all-todo`
        }),
    }),
})

export const {useGetTodosQuery} = todoApi