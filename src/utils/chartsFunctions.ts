import { AllAssets, BankPerFund, Data } from '@/types';

export const dailyValueBaseOnVentureType = (data: Data[]) => {
  const formattedData = data.reduce((accumulator, current) => {
    const fundName = current['VENTURE_TYPE'];
    const assetValue = current['DAY_VALUE'];
    let fund = accumulator.find((item) => item.name === fundName);
    if (!fund) {
      fund = { name: fundName, value: 0 };
      accumulator.push(fund);
    }
    fund.value += +assetValue;
    return accumulator;
  }, []);
  return formattedData;
};

const dailyValueBaseOnNameOfFund = (data) => {
  const formattedData = data.reduce((accumulator, current) => {
    const fundName = current['نام صندوق'];
    const assetValue = current['ارزش روز\r\n(ریال)'];

    // پیدا کردن شیء در accumulator با نام صندوق موجود
    let fund = accumulator.find((item) => item.name === fundName);

    // اگر شیء موجود نبود، یکی جدید ایجاد کن
    if (!fund) {
      fund = { name: fundName, value: 0 };
      accumulator.push(fund);
    }

    // اضافه کردن ارزش دارایی به شیء موجود یا جدید
    fund.value += assetValue;
    return accumulator;
  }, []);

  return formattedData;
};
export const filterBaseOnVentureName = (data: Data[], fundName: string) => {
  const filteredData = data.filter((data) => data['VENTURE_TYPE'] === fundName);

  const prepareDataForChart = dailyValueBaseOnVentureName(filteredData);

  return prepareDataForChart;
};
const dailyValueBaseOnVentureName = (data: Data[]) => {
  const formattedData = data.reduce((accumulator, current) => {
    const fundName = current['VENTURE_NAME'];
    const assetValue = current['DAY_VALUE'];

    let fund = accumulator.find((item) => item.name === fundName);
    if (!fund) {
      fund = { name: fundName, value: 0 };
      accumulator.push(fund);
    }
    fund.value += +assetValue;
    return accumulator;
  }, []);

  return formattedData;
};
const sortAndColored = (data) => {
  const range1 = { min: 0, max: 1000000000000 }; // Values under 1 million
  const range2 = { min: 1000000000000, max: 25000000000000 }; // Values between 1 to 4 million
  const range3 = { min: 25000000000000, max: Infinity }; // Values bigger than 3 million
  const colors = ['#4dbaa3', '#ee930e', '#f55074'];
  const getRangeIndex = (value) => {
    if (value >= range1.min && value <= range1.max) return 0;
    if (value >= range2.min && value <= range2.max) return 1;
    if (value >= range3.min) return 2;
  };
  data.sort((a, b) => a.value - b.value);
  const coloredData = data.map((item) => {
    const rangeIndex = getRangeIndex(item.value);
    return { ...item, color: colors[rangeIndex] };
  });
  return coloredData;
};

const filterBaseOnFundType = (data, filterItems) => {
  const filteredData = data.filter((data) => filterItems.includes(data['نوع صندوق']));
  const result = dailyValueBaseOnNameOfFund(filteredData);

  return result;
};

const filterBaseOnTypefAssets = (data, filterItems) => {
  const filteredData = data.filter((data) => data['نوع دارایی'] === filterItems);

  const result = dailyValueBaseOnNameOfFund(filteredData);

  return result;
};
const filterBaseOnFundName = (data, fundName) => {
  const filteredData = data.filter((data) => data['نام صندوق'] === fundName);
  //  without normalization
  // const result = dailyValueBaseOnBankDeposite(filteredData);
  // return result;

  // with normalization
  const prepareDataForChart = dailyValueBaseOnBankDeposite(filteredData);
  const result = makeNormalizedData(prepareDataForChart);
  return result;
};
const filterBaseOnBankDeposite = (data) => {
  const filteredData = data.filter((data) => data['نوع دارایی'] === 'سپرده بانکی');

  const prepareDataForChart = dailyValueBaseOnBankDeposite(filteredData);
  const result = makeNormalizedData(prepareDataForChart);
  // console.log(result);
  return result;
};

const dailyValueBaseOnBankDeposite = (data) => {
  const formattedData = data.reduce((accumulator, current) => {
    const fundName = current['نام صندوق'];
    const assetValue = current['ارزش روز\r\n(ریال)'];

    // پیدا کردن شیء در accumulator با نام صندوق موجود
    let fund = accumulator.find((item) => item.name === fundName);

    // اگر شیء موجود نبود، یکی جدید ایجاد کن
    if (!fund) {
      fund = { name: fundName, shortTerm: 0, longTerm: 0, checking: 0 };
      accumulator.push(fund);
    }
    if (current['نوع حساب/ طرف قرارداد'] === 'کوتاه مدت') {
      fund.shortTerm += assetValue;
    }
    if (current['نوع حساب/ طرف قرارداد'] === 'بلند مدت') {
      fund.longTerm += assetValue;
    }
    if (current['نوع حساب/ طرف قرارداد'] === 'جاری') {
      fund.checking += assetValue;
    }
    return accumulator;
    // اضافه کردن ارزش دارایی به شیء موجود یا جدید
  }, []);

  return formattedData;
};

const makeNormalizedData = (data) => {
  const normalizedData = data.map((item) => {
    const total = item.shortTerm + item.longTerm + item.checking; // Add more values if needed
    // const sh = item.shortTerm;
    // const lh = item.longTerm;
    // const ch = item.checking;
    return {
      ...item,
      shortTermN: Number(((item.shortTerm / total) * 100).toFixed(4)),
      longTermN: Number(((item.longTerm / total) * 100).toFixed(4)),
      checkingN: Number(((item.checking / total) * 100).toFixed(4))
      // tooltipValue: { sh, lh, ch },
    };
  });
  return normalizedData;
};
const colors = [
  '#8301b9',
  '#7438cb',
  '#6453df',
  '#5069e7',
  '#387df6',
  '#238dfb',
  '#1f9dff',
  '#0FA3FF',
  '#0C8EFF',
  '#0A74FF',
  '#8A2BE2',
  '#9370DB',
  '#7B68EE',
  '#6A5ACD',
  '#5A9BD5',
  '#4B8CD5',
  '#3C7DD5',
  '#2D6ED5',
  '#1E5FD5'
];
const filterBasedOnVentureNameAndConvertingStringValueToNumber = (
  data: AllAssets[] | BankPerFund[],
  ventureName: string
) => {
  const result = data
    .filter((item: AllAssets | BankPerFund) => item.fund === ventureName)
    .map((item: AllAssets | BankPerFund) => ({
      ...item,
      value: parseFloat(item.value),
      allowable: parseFloat(item.allowable)
    }))
    .sort((a, b) => a.value - b.value)
    .map((item, index) => ({
      ...item,
      color: colors[index]
    }));
  return result;
};
const filterBasedOnVentureNameAndConvertingStringValueToNumberWithoutSorting = (
  data: AllAssets[] | BankPerFund[],
  ventureName: string
) => {
  const result = data
    .filter((item: AllAssets | BankPerFund) => item.fund === ventureName)
    .map((item: AllAssets | BankPerFund) => ({
      ...item,
      value: parseFloat(item.value),
      allowable: parseFloat(item.allowable)
    }))
    .map((item, index) => ({
      ...item,
      color: colors[index]
    }));
  return result;
};

export {
  dailyValueBaseOnNameOfFund,
  filterBasedOnVentureNameAndConvertingStringValueToNumber,
  filterBasedOnVentureNameAndConvertingStringValueToNumberWithoutSorting,
  filterBaseOnBankDeposite,
  filterBaseOnFundName,
  filterBaseOnFundType,
  filterBaseOnTypefAssets,
  sortAndColored};
