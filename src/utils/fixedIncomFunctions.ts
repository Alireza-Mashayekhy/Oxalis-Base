import { BondData } from "@/types";

export const getSymbols = (data: BondData[]) => {
  const result = data.map((item: BondData) => ({
    label: item.SYMBOL,
    value: item.SYMBOL,
  }));
  return result;
};

