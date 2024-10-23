import { RootState } from '@/types';

export const getUploadData = (state: RootState) => state.uploadData;
export const getStockData = (state: RootState) => state.stockData;
export const getCustomersData = (state: RootState) => state.customersData;
export const getFeeData = (state: RootState) => state.feeData;
export const getAuthentication = (state: RootState) => state.authentication;
export const getUsers = (state: RootState) => state.users;
export const getInvestment = (state: RootState) => state.investment;

export const getHome = (state: RootState) => state.home;
export const getCounter = (state: RootState) => state.counter;
export const getSelf = (state: RootState) => state.self;
export const getEvent = (state: RootState) => state.event;
export const getTask = (state: RootState) => state.task;
export const getUpload = (state: RootState) => state.upload;
export const getFileUploadStatus = (state: RootState) => state.upload;
export const getUserList = (state: RootState) => state.userList;
export const getData = (state: RootState) => state.data;
export const getBankData = (state: RootState) => state.bankData;
export const getBondData = (state: RootState) => state.bondData;
export const getTheme = (state: RootState) => state.theme;
export const getDepositeFrame = (state: RootState) => state.depositeFrame;
export const getShareFrame = (state: RootState) => state.shareFrame;
export const getBondFrame = (state: RootState) => state.bondFrame;
export const getCashFlowFrame = (state: RootState) => state.cashflowFrame;
export const getProjectManagment = (state: RootState) => state.projectManagment;
export const getTabIndex = (state: RootState) => state.changeTab.activeTabIndex;
export const getAllAssets = (state: RootState) => state.allassets;
export const getBankperfunde = (state: RootState) => state.bankperfunde;
export const getHistory = (state: RootState) => state.upload;
export const getHrData = (state: RootState) => state.hrData;
export const getSalesData = (state: RootState) => state.salesData;
// export const getSalesFilterData = (state: RootState) => state.salesFilterData;
export const getFinanceData = (state: RootState) => state.financeData;
export const getManData = (state: RootState) => state.manufacturingDataData;
export const getFilterData = (state: RootState) => state.filterData;
// export const getSalesFilterData = (state: RootState) => state.salesFilterData;
// export const getManFilterData = (state: RootState) => state.manufacturingFilterData;
// export const getAccordionTitle = (state: RootState) => state.accordion;

export const getSelectedProducts = (state: RootState) =>
    state.productsFilterMan.selectedProducts;
export const getSelectedCities = (state: RootState) =>
    state.citiesFilterMan.selectedCities;
export const getSelectedCitiesSales = (state: RootState) =>
    state.citiesFilter.selectedCities;

export const getAccordionTitle = (state: RootState) => {
    return state.accordion;
};

export const getSalesFilterData = (state: RootState) => {
    return state.salesFilterData;
};

export const getManFilterData = (state: RootState) => {
    return state.manufacturingFilterData;
};
