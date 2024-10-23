import { ShareFrame } from "@/types";
type Option = {
  value: string;
  label: string;
};
export const createDataForShareFilter = (data: ShareFrame[]): Option[] => {
  const filteredData = data.reduce((accumulator, current) => {
    const ventureType = current["SYMBOL"];
    const found = accumulator.find((item) => item.value === ventureType);
    if (!found) {
      accumulator.push({ value: ventureType, label: ventureType });
    }
    return accumulator;
  }, []);
  return filteredData;
};

export const createDataForVentureTypeFilter = (
  data: ShareFrame[],
  symbol: string
): Option[] => {
  const filteredDataBasedOnVentureType = data.filter(
    (item) => item.SYMBOL === symbol
  );

  const filteredData = filteredDataBasedOnVentureType.reduce(
    (accumulator, current) => {
      const ventureName = current["VENTURE_TYPE"];
      const found = accumulator.find((item) => item.value === ventureName);
      if (!found) {
        accumulator.push({ value: ventureName, label: ventureName });
      }
      return accumulator;
    },
    []
  );

  return filteredData;
};

export const createDataForVentureNameFilter = (
  data: ShareFrame[],
  shareValue: string,
  ventureType: string
): Option[] => {
  const filteredDataBasedOnVentureTypeAndVentureName = data.filter(
    (item) => item.VENTURE_TYPE === ventureType && item.SYMBOL === shareValue
  );

  const filteredData = filteredDataBasedOnVentureTypeAndVentureName.reduce(
    (accumulator, current) => {
      const assetType = current["VENTURE_NAME"];
      const found = accumulator.find((item) => item.value === assetType);
      if (!found) {
        accumulator.push({ value: assetType, label: assetType });
      }
      return accumulator;
    },
    []
  );

  return filteredData;
};
