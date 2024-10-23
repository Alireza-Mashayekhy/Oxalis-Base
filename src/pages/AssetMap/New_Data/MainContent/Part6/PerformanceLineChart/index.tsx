import React from 'react';
import { useSelector } from 'react-redux';
import { getFinanceData, getFilterData } from '@/selectors/state';
import { FinancialData } from '@/types/new_data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from 'recharts';

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

  // Check if filterData is used based on its length compared to data
  const salesData = (filterData.length > 0 ? filterData : data).map(({ jalali_date, income, expense, profit, operating_cash_flow }) => {
    const [year, month] = jalali_date.split('/');
    const newDate = `${year}/${month}`; 
    return { date: newDate, income, expense, profit, operating_cash_flow }; 
  });

  // Check if salesData has any data to display
  if (salesData.length === 0) return <div>داده‌ای برای نمایش وجود ندارد</div>;

  const Lines = ['income', 'expense', 'profit', 'operating_cash_flow']; 
  const tooltipLabels: { [key: string]: string } = {
    income: 'درآمد',
    expense: 'هزینه',
    profit: 'سود',
    operating_cash_flow: 'جریان نقدی عملیاتی'
  };

  const CustomizedTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#333', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <span>{`تاریخ: ${label}`}</span>
          {payload.map((item: any) => {
            const formattedValue = Math.floor(item.value).toLocaleString();
            return (
              <p style={{ margin: '3px' }} key={item.name}>{`${tooltipLabels[item.name] || item.name}: ${formattedValue} تومان`}</p>
            );
          })}
        </div>
      );
    }
    return null;
  }
  
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
    <ul style={{ listStyleType: 'none', padding: 0 , display: 'flex', flexDirection:'row' , justifyContent:'center'}}>
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ backgroundColor: entry.color, width: '12px', height: '12px', borderRadius: '50%', display: 'inline-block', marginRight: '8px' }} />
          <span style={{color:'#585757' , marginRight:'4px'}}>{renderLegend(entry.value)}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <ResponsiveContainer height={370} width="100%">
      <LineChart
        data={salesData}
        margin={{ top: 5, right: 40, left: 20, bottom: 5 }}
      >
       <CartesianGrid stroke="#ccc" vertical={false}/>
        <XAxis dataKey="date" angle={-20} dy={8} />
        <YAxis 
          tick={{ direction: "ltr" }} 
          tickFormatter={(value) => (value / 1000000).toLocaleString('fa-IR')} 
        >
          <Label value="مقدار (میلیون تومان)" angle={-90} position="insideLeft" dy={-50} dx={-5}/>
        </YAxis>
        <Tooltip content={<CustomizedTooltip />} />
        <Legend formatter={renderLegend} content={<CustomLegend />} />
        {Lines.map((city, index) => (
          <Line key={city} type="monotone" dataKey={city} dot={false} stroke={colors[index % colors.length]} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GeneralStatusTrendReview;
