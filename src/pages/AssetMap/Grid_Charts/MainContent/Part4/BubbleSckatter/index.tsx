import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { SalesData } from '@/types/new_data';
import { ApexOptions } from 'apexcharts';
import './Style.css';
import { useSelector } from "react-redux";
import { getSalesData } from '@/selectors/state';

const PRODUCT_COLORS = {
  'محصول_1': '#00c49f',
  'محصول_2': '#f44f73',
  'محصول_3': '#ff8042',
  'محصول_4': '#fab827',
  'محصول_5': '#0088fe',
};

const ApexChart: React.FC = () => {
  const data: SalesData[] = useSelector(getSalesData);

  const selectedProducts = useSelector((state) => state.productsFilter.selectedProducts);

  const aggregatedData = data.reduce((acc, { product, quantity_sold, revenue, profit }) => {

    if (selectedProducts.length > 0 && selectedProducts.includes(product)) {
      return acc;
    }

    if (!acc[product]) {
      acc[product] = { product, quantity_sold: 0, revenue: 0, profit: 0 };
    }
    acc[product].quantity_sold += quantity_sold;
    acc[product].revenue += revenue;
    acc[product].profit += profit;
    return acc;
  }, {} as Record<string, { product: string; quantity_sold: number; revenue: number; profit: number; }>);

  const filteredData = Object.values(aggregatedData).map(item => ({
    product: item.product,
    quantity_sold: item.quantity_sold,
    revenue: item.revenue,
    marginProfit: item.revenue !== 0 ? (item.profit / item.revenue) * 100 : 0,
    fillColor: PRODUCT_COLORS[item.product] || '#000000' 
  }));

  const series = filteredData.map(item => ({
    x: Math.ceil(item.revenue / 100000000000) * 100000000000, 
    y: item.marginProfit,
    z: item.quantity_sold,
    fillColor: item.fillColor,
  }));

  const options: ApexOptions = {
    chart: {
      height: 350,
      width: '100%',
      type: 'bubble',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false 
    },
   
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.8
    },
    xaxis: {
      type: 'numeric',
      labels: {
        style: {
          cssClass: 'xaxis', 
          colors: 'rgb(102, 102, 102)',
          fontSize: '12px',
          fontWeight:'bold',
          fontFamily: 'IRANSans',
        },
        rotate: 0,
        formatter: function(val) {
          return new Intl.NumberFormat('fa-IR').format(val / 1000000); 
      }
      },
      title: {
        text: 'مجموع درآمد (میلیون تومان)', 
        style: {
          fontSize: '12px', 
          color: 'rgb(102, 102, 102)',
          fontFamily: 'IRANSans',
          fontWeight:'normal',
        }
      }
    },
    yaxis: {
      max: 50,
        title: {
            text: 'حاشیه سود (%)', 
            style: {
                fontSize: '12px', 
                fontFamily: 'IRANSans',
                color: 'rgb(102, 102, 102)',
                 fontWeight:'normal',
            },
            offsetY: 0,
            offsetX: 0,
        },
      labels: {
        align: 'center',
        style: {
          fontSize: '12px', 
          fontFamily: 'IRANSans', 
          colors: 'rgb(102, 102, 102)',
          fontWeight:'bold',
        },
        formatter: (value) => {
          return Math.floor(value);
        },
       
      },
     
    },
    legend: {
      show: true,
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontFamily: 'IRANSans',
      },
      custom: ({ dataPointIndex }) => {
        const product = filteredData[dataPointIndex].product;
        const quantity = filteredData[dataPointIndex].quantity_sold.toLocaleString(); 
        const revenue = Math.floor(filteredData[dataPointIndex].revenue).toLocaleString(); 
        const marginProfit = filteredData[dataPointIndex].marginProfit.toFixed(2);
    
        return `
          <div class="custom-tooltip">
            <strong>محصول:</strong> ${product}<br/>
            <strong>تعداد فروش:</strong> ${quantity}<br/>
            <strong>مجموع درآمد:</strong> ${revenue} تومان<br/>
            <strong>حاشیه سود:</strong> ${marginProfit}%
          </div>
        `;
      }
    }
  };

  return (

      <div id="chart">
        <h5 style={{textAlign:'center' , color:'#808080' , marginTop: '20px'}}>عملکرد محصول </h5>
        <ReactApexChart options={options} series={[{ name: 'Sales Data', data: series }]} type="bubble" height={350} />
      </div>

  );
};

export default ApexChart;
