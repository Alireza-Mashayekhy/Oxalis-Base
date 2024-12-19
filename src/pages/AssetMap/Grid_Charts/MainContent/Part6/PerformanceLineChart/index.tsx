import React from 'react';
import { useSelector } from 'react-redux';

import LineChart from '@/components/chart';
import { getFilterData,getFinanceData } from '@/selectors/state';
import { FinancialData } from '@/types/new_data';
interface DataPoint {
    date: string;
    income: number;
    expense: number;
    profit: number;
    operating_cash_flow: number;
}

const colors = ['#00c49f', '#f44f73', '#ff8042', '#fab827', '#0088fe'];

const GeneralStatusTrendReview: React.FC = () => {
    const data: FinancialData[] = useSelector(getFinanceData);
    const filterData: FinancialData[] = useSelector(getFilterData);
    const FinancialData = filterData.map(
        ({ jalali_date, income, expense, profit, operating_cash_flow }) => {
            const [year, month] = jalali_date.split('/');
            const newDate = `${year}/${month}`;
            return {
                date: newDate,
                income,
                expense,
                profit,
                operating_cash_flow,
            };
        }
    );

    if (FinancialData.length === 0)
        return <div>داده‌ای برای نمایش وجود ندارد</div>;

    const Lines = ['income', 'expense', 'profit', 'operating_cash_flow'];
    const tooltipLabels: { [key: string]: string } = {
        income: 'درآمد',
        expense: 'هزینه',
        profit: 'سود',
        operating_cash_flow: 'جریان نقدی عملیاتی',
    };

    const CustomizedTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div
                    style={{
                        backgroundColor: '#333',
                        padding: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                >
                    <span>{`تاریخ: ${label}`}</span>
                    {payload.map((item: any) => {
                        const formattedValue = Math.floor(
                            item.value
                        ).toLocaleString();
                        return (
                            <p
                                style={{ margin: '3px' }}
                                key={item.name}
                            >{`${tooltipLabels[item.name] || item.name}: ${formattedValue} تومان`}</p>
                        );
                    })}
                </div>
            );
        }
        return null;
    };

    const renderLegend = (value: string) => {
        switch (value) {
            case 'income':
                return 'درآمد';
            case 'expense':
                return 'هزینه';
            case 'profit':
                return 'سود';
            case 'operating_cash_flow':
                return 'جریان نقدی عملیاتی';
            default:
                return value;
        }
    };

    const CustomLegend = ({ payload }: any) => (
        <ul
            style={{
                listStyleType: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}
        >
            {payload.map((entry: any, index: number) => (
                <li
                    key={`item-${index}`}
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <span
                        style={{
                            backgroundColor: entry.color,
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px',
                        }}
                    />
                    <span style={{ color: '#585757', marginRight: '4px' }}>
                        {renderLegend(entry.value)}
                    </span>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <h5 style={{ textAlign: 'center', color: '#808080' }}>
                عملکرد مالی
            </h5>
            <LineChart
                labels={['test']}
                datasets={[{ name: 'test', data: [2, 3] }]}
            />
        </>
    );
};

export default GeneralStatusTrendReview;
