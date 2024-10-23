import React, { useEffect, useState } from 'react';
import { ManufacturingData } from '@/types/new_data';
import { useSelector } from "react-redux";
import { getManData , getManFilterData , getSelectedProducts  } from '@/selectors/state';
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
  [key: string]: number | string; 
}

const CustomLegend = ({ payload }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', margin: '0 5px' }}>
          <span style={{ backgroundColor: entry.color, width: 10, height: 10, borderRadius: '50%', display: 'inline-block', marginLeft: 4,  }} />
          <span style={{fontSize:'12px' , color: 'rgb(102, 102, 102)'}}>{entry.value} </span>
        </div>
      ))}
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`تاریخ: ${payload[0].payload.date}`}</p>
        {payload.map((item, index) => (
          <>
          <span key={`item-${index}`}>{`${item.name}: ${item.value.toLocaleString()} `}</span> <br/>
          </>
          
        ))}
      </div>
    );
  }

  return null;
};

const GeneralStatusTrendReview: React.FC = () => {
  const filterData: ManufacturingData[] = useSelector(getManFilterData);
  const selectedProducts = useSelector(getSelectedProducts);
  const data: ManufacturingData[] = useSelector(getManData);
  const selectedCities = useSelector((state) => state.citiesFilterMan.selectedCities); 
  const [salesData, setSalesData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const PRODUCT_COLORS = {
    'محصول_1': '#00c49f',
    'محصول_2': '#f44f73',
    'محصول_3': '#ff8042',
    'محصول_4': '#fab827',
    'محصول_5': '#0088fe',
  };
  

  useEffect(() => {
    // const rawData = filterData.length > 0 ? filterData : data;
    const rawData = filterData ;
    if (rawData.length > 0) {
      const groupedData: { [key: string]: { [key: string]: number } } = {};

      rawData.forEach(({ jalali_date, quantity, product, city }) => {
        if (selectedCities.length > 0 && !selectedCities.includes(city) || selectedProducts.includes(product)) {
          return;
        }

        if (!groupedData[jalali_date]) {
          groupedData[jalali_date] = {};
        }

        if (!groupedData[jalali_date][product]) {
          groupedData[jalali_date][product] = 0;
        }
        groupedData[jalali_date][product] += quantity;
      });

      const formattedData: DataPoint[] = Object.keys(groupedData).map((date) => {
        return {
          date,
          ...groupedData[date],
        };
      });

      setSalesData(formattedData);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [filterData, data, selectedProducts, selectedCities]);

  if (error) return <div>{error}</div>;

  const cities = salesData.reduce((acc: string[], point: DataPoint) => {
    Object.keys(point).forEach((key) => {
      if (key !== 'date' && !acc.includes(key)) {
        acc.push(key);
      }
    });
    return acc;
  }, []);

  return (
    <>
    <h5 style={{textAlign:'center' , color:'#808080' , marginTop: '20px'}}>میزان تولید در سال</h5>
    <ResponsiveContainer height={350} width="100%">
      <LineChart
        data={salesData}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid stroke="#ccc"  vertical={false}/>
        <XAxis dataKey="date" angle={-20} dy={7} />
        <YAxis
          tick={{
            direction: "ltr",
            tickFormatter: (value) => value.toLocaleString()
          }}
        >
          <Label value="تعداد" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip content={CustomTooltip} />
        <Legend content={CustomLegend} />
        {cities.map((product, index) => (
          <Line key={product} type="monotone" dataKey={product} dot={false} stroke={PRODUCT_COLORS[product] || colors[index % colors.length]} />
        ))}
      </LineChart>
    </ResponsiveContainer>
   </>
  );
};

export default GeneralStatusTrendReview;
