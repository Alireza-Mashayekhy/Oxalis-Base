import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeSlice from '../slice/themeSlice';
import uploadReducer from '@/redux/store/uploadData';
import stockReducer from '@/redux/store/stockData';
import customersReducer from '@/redux/store/customersData';
import feeReducer from '@/redux/store/feeData';
import investmentReducer from '@/redux/store/investmentData';
import authentication from './authentication';
import usersReducer from './users';
import { LOGOUT_USER } from './actions';
import allassetsReducer from './allassets';
import bankDataReducer from './bankData';
import bankperfundReducer from './bankperfund';
import bondDataReducer from './bondData';
import bondFrameReducer from './bondFrame';
import cashflowFrameReducer from './cashflowFrame';
import counterReducer from './counter';
import dataReducer from './data';
import depositeReducer from './depositeFrame';
import eventReducer from './event';
import selfReducer from './self';
import shareFrameReducer from './shareFrame';
import taskReducer from './task';
import userReducer from './user';
import userListReducer from './userList';
import assetUploadReducer from './assetUpload';
import themeReducer from './theme';
import changeTabReducer from './changeTab';
import projectManagmentTestReducer from './projectManagmentTest';
import hrReducer from './chartsData';
import salesDataReducer from './salesData';
import financeDataReducer from './financeData';
import manufacturingDataDataReducer from './manufacturingData';
import filterDataReducer from './FilterData';
import salesFilterDataReducer from './salesFilter';
import manufacturingFilterDataReducer from './ManufacturingFilter';
import accordionReducer from './accordionTitle';
import jobTitleFilterReducer from './jobTitleFilterHr';
import citiesFilterReducer from './citiesFilterSales';
import citiesFilterManReducer from './citiesFilterMan';
import productsFilterReducer from './productsFilterSales';
import productsFilterManReducer from './productFilterMan';

const rootReducer = combineReducers({
    theme: themeSlice,
    uploadData: uploadReducer,
    stockData: stockReducer,
    customersData: customersReducer,
    feeData: feeReducer,
    authentication: authentication,
    users: usersReducer,
    investment: investmentReducer,
    allassets: allassetsReducer,
    bankData: bankDataReducer,
    bankperfunde: bankperfundReducer,
    bondData: bondDataReducer,
    bondFrame: bondFrameReducer,
    cashflowFrame: cashflowFrameReducer,
    counter: counterReducer,
    data: dataReducer,
    depositeFrame: depositeReducer,
    event: eventReducer,
    self: selfReducer,
    shareFrame: shareFrameReducer,
    task: taskReducer,
    upload: uploadReducer,
    user: userReducer,
    userList: userListReducer,
    changeTab: changeTabReducer,
    projectManagment: projectManagmentTestReducer,
    hrData: hrReducer,
    salesData: salesDataReducer,
    financeData: financeDataReducer,
    manufacturingDataData: manufacturingDataDataReducer,
    filterData: filterDataReducer,
    salesFilterData: salesFilterDataReducer,
    manufacturingFilterData: manufacturingFilterDataReducer,
    accordion: accordionReducer,
    jobTitleFilter: jobTitleFilterReducer,
    citiesFilter: citiesFilterReducer,
    citiesFilterMan: citiesFilterManReducer,
    productsFilter: productsFilterReducer,
    productsFilterMan: productsFilterManReducer,
    assetUpload: assetUploadReducer,
});
const appReducer = (
    state: any,
    action: { type: string } & Record<string, unknown>
) => {
    if (action.type === LOGOUT_USER) state = undefined;
    return rootReducer(state, action);
};

const persistConfig = {
    key: 'school_oxalisys!!!',
    storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    REHYDRATE,
                ],
            },
        }),
    reducer: persistedReducer,
});
export const persistor = persistStore(store);
