import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const AppApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints: (builder) => ({

        signUpUser: builder.mutation({
            query: (user) => ({
                url: "/user/signup",
                method: "POST",
                body: user,
            }),
        }),

    })
})

export const { useSignUpUserMutation } = AppApi;
export default AppApi;