import React from 'react';
import { SalesData } from '@/types/new_data';
import { useSelector } from 'react-redux';
import { getSalesData, getSalesFilterData } from '@/selectors/state';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';

interface DataPoint {
  date: string;
  [key: string]: number | string; 
}

const GeneralStatusTrendReview: React.FC = () => {
  
  const data: SalesData[] = useSelector(getSalesData);
  const filterData: SalesData[] = useSelector(getSalesFilterData);

  const colors = ['#00c49f', '#f44f73', '#ff8042', '#fab827', '#0088fe']; 

  const processData = (inputData: SalesData[]): DataPoint[] => {
    const groupedData: { [key: string]: { [key: string]: number } } = {};
  
    inputData.forEach(({ jalali_date, revenue, city }) => {
      if (!groupedData[jalali_date]) {
        groupedData[jalali_date] = {};
      }
      if (!groupedData[jalali_date][city]) {
        groupedData[jalali_date][city] = 0;
      }
      groupedData[jalali_date][city] += revenue; 
    });
  
    return Object.keys(groupedData).map((date) => {
      return {
        date,
        ...groupedData[date],
      };
    });
  };

  const formattedData: DataPoint[] = processData(data);
  const customData: DataPoint[] = filterData.length > 0 ? processData(filterData) : formattedData;

  const cities = formattedData.reduce((acc: string[], point: DataPoint) => {
    Object.keys(point).forEach((key) => {
      if (key !== 'date' && !acc.includes(key)) {
        acc.push(key);
      }
    });
    return acc;
  }, []);

  const renderCustomizedLegend = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', margin: '10px' }}>
        {cities.map((city, index) => (
          <div key={city} style={{ display: 'flex', alignItems: 'center', margin: '7px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: colors[index % colors.length], marginLeft: '5px' }}></div>
            <span style={{ fontSize: '14px', color: 'rgb(102, 102, 102)'  }}>{city}</span>
          </div>
        ))}
      </div>
    );
  };

  const formatTooltipValue = (value: number) => {
    return Math.floor(value).toLocaleString('fa-IR');    
  };

  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#444', border: '1px solid #ccc', padding: '10px' , borderRadius:'4px'}}>
          <p>{`تاریخ: ${label}`}</p>
          {payload.map((entry) => (
            <>
            <span key={entry.name}>{`${entry.name}: ${formatTooltipValue(entry.value)}`}</span> <br/>
            </>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer height={400} width="100%">
      <LineChart
        data={customData}
        margin={{ top: 5, right: 40, left: 45, bottom: 5 }}
      >
         <CartesianGrid stroke="#ccc"  vertical={false}/>
        <XAxis dataKey="date" angle={-20} dy={10} />
        <YAxis 
          tick={{
            direction: "ltr"
          }}
          
          tickFormatter={(value) => {
            const formattedValue = value / 1000000;
            return formattedValue.toLocaleString('fa-IR');
        }}        >
             <Label value="درآمد (میلیون  تومان)" angle={-90} position="insideLeft" style={{ fontSize: '12px' }} dx={0} dy={-50} />
             </YAxis>
        <Tooltip content={renderTooltip} />
        <Legend content={renderCustomizedLegend} />
        {cities.map((city, index) => (
          <Line key={city} type="monotone" dataKey={city} dot={false} stroke={colors[index % colors.length]} />
        ))}
        
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GeneralStatusTrendReview;
