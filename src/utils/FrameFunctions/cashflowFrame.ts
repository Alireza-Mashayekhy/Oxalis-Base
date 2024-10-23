import {
    CashFlowFrame,
  } from "@/types";
  type Option = {
    value: string;
    label: string;
  };
export const createDataForVentureTypeFilter = (data: CashFlowFrame[]): Option[] => {
    const filteredData = data.reduce((accumulator, current) => {
      const ventureType = current["VENTURE_TYPE"];
      const found = accumulator.find((item) => item.value === ventureType);
      if (!found) {
        accumulator.push({ value: ventureType, label: ventureType });
      }
      return accumulator;
    }, []);
    return filteredData;
  };
  
  export const createDataForVentureNameFilter = (
    data: CashFlowFrame[],
    ventureType: string
  ): Option[] => {
    const filteredDataBasedOnVentureType = data.filter(
      (item) => item.VENTURE_TYPE === ventureType
    );
  
    const filteredData = filteredDataBasedOnVentureType.reduce(
      (accumulator, current) => {
        const ventureName = current["VENTURE_NAME"];
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
  
  export const createDataForAssetTypeFilter = (
    data: CashFlowFrame[],
    ventureType: string,
    ventureName: string
  ): Option[] => {
    const filteredDataBasedOnVentureTypeAndVentureName = data.filter(
      (item) =>
        item.VENTURE_TYPE === ventureType && item.VENTURE_NAME === ventureName
    );
  
    const filteredData = filteredDataBasedOnVentureTypeAndVentureName.reduce(
      (accumulator, current) => {
        const assetType = current["DATE"];
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