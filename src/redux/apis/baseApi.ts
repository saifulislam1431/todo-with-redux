import { TTodo } from "@/Types/todo.data.type";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const todoApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes:["todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (priority) => ({
                url: `/api/v1/all-todo?priority=${priority}`,
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
        }),
        updateStatus: builder.mutation({
            query: (data) => ({
                url: `/api/v1/status-change-todo/${data?.id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags:["todo"]
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/api/v1/delete-todo/${id}`,
                method: "DELETE"
            }),
            invalidatesTags:["todo"]
        }),
    }),
})

export const {useGetTodosQuery, useAddTodoMutation, useUpdateStatusMutation, useDeleteTodoMutation} = todoApi