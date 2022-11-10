import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { addDoc, collection } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { auth, db } from "../Firebase/firebaseConfig";

export const authApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "authApi",
  tagType: ["AuthenticatedUser"],
  endpoints: (builder) => ({
    LoginUser: builder.query({
      async queryFn(email, password) {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          return { data: "User sucessfully Signed In!" };
        } catch (err) {
          return { error: err };
        }
      },
      providesTags: ["AuthenticatedUser"],
    }),
    CurrentAuthUser: builder.mutation({
      async queryFn() {
        try {
          console.log("This is placeholder");
        } catch (err) {
          return { error: err };
        }
      },
    }),
    RegisterUser: builder.query({
      async queryFn(userName, email, password) {
        try {
          let res = await createUserWithEmailAndPassword(auth, email, password);
          await addDoc(collection(db, "users"), {
            uid: res.user.uid,
            userName,
            authProvider: "local",
            email,
          });
          return { data: `User ${userName} Added Sucessfully` };
        } catch (err) {
          return { error: err };
        }
      },
    }),
    SendPasswordReset: builder.query({
      async queryFn(email) {
        try {
          await sendPasswordResetEmail(auth, email);
          return { data: "Password Reset Link Sent!" };
        } catch (err) {
          return { error: err };
        }
      },
    }),
    LogoutUser: builder.mutation({
      async queryFn() {
        try {
          signOut(auth);
          return { data: "User Logged Out Sucessfully!" };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["AuthenticatedUser"],
    }),
  }),
});

export const {
  useLoginUserQuery,
  useCurrentAuthUserMutation,
  useRegisterUser,
  useSendPassWordResetQuery,
  useLogoutUserMutation,
} = authApi;
