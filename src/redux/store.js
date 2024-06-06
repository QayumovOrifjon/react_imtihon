import { configureStore } from "@reduxjs/toolkit";
import funcSlice , {setItems} from '../reducer/cards'
import { Data } from "../components/data/data";
import { cartSlice } from "../reducer/features";


export const store = configureStore({
    reducer :{
        cart: funcSlice,
        check : cartSlice
    },
});

store.dispatch(setItems(Data));

export default store;
