import { TTodo } from "@/Types/todo.data.type";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const todoApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes:["todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: `/api/v1/all-todo`,
                method: "GET"
            }),
            providesTags:["todo"],
        }),
        addTodo: builder.mutation({
            query: (data: TTodo) => ({
                url: "/api/v1/add-todo",
                method: "POST",
                body: data
            }),
            invalidatesTags:["todo"]
        })
    }),
})

export const {useGetTodosQuery, useAddTodoMutation} = todoApi