import { configureStore } from "@reduxjs/toolkit";
import { persistReducer , persistStore} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import weatherSlice from "./weatherSlice";

const persistConfig = {
    key:'root',
    storage:AsyncStorage
};



