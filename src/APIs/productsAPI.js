import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const productsApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "productsApi",
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      async queryFn() {
        try {
          const productRef = collection(db, "products");
          const querySnapshot = await getDocs(productRef);
          let products = [];
          querySnapshot?.forEach((doc) => {
            products.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          return { data: products };
        } catch (err) {
          return { error: err };
        }
      },
      providesTags: ["Product"],
    }),
    fetchProduct: builder.query({
      async queryFn(id) {
        try {
          const docRef = doc(db, "products", id);
          const snapshot = await getDoc(docRef);
          return { data: snapshot.data() };
        } catch (err) {
          return { error: err };
        }
      },
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(db, "products"), {
            ...data,
            timestamp: serverTimestamp(),
          });
          return { data: "upload sucessful" };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      async queryFn(id) {
        try {
          await deleteDoc(doc(db, "products", id));
          return { data: "delete sucessful" };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await updateDoc(doc(db, "products", id), {
            ...data,
            timestamp: serverTimestamp(),
          });
          return { data: "update successful" };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
