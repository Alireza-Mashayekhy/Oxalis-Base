import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import HighchartsReact from 'highcharts-react-official';
import { ManufacturingData } from '@/types/new_data';
import { useSelector } from "react-redux";
import { getManData , getManFilterData} from '@/selectors/state';
import './style.css'

HighchartsMap(Highcharts);

const MapChart = () => {
  const dataChart: ManufacturingData[] = useSelector(getManData);
  const [topology, setTopology] = useState(null);
  const [data, setData] = useState([]);
  const filterData: ManufacturingData[] = useSelector(getManFilterData);
  
  useEffect(() => {
    const fetchTopology = async () => {
      const response = await fetch(
        'https://code.highcharts.com/mapdata/countries/ir/ir-all.topo.json'
      );
      const data = await response.json();
      setTopology(data);
    };

    fetchTopology();
  }, []);

  useEffect(() => {
    const cityCodes = {
      "تهران": "ir-th",
      "اصفهان": "ir-es",
      "شیراز": "ir-fa",
      "تبریز": "ir-ea",
      "مشهد": "ir-kv",
    };
    const cityQuantities = dataChart.reduce((acc, item) => {
      if (cityCodes[item.city]) {
        acc[cityCodes[item.city]] = (acc[cityCodes[item.city]] || 0) + item.quantity;
      }
      return acc;
    }, {});

    const formattedData = Object.entries(cityQuantities).map(([code, quantity]) => [code, quantity]);
    setData(formattedData);
  }, [dataChart]);

  const options = {
    chart: {
      map: topology,
    },
    legend: {
      enabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    
    navigator: {
      enabled: false,
    },
    
    title: {
      text: '',
      style: {
        fontFamily: 'IRANSans',
        fontSize: '14px',
        color: 'rgb(102, 102, 102)',
      },
    },
    
    mapNavigation: {
      enabled: false,
    },
    
    colorAxis: {
      min: 0,
      stops: [[0, '#FFFFFF'], [0.5, '#7cb5ec'], [1, '#005d8d']],
    },
    
    series: [{
      data: data,
      name: 'مجموع مقادیر',
      states: {
        hover: {
          color: '#BADA55',
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: 'IRANSans',
          fontSize: '12px',
        },
        formatter: function () {
          const cityNames = {
            "ir-th": "تهران",
            "ir-es": "اصفهان",
            "ir-fa": "شیراز",
            "ir-ea": "تبریز",
            "ir-kv": "مشهد",
          };
          return cityNames[this.point.properties['hc-key']] ? cityNames[this.point.properties['hc-key']] : null;
        },
      },
    }],
    
    tooltip: {
      useHTML: true,
      style: {
        fontFamily: 'IRANSans',
        fontSize: '12px',
        direction: 'rtl',
      },
      formatter: function () {
        const cityNames = {
          "ir-th": "تهران",
          "ir-es": "اصفهان",
          "ir-fa": "شیراز",
          "ir-ea": "تبریز",
          "ir-kv": "مشهد",
        };
        const cityName = cityNames[this.point.properties['hc-key']] || 'نامشخص';
        return `<b>${cityName}</b> <br />
        مقدار تولید: ${this.point.value}`;
      },
    },
  };

  return (
    <div>
      {topology ? (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'mapChart'}
          options={options}
        />
      ) : (
        <p>در حال بارگذاری ...</p>
      )}
    </div>
  );
};

export default MapChart;
