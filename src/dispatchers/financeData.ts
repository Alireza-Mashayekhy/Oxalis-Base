import { AppDispatch } from '@/types';
import { setFinanceData } from '@/redux/store/financeData';
import { getFinanceData } from '@/api/new_data';
import { FinancialData } from '@/types/new_data';

export const fetchFinanceData = () => async (dispatch: AppDispatch) => {
    try {
        const financeData: FinancialData[] = await getFinanceData();
        console.log('Fetched FinanceData:', financeData); // چک کردن داده‌های دریافتی
        dispatch(setFinanceData(financeData));
    } catch (error) {
        console.error('Error fetching Finance data:', error);
    }
};
