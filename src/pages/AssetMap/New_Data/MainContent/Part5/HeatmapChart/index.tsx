import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts'; 
import { useSelector } from "react-redux";
import { getManData, getManFilterData } from '@/selectors/state';
import { ManufacturingData } from '@/types/new_data';

const ApexChart = () => {
  const data: ManufacturingData[] = useSelector(getManData);
  const filterData: ManufacturingData[] = useSelector(getManFilterData);
  const selectedProducts = useSelector((state) => state.productsFilterMan.selectedProducts);
  const [series, setSeries] = useState([]);
  
  const options = {
    chart: {
      height: 350,
      width: '100%',
      type: 'heatmap' as const, 
      toolbar: false,
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#00c49f"],
    xaxis: {
      type: 'category',
      categories: [],
      labels: {
        style: {
          fontFamily: 'IRANSans',
          colors:'rgb(102, 102, 102)',
        }
      },
      title: {
        text: 'ماه',
        style: {
          fontFamily: 'IRANSans',
          color:'rgb(102, 102, 102)',
        }
      },
    },
    yaxis: {
      type: 'category',
      categories: [], 
      labels: {
        align: 'center',
        padding: 5,
        style: {
          fontFamily: 'IRANSans',
          colors:'rgb(102, 102, 102)',
        }
      }, 
      title: {
        text: 'سال ',
        style: {
          fontFamily: 'IRANSans',
          color:'rgb(102, 102, 102)',
        }
      },
    }, 
    tooltip: {
      enabled: true,
      custom: function({ series, seriesIndex, dataPointIndex }) {
        const value = series[seriesIndex][dataPointIndex];
        const formattedValue = value.toLocaleString('fa-IR'); 
        return `
          <div class="custom-tooltip">
            <strong>تعداد: ${formattedValue}</strong>
          </div>
        `;
      }
    }
  };

  useEffect(() => {
    const dataToUse = filterData.length > 0 ? filterData : data;

    const filteredData = selectedProducts.length > 0 
      ? dataToUse.filter(item => !selectedProducts.includes(item.product)) 
      : dataToUse;

    if (filteredData.length > 0) {
      const processedData = filteredData.map(item => ({
        jalali_date: item.jalali_date,
        quantity: item.quantity,
      }));

      const uniqueMonths = new Set();
      const uniqueYears = new Set();
      const quantityMap = {};

      processedData.forEach(item => {
        const [year, month] = item.jalali_date.split('/').map(Number).slice(0, 2);
        uniqueMonths.add(month);
        uniqueYears.add(year);
        const key = `${year}-${month}`;
        quantityMap[key] = (quantityMap[key] || 0) + item.quantity;
      });

      const monthsArray = Array.from(uniqueMonths).sort();
      const yearsArray = Array.from(uniqueYears).sort();

      options.xaxis.categories = monthsArray;
      options.yaxis.categories = yearsArray;

      const seriesData = yearsArray.map(year => {
        return {
          name: `${year}`,
          data: monthsArray.map(month => {
            const key = `${year}-${month}`;
            return {
              x: month,
              y: quantityMap[key] || 0 
            };
          }),
        };
      });
      
      setSeries(seriesData);
    }
  }, [data, filterData, selectedProducts]); 
  return (
    <div>
      <h5 style={{textAlign:'center' , color:'#808080' , marginTop: '20px'}}>الگو فصلی تولید</h5>

        <ReactApexChart options={options} series={series} type="heatmap" height={320} />
    </div>
  );
}

export default ApexChart;
