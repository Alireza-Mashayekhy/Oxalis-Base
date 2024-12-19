// import { AppDispatch } from '@/types';
// import { setSalesData } from '@/redux/store/salesData';
// import {getSalesData} from '@/api/new_data';
// import { SalesData } from '@/types/new_data';

// export const fetchSalesData = () => async (dispatch: AppDispatch) => {
//     try {
//         const salesData: SalesData[] = await getSalesData();
//       console.log('Fetched Sales Data:', salesData);
//       dispatch(setSalesData(salesData));
//     } catch (error) {
//       console.error(error);
//       console.error('Error fetching Sales data');
//     }
//   };

import { getSalesData } from '@/api/new_data';
import { setSalesData } from '@/redux/store/salesData';
import { AppDispatch } from '@/types';
import { SalesData } from '@/types/new_data';

export const fetchSalesData = () => async (dispatch: AppDispatch) => {
    try {
        const salesData: SalesData[] = await getSalesData();
        console.log('Fetched Sales Data44:', salesData);

        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

        const filteredSalesData = salesData.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate >= threeMonthsAgo;
        });

        console.log('Filtered Sales Data (last 3 months):', filteredSalesData);
        dispatch(setSalesData(filteredSalesData));
    } catch (error) {
        console.error(error);
        console.error('Error fetching Sales data');
    }
};
