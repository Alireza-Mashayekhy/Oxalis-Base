// //geo blu


// import React, { useEffect, useState } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsMap from 'highcharts/modules/map';
// import HighchartsReact from 'highcharts-react-official';

// // Initialize the map module
// HighchartsMap(Highcharts);

// const MapChart = () => {
//   const [topology, setTopology] = useState(null);

//   useEffect(() => {
//     const fetchTopology = async () => {
//       const response = await fetch(
//         'https://code.highcharts.com/mapdata/countries/ir/ir-all.topo.json'
//       );
//       const data = await response.json();
//       setTopology(data);
//     };

//     fetchTopology();
//   }, []);

//   const data = [
//     ['ir-5428', 10],
//     ['ir-hg', 11],
//     ['ir-bs', 12],
//     ['ir-kb', 13],
//     ['ir-fa', 14],
//     ['ir-es', 15],
//     ['ir-sm', 16],
//     ['ir-go', 17],
//     ['ir-mn', 18],
//     ['ir-th', 19],
//     ['ir-mk', 20],
//     ['ir-ya', 21],
//     ['ir-cm', 22],
//     ['ir-kz', 23],
//     ['ir-lo', 24],
//     ['ir-il', 25],
//     ['ir-ar', 26],
//     ['ir-qm', 27],
//     ['ir-hd', 28],
//     ['ir-za', 29],
//     ['ir-qz', 30],
//     ['ir-wa', 31],
//     ['ir-ea', 32],
//     ['ir-bk', 33],
//     ['ir-gi', 34],
//     ['ir-kd', 35],
//     ['ir-kj', 36],
//     ['ir-kv', 37],
//     ['ir-ks', 38],
//     ['ir-sb', 39],
//     ['ir-ke', 40],
//     ['ir-al', 41]
//   ];

//   const options = {
//     chart: {
//       map: topology
//     },
//     title: {
//       text: 'Highcharts Maps Basic Demo'
//     },
//     subtitle: {
//       text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/ir/ir-all.topo.json">Iran</a>'
//     },
//     mapNavigation: {
//       enabled: true,
//       buttonOptions: {
//         verticalAlign: 'bottom'
//       }
//     },
//     colorAxis: {
//       min: 0
//     },
//     series: [{
//       data: data,
//       name: 'Random Data',
//       states: {
//         hover: {
//           color: '#BADA55'
//         }
//       },
//       dataLabels: {
//         enabled: true,
//         format: '{point.name}'
//       }
//     }]
//   };

//   return (
//     <div>
//       {topology ? (
//         <HighchartsReact
//           highcharts={Highcharts}
//           constructorType={'mapChart'}
//           options={options}
//         />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default MapChart;
